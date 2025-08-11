import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/db';

interface PropertyAttributes {
  id: number;
  title: string;
  description: string;
  price_per_night: number;
  available_from: string; // DATEONLY ISO yyyy-mm-dd
  available_to: string;
}

type PropertyCreationAttributes = Optional<PropertyAttributes, 'id'>;

export class Property extends Model<PropertyAttributes, PropertyCreationAttributes>
  implements PropertyAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public price_per_night!: number;
  public available_from!: string;
  public available_to!: string;
}

Property.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING(255), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price_per_night: { type: DataTypes.FLOAT, allowNull: false },
    available_from: { type: DataTypes.DATEONLY, allowNull: false },
    available_to: { type: DataTypes.DATEONLY, allowNull: false },
  },
  {
    sequelize: db.sequelize,
    tableName: 'properties',
    modelName: 'Property',
    timestamps: false,
  }
);

export default Property;