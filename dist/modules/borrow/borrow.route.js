"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRoute = void 0;
const express_1 = __importDefault(require("express"));
const borrow_controller_1 = require("./borrow.controller");
const router = express_1.default.Router();
// borrow routes
router.post('/', borrow_controller_1.BorrowController.borrowBook);
router.get('/', borrow_controller_1.BorrowController.getBorrowSummary);
exports.BorrowRoute = router;
