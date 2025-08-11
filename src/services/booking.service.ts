import BookingRepository from "../repositories/booking.repository";
import PropertyRepository from "../repositories/property.repository";
import { rangesOverlap } from "../utils/dateUtils";

export class BookingService {
  async create(payload: {
    property_id: number;
    user_name: string;
    start_date: string;
    end_date: string;
  }) {
    const property = await PropertyRepository.findById(payload.property_id);
    if (!property) throw new Error("Property not found");

    const start = payload.start_date;
    const end = payload.end_date;

    if (!start || !end) throw new Error("start_date and end_date are required");

    if (new Date(start) >= new Date(end))
      throw new Error("start_date must be before end_date");

    if (start < property.available_from || end > property.available_to) {
      throw new Error("Dates are outside property availability");
    }

    const overlap = await BookingRepository.findOverlapping(
      payload.property_id,
      start,
      end
    );
    if (overlap) throw new Error("Booking overlaps with existing booking");

    return await BookingRepository.create(payload as any);
  }
  async cancel(id: number) {
    const deleted = await BookingRepository.delete(id);
    if (!deleted) throw new Error("Booking not found");
    return true;
  }

  async update(
    id: number,
    payload: { start_date: string; end_date: string; user_name?: string }
  ) {
    const booking = await BookingRepository.findById(id);
    if (!booking) throw new Error("Booking not found");

    const start = payload.start_date || booking.start_date;
    const end = payload.end_date || booking.end_date;

    if (new Date(start) >= new Date(end))
      throw new Error("start_date must be before end_date");

    const property = await PropertyRepository.findById(booking.property_id);
    if (!property) throw new Error("Property not found");

    if (start < property.available_from || end > property.available_to) {
      throw new Error("Dates are outside property availability");
    }

    const otherOverlap = await BookingRepository.findOverlapping(
      booking.property_id,
      start,
      end
    );
    if (otherOverlap && otherOverlap.id !== booking.id)
      throw new Error("Dates overlap with another booking");

    booking.start_date = start;
    booking.end_date = end;
    if (payload.user_name) booking.user_name = payload.user_name;

    await booking.save();
    return booking;
  }
}

export default new BookingService();
