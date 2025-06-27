import { Schema, model, Model } from 'mongoose';
import { IBook } from './book.interface';

interface BookModel extends Model<IBook> {
  isAvailable(bookId: string, quantity: number): Promise<boolean>;
}

// Book schema definition
const bookSchema = new Schema<IBook, BookModel>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: {
      type: Number,
      required: true,
      min: [0, 'Copies must be a positive number'],
      validate: {
        validator: Number.isInteger,
        message: 'Copies must be an integer',
      },
    },
    available: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// Static method with type safety
bookSchema.statics.isAvailable = async function (
  this: BookModel,
  bookId: string,
  quantity: number
): Promise<boolean> {
  const book = await this.findById(bookId);
  if (!book) throw new Error('Book not found');
  return book.copies >= quantity;
};

export const Book = model<IBook, BookModel>('Book', bookSchema);