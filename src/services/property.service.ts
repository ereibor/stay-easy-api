import PropertyRepository from '../repositories/property.repository';
import BookingRepository from '../repositories/booking.repository';

export class PropertyService {
  async list(page = 1, limit = 10, start_date?: string, end_date?: string) {
    const offset = (page - 1) * limit;

    if (start_date && end_date) {
      // find properties whose available range covers requested range
      const props = await PropertyRepository.findAvailableByDateRange(start_date, end_date);

      // filter out properties that have overlapping bookings in that range
      const available: any[] = [];
      for (const p of props) {
        const overlap = await BookingRepository.findOverlapping(p.id, start_date, end_date);
        if (!overlap) available.push(p);
      }

      return { data: available, total: available.length };
    }

    const data = await PropertyRepository.findAll(offset, limit);
    const total = await PropertyRepository.count();
    return { data, total };
  }

  async getAvailability(property_id: number) {
    const bookings = await BookingRepository.findByProperty(property_id);
    // compute free slots based on property availability and existing bookings
    // For simplicity, we'll return the bookings as busy ranges and property available range.
    return { bookings };
  }
}

export default new PropertyService();