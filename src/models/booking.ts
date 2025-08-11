import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/db';

interface BookingAttributes {
  id: number;
  property_id: number;
  user_name: string;
  start_date: string; // DATEONLY
  end_date: string; // DATEONLY
  created_at?: Date;
}

type BookingCreationAttributes = Optional<BookingAttributes, 'id' | 'created_at'>;

export class Booking extends Model<BookingAttributes, BookingCreationAttributes>
  implements BookingAttributes {
  public id!: number;
  public property_id!: number;
  public user_name!: string;
  public start_date!: string;
  public end_date!: string;
  public created_at?: Date;
}

Booking.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    property_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    user_name: { type: DataTypes.STRING(255), allowNull: false },
    start_date: { type: DataTypes.DATEONLY, allowNull: false },
    end_date: { type: DataTypes.DATEONLY, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  },
  {
    sequelize: db.sequelize,
    tableName: 'bookings',
    modelName: 'Booking',
    timestamps: false,
  }
);

export default Booking;