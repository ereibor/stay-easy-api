import { Request, Response } from 'express';
import BookingService from '../services/booking.service';

export class BookingController {
  async create(req: Request, res: Response) {
    try {
      const booking = await BookingService.create(req.body);
      res.status(201).json(booking);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async cancel(req: Request, res: Response) {
    try {
      await BookingService.cancel(Number(req.params.id));
      res.json({ message: 'Booking cancelled' });
    } catch (err: any) {
      res.status(404).json({ error: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const booking = await BookingService.update(Number(req.params.id), req.body);
      res.json(booking);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new BookingController();