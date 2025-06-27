import express from 'express';
import { BorrowController } from './borrow.controller';

const router = express.Router();


// Borrow routes
router.post('/', BorrowController.borrowBook);
router.get('/', BorrowController.getBorrowSummary);

export const BorrowRoute = router;