import { Borrow } from './borrow.model';


// borrow book
const borrowBook = async (payload: any) => await Borrow.create(payload);


//  get borrow summary
const getBorrowSummary = async () => {
  const result = await Borrow.aggregate([
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
};

export const BorrowService = { borrowBook, getBorrowSummary };
