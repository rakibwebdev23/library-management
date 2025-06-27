import { Book } from './book.model';
import { IBook } from './book.interface';

// Create a book
const createBook = async (payload: IBook): Promise<IBook> => {
  const newBook = await Book.create(payload);
  return newBook;
};

// Get all books with optional filter, sorting, and limit
const getAllBooks = async (query: {
  filter?: string;
  sortBy?: string;
  sort?: 'asc' | 'desc';
  limit?: string;
}): Promise<IBook[]> => {
  const { filter, sortBy = 'createdAt', sort = 'desc', limit = '10' } = query;

  const sortOrder = sort === 'asc' ? 1 : -1;
  const parsedLimit = parseInt(limit, 10);

  const condition = filter ? { genre: filter.toUpperCase() } : {};

  const books = await Book.find(condition)
    .sort({ [sortBy]: sortOrder })
    .limit(parsedLimit);

  return books;
};

// Get a single book by ID
const getBookById = async (id: string): Promise<IBook | null> => {
  return await Book.findById(id);
};

// Update a book
const updateBook = async (id: string, data: Partial<IBook>): Promise<IBook | null> => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

// Delete a book
const deleteBook = async (id: string): Promise<IBook | null> => {
  return await Book.findByIdAndDelete(id);
};

export const BookService = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};