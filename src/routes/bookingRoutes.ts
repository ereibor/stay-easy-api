import { Router } from 'express';
import BookingController from '../controllers/bookingController';

const router = Router();

/**
 * @openapi
 * /bookings:
 *   post:
 *     summary: Create a booking
 *     tags:
 *       - Bookings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - property_id
 *               - user_name
 *               - start_date
 *               - end_date
 *             properties:
 *               property_id:
 *                 type: integer
 *               user_name:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', (req, res) => BookingController.create(req, res));

/**
 * @openapi
 * /bookings/{id}:
 *   put:
 *     summary: Update a booking
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *               user_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *       400:
 *         description: Invalid input
 */
router.put('/:id', (req, res) => BookingController.update(req, res));

/**
 * @openapi
 * /bookings/{id}:
 *   delete:
 *     summary: Cancel a booking
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking cancelled
 *       404:
 *         description: Booking not found
 */
router.delete('/:id', (req, res) => BookingController.cancel(req, res));

export default router;