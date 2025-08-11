import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

class Database {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(
      process.env.DB_NAME || 'booking_db',
      process.env.DB_USER || 'root',
      process.env.DB_PASS || '',
      {
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.DB_PORT || 3306),
        dialect: 'mysql',
        logging: false,
      }
    );
  }

  async connect(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      console.log('✅ MySQL connected');
    } catch (err) {
      console.error('❌ DB connection error', err);
      throw err;
    }
  }
}

export default new Database();