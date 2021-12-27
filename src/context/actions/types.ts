import { Dispatch } from "react";
import { ActionWithPayloadType } from "../reducer/types";

export type ActionDispatch = Dispatch<ActionWithPayloadType>;

type SortActionsType = {
  sortBySizes: () => void;
  sortByColors: () => void;
  sortByAlphabet: () => void;
};

type ReorderActionsType = {
  reorderFromFstToSndShelves: (sourceIndex: number, destIndex: number) => void;
  reorderFromSndToFstShelves: (sourceIndex: number, destIndex: number) => void;
  reorderFirstShelf: (startIndex: number, endIndex: number) => void;
  reorderSecondShelf: (startIndex: number, endIndex: number) => void;
};

type DeleteActionsType = {
  deleteBookFromFirstShelf: (index: number) => void;
  deleteBookFromSecondShelf: (index: number) => void;
};

type UpdateBookActionsType = {
  updateBookFromFirstShelf: (index: number) => void;
  updateBookFromSecondShelf: (index: number) => void;
};

type AddBookActionsType = {
  addBookToFirstShelf: (index: number) => void;
  addBookToSecondShelf: (index: number) => void;
};

export type ActionsType = SortActionsType &
  ReorderActionsType &
  DeleteActionsType &
  UpdateBookActionsType &
  AddBookActionsType;
