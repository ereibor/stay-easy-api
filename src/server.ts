import app from './app';
import db from './config/db';

const PORT = Number(process.env.PORT || 3000);

(async () => {
  try {
    // Connect to DB
    await db.connect();

    // Sync DB models (dev mode only)
    await db.sequelize.sync({ alter: true });

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 StayEase API listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server', err);
    process.exit(1);
  }
})();