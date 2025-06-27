"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
// create a book
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.createBook(req.body);
        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// get all books
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_service_1.BookService.getAllBooks(req.query);
        res.status(200).json({
            success: true,
            message: 'Books retrieved successfully',
            data: books,
        });
    }
    catch (error) {
        next(error);
    }
});
// get a book by id
const getBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_service_1.BookService.getBookById(req.params.bookId);
        res.status(200).json({
            success: true,
            message: 'Book retrieved successfully',
            data: book,
        });
    }
    catch (error) {
        next(error);
    }
});
// update a book
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_service_1.BookService.updateBook(req.params.bookId, req.body);
        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: book,
        });
    }
    catch (error) {
        next(error);
    }
});
// delete a book
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_service_1.BookService.deleteBook(req.params.bookId);
        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: book,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BookController = { createBook, getAllBooks, getBookById, updateBook, deleteBook };
