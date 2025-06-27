"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const book_route_1 = require("./modules/book/book.route");
const borrow_route_1 = require("./modules/borrow/borrow.route");
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use('/api/books', book_route_1.BookRoute);
app.use('/api/borrow', borrow_route_1.BorrowRoute);
app.use(globalErrorHandler_1.default);
app.get('/', (req, res) => {
    res.send({ success: true });
});
exports.default = app;
