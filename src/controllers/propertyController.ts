import { Request, Response } from 'express';
import PropertyService from '../services/property.service';

export class PropertyController {
  async list(req: Request, res: Response) {
    try {
      const page = Number(req.query.page || 1);
      const limit = Number(req.query.limit || 10);
      const start_date = req.query.start_date as string | undefined;
      const end_date = req.query.end_date as string | undefined;

      const result = await PropertyService.list(page, limit, start_date, end_date);
      res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async availability(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await PropertyService.getAvailability(id);
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new PropertyController();