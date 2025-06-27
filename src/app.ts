import express, { Application, Request, Response } from 'express'
const app: Application = express();
import cors from 'cors';
import { BookRoute } from './modules/book/book.route';
import { BorrowRoute } from './modules/borrow/borrow.route';
import globalErrorHandler from './middlewares/globalErrorHandler';

// parser
app.use(express.json());
app.use(cors());

// routes
app.use('/api/books', BookRoute);
app.use('/api/borrow', BorrowRoute);
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
    res.send({ success: true })
})

export default app
