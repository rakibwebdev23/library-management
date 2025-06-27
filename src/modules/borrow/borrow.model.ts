import { Schema, model } from 'mongoose';
import { IBorrow } from './borrow.interface';
import { Book } from '../book/book.model';


// borrow schema
const borrowSchema = new Schema<IBorrow>({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    quantity: { type: Number, required: true, min: 1, validate: Number.isInteger },
    dueDate: { type: Date, required: true },
}, { timestamps: true });


// pre save hook
borrowSchema.pre('save', async function (next) {
    const book = await Book.findById(this.book);
    if (!book) return next(new Error('Book not found'));
    if (book.copies < this.quantity) return next(new Error('Not enough copies'));

    book.copies -= this.quantity;
    if (book.copies === 0) book.available = false;
    await book.save();
    next();
});

export const Borrow = model<IBorrow>('Borrow', borrowSchema);