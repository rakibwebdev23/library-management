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
exports.BookService = void 0;
const book_model_1 = require("./book.model");
// create a book
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Book.create(payload);
});
// get all books
const getAllBooks = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = query.filter;
    const sortBy = query.sortBy || 'createdAt';
    const sortOrder = query.sort === 'asc' ? 1 : -1;
    const limit = parseInt(query.limit) || 10;
    const condition = filter ? { genre: String(filter).toUpperCase() } : {};
    const books = yield book_model_1.Book.find(condition)
        .sort({ [sortBy]: sortOrder })
        .limit(limit);
    return books;
});
// get a book by id
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Book.findById(id);
});
// update a book
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Book.findByIdAndUpdate(id, data, { new: true });
});
// delete a book
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Book.findByIdAndDelete(id);
});
exports.BookService = { createBook, getAllBooks, getBookById, updateBook, deleteBook };
