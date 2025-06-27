import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BookRoute } from './modules/book/book.route';
import { BorrowRoute } from './modules/borrow/borrow.route';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', BookRoute);
app.use('/api/borrow', BorrowRoute);

app.use(globalErrorHandler);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'API is running!',
  });
});

export default app;