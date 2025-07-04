"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, payload) => {
    const { statusCode, success, message, data } = payload;
    res.status(statusCode).json({
        success,
        message,
        data,
    });
};
exports.default = sendResponse;
