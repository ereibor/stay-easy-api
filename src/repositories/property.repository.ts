import Property from '../models/property';

export class PropertyRepository {
  async findAll(offset = 0, limit = 10) {
    return Property.findAll({ offset, limit, order: [['id', 'ASC']] });
  }

  async count() {
    return Property.count();
  }

  async findById(id: number) {
    return Property.findByPk(id);
  }

  async findAvailableByDateRange(start_date: string, end_date: string) {
    // This only filters by the property's available_from/available_to range.
    return Property.findAll({
      where: {
        available_from: { [Property.sequelize!.Op.lte]: start_date },
        available_to: { [Property.sequelize!.Op.gte]: end_date },
      },
    });
  }
}

export default new PropertyRepository();