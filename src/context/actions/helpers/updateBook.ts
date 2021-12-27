import { BookType } from "../../../components/Book/types";
import { ActionDispatch } from "../types";

const updateBook =
  (
    fromShelf: "UPDATE_BOOK_FROM_FIRST_SHELF" | "UPDATE_BOOK_FROM_SECOND_SHELF",
    dispatch: ActionDispatch,
    targetShelf: BookType[]
  ) =>
  (book: BookType, index: number) => {
    const shelf = [...targetShelf];
    shelf[index] = book;

    dispatch({
      type: fromShelf,
      payload: shelf,
    });

    alert("The book was updated successfully");
  };

export default updateBook;
