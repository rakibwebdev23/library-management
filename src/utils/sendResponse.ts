import { Response } from 'express';

type TResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    data?: T;
};

const sendResponse = <T>(res: Response, payload: TResponse<T>): void => {
    const { statusCode, success, message, data } = payload;

    res.status(statusCode).json({
        success,
        message,
        data,
    });
};

export default sendResponse;
