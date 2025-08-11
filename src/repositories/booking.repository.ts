import Booking from '../models/booking';
import { Op } from 'sequelize';

export class BookingRepository {
  async create(payload: Partial<Booking>) {
    return Booking.create(payload as any);
  }

  async findOverlapping(property_id: number, start_date: string, end_date: string) {
    // Overlap detection: any booking where ranges intersect
    return Booking.findOne({
      where: {
        property_id,
        [Op.or]: [
          { start_date: { [Op.between]: [start_date, end_date] } },
          { end_date: { [Op.between]: [start_date, end_date] } },
          {
            start_date: { [Op.lte]: start_date },
            end_date: { [Op.gte]: end_date },
          },
        ],
      },
    });
  }

  async findByProperty(property_id: number) {
    return Booking.findAll({ where: { property_id }, order: [['start_date', 'ASC']] });
  }

  async delete(id: number) {
    return Booking.destroy({ where: { id } });
  }

  async findById(id: number) {
    return Booking.findByPk(id);
  }
}

export default new BookingRepository();