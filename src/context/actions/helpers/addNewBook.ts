import { BookType } from "../../../components/Book/types";
import { ActionDispatch } from "../types";

const addNewBook =
  (
    toShelf: "ADD_BOOK_TO_FIRST_SHELF" | "ADD_BOOK_TO_SECOND_SHELF",
    dispatch: ActionDispatch,
    targetShelf: BookType[]
  ) =>
  (newBook: BookType) => {
    const shelf = [...targetShelf];

    if (
      (shelf.length >= 11 && window.screen.width >= 500) ||
      (shelf.length >= 10 &&
        window.screen.width >= 400 &&
        window.screen.width < 500) ||
      (shelf.length >= 9 &&
        window.screen.width >= 160 &&
        window.screen.width < 400)
    ) {
      alert("The selected Shelf if full. Please choose another");
    } else {
      shelf.push(newBook);
      dispatch({
        type: toShelf,
        payload: shelf,
      });
    }
  };

export default addNewBook;
