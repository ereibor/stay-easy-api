import db from './config/db';
import Property from './models/property';

async function seed() {
  try {
    await db.connect();
    await db.sequelize.sync({ force: true }); // Reset tables

    await Property.bulkCreate([
      {
        title: 'Luxury Beach House',
        description: 'A beautiful beachfront property with stunning ocean views.',
        price_per_night: 250.0,
        available_from: '2025-08-01',
        available_to: '2025-08-31'
      },
      {
        title: 'Mountain Cabin',
        description: 'A cozy cabin located in the heart of the mountains.',
        price_per_night: 150.0,
        available_from: '2025-08-10',
        available_to: '2025-09-10'
      }
    ]);

    console.log('✅ Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();