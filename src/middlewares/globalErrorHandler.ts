import { ErrorRequestHandler } from 'express';
import mongoose from 'mongoose';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = 'Something went wrong';

    if (err instanceof mongoose.Error.ValidationError) {
        statusCode = 400;
        message = 'Validation failed';
        res.status(statusCode).json({ success: false, message, error: err });
        return;
    }

    if (err instanceof mongoose.Error.CastError) {
        statusCode = 400;
        message = `Invalid ${err.path}: ${err.value}`;
        res.status(statusCode).json({ success: false, message, error: err });
        return;
    }

    res.status(statusCode).json({ success: false, message: err.message || message, error: err });
};

export default globalErrorHandler;
