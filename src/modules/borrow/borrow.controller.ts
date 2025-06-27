import { Request, Response, NextFunction } from 'express';
import { BorrowService } from './borrow.service';

class BorrowController {
  //Borrow a book
  static async borrowBook(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await BorrowService.borrowBook(req.body);
      res.status(201).json({
        success: true,
        message: 'Borrowed successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get borrow summary
  static async getBorrowSummary(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const summary = await BorrowService.getBorrowSummary();
      res.status(200).json({
        success: true,
        message: 'Borrow summary retrieved successfully',
        data: summary,
      });
    } catch (error) {
      next(error);
    }
  }
}

export { BorrowController };