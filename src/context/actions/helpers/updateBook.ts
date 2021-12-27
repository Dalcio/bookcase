import { TBook } from "../../../components/Book/types";
import { ActionDispatch } from "../types";

const updateBook =
  (
    fromShelf: "UPDATE_BOOK_FROM_FIRST_SHELF" | "UPDATE_BOOK_FROM_SECOND_SHELF",
    dispatch: ActionDispatch,
    targetShelf: TBook[]
  ) =>
  (book: TBook, index: number) => {
    const shelf = [...targetShelf];
    shelf[index] = book;

    dispatch({
      type: fromShelf,
      payload: shelf,
    });
  };

export default updateBook;
