import { BookType } from "../../../components/Book/types";
import { ActionDispatch } from "../types";

const deleteBook =
  (
    fromShelf: "DELETE_BOOK_FROM_FIRST_SHELF" | "DELETE_BOOK_FROM_SECOND_SHELF",
    dispatch: ActionDispatch,
    targetShelf: BookType[]
  ) =>
  (atIndex: number) => {
    const shelf = [...targetShelf];
    shelf.splice(atIndex, 1);

    dispatch({
      type: fromShelf,
      payload: shelf,
    });
  };

export default deleteBook;
