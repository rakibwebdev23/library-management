import { Request, Response, NextFunction } from 'express';
import { BookService } from './book.service';

class BookController {
  // Create a new book
  static async createBook(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const book = await BookService.createBook(req.body);
      res.status(201).json({
        success: true,
        message: 'Book created successfully',
        data: book,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all books
  static async getAllBooks(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const books = await BookService.getAllBooks(req.query);
      res.status(200).json({
        success: true,
        message: 'Books retrieved successfully',
        data: books,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get a single book by ID
  static async getBookById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const book = await BookService.getBookById(req.params.bookId);
      res.status(200).json({
        success: true,
        message: 'Book retrieved successfully',
        data: book,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update a book
  static async updateBook(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const updatedBook = await BookService.updateBook(req.params.bookId, req.body);
      res.status(200).json({
        success: true,
        message: 'Book updated successfully',
        data: updatedBook,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete a book
  static async deleteBook(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deletedBook = await BookService.deleteBook(req.params.bookId);
      res.status(200).json({
        success: true,
        message: 'Book deleted successfully',
        data: deletedBook,
      });
    } catch (error) {
      next(error);
    }
  }
}

export { BookController };