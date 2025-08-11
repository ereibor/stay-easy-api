import { Router } from 'express';
import PropertyController from '../controllers/propertyController';

const router = Router();

/**
 * @openapi
 * /properties:
 *   get:
 *     summary: List properties
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: start_date
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date filter for available properties
 *       - in: query
 *         name: end_date
 *         schema:
 *           type: string
 *           format: date
 *         description: End date filter for available properties
 *     responses:
 *       200:
 *         description: List of properties
 */
router.get('/', (req, res) => PropertyController.list(req, res));

/**
 * @openapi
 * /properties/{id}/availability:
 *   get:
 *     summary: Get property availability
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property availability information
 */
router.get('/:id/availability', (req, res) => PropertyController.availability(req, res));

export default router;