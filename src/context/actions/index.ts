import { StatePayloadType } from "../reducer/types";
import {
  deleteBook,
  reorderBothShelves,
  reorderShelf,
  sortBy,
} from "./helpers";
import { ActionDispatch, ActionsType } from "./types";

const actions = (
  dispatch: ActionDispatch,
  state: StatePayloadType
): ActionsType =>
  ({
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
  } as any);

export default actions;
