import { StatePayloadType } from "../reducer/types";
import {
  addNewBook,
  deleteBook,
  reorderBothShelves,
  reorderShelf,
  sortBy,
  updateBook,
} from "./helpers";
import { ActionDispatch, ActionsType } from "./types";

const actions = (
  dispatch: ActionDispatch,
  state: StatePayloadType
): ActionsType => ({
  sortByAlphabet: sortBy("alphabet", dispatch, state),
  sortByColors: sortBy("color", dispatch, state),
  sortBySizes: sortBy("size", dispatch, state),
  reorderFromFstToSndShelves: reorderBothShelves(
    "FIRST",
    dispatch,
    state.firstShelf,
    state.secondShelf
  ),
  reorderFromSndToFstShelves: reorderBothShelves(
    "SECOND",
    dispatch,
    state.secondShelf,
    state.firstShelf
  ),
  reorderFirstShelf: reorderShelf(
    "REORDER_FIRST_SHELF",
    dispatch,
    state.firstShelf
  ),
  reorderSecondShelf: reorderShelf(
    "REORDER_SECOND_SHELF",
    dispatch,
    state.secondShelf
  ),
  deleteBookFromFirstShelf: deleteBook(
    "DELETE_BOOK_FROM_FIRST_SHELF",
    dispatch,
    state.firstShelf
  ),
  deleteBookFromSecondShelf: deleteBook(
    "DELETE_BOOK_FROM_SECOND_SHELF",
    dispatch,
    state.secondShelf
  ),
  addBookToFirstShelf: addNewBook(
    "ADD_BOOK_TO_FIRST_SHELF",
    dispatch,
    state.firstShelf
  ),
  addBookToSecondShelf: addNewBook(
    "ADD_BOOK_TO_SECOND_SHELF",
    dispatch,
    state.secondShelf
  ),
  updateBookFromFirstShelf: updateBook(
    "UPDATE_BOOK_FROM_FIRST_SHELF",
    dispatch,
    state.firstShelf
  ),
  updateBookFromSecondShelf: updateBook(
    "UPDATE_BOOK_FROM_SECOND_SHELF",
    dispatch,
    state.secondShelf
  ),
});

export default actions;
