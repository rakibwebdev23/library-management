import { Types, Document } from 'mongoose';

// Borrow interface
export interface IBorrow extends Document {
  book: Types.ObjectId;
  quantity: number;
  dueDate: Date;
  returned?: boolean;
  borrowedAt?: Date;
}