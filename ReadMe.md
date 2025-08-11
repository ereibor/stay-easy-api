# StayEase Booking API

A class-based **Express.js** REST API built with **TypeScript** and **MySQL**, designed for managing property listings and bookings. Fully documented with **Swagger**.

## Features

* **OOP architecture** with services, repositories, and controllers
* MySQL database with Sequelize ORM
* Swagger UI documentation at `/api-docs`
* Property listing and availability checking
* Booking creation, update, and cancellation
* Database seeding for easy testing
* CORS enabled for smooth Swagger testing

## Installation

```bash
git clone <repo-url>
cd stayease-booking-api
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=stayease
DB_PORT=3306
PORT=3000
```

## Running the Project

```bash
npm run dev
```

Server will start at:

```
http://localhost:3000
```

Swagger UI docs:

```
http://localhost:3000/api-docs
```

## Seeding the Database

Run the seed script to add sample properties:

```bash
npm run seed
```

## Testing with Swagger

1. Visit `http://localhost:3000/api-docs`
2. Find the **GET /properties** endpoint → **Try it out** → **Execute**
3. Test booking creation with **POST /bookings** using a valid `property_id`

Example request body:

```json
{
  "property_id": 1,
  "user_name": "John Doe",
  "start_date": "2025-08-11",
  "end_date": "2025-08-15"
}
```

## Scripts

```json
"scripts": {
  "dev": "ts-node-dev src/server.ts",
  "seed": "ts-node src/seed.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

## License


