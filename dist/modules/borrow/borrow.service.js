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
exports.BorrowService = void 0;
const borrow_model_1 = require("./borrow.model");
// borrow book
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () { return yield borrow_model_1.Borrow.create(payload); });
//  get borrow summary
const getBorrowSummary = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_model_1.Borrow.aggregate([
        {
            $group: {
                _id: "$book",
                totalQuantity: { $sum: "$quantity" },
            },
        },
        {
            $lookup: {
                from: "books",
                localField: "_id",
                foreignField: "_id",
                as: "bookDetails",
            },
        },
        {
            $unwind: "$bookDetails",
        },
        {
            $project: {
                _id: 0,
                totalQuantity: 1,
                book: {
                    title: "$bookDetails.title",
                    isbn: "$bookDetails.isbn",
                },
            },
        },
    ]);
    // return result
    return result.map(({ book, totalQuantity }) => ({
        book,
        totalQuantity,
    }));
});
exports.BorrowService = { borrowBook, getBorrowSummary };
