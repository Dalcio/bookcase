import { Dispatch } from "react";
import { TBook } from "../../components/Book/types";
import { ActionWithPayloadType } from "../reducer/types";

export type ActionDispatch = Dispatch<ActionWithPayloadType>;

type SortActionsType = {
  sortBySizes: () => void;
  sortByColors: () => void;
  sortByAlphabet: () => void;
  sortByReleaseDate: () => void;
};

type ReorderActionsType = {
  reorderFromFstToSndShelves: (sourceIndex: number, destIndex: number) => void;
  reorderFromSndToFstShelves: (sourceIndex: number, destIndex: number) => void;
  reorderFirstShelf: (startIndex: number, endIndex: number) => void;
  reorderSecondShelf: (startIndex: number, endIndex: number) => void;
};

type DeleteActionsType = {
  deleteBookFromFirstShelf: (atIndex: number) => void;
  deleteBookFromSecondShelf: (atIndex: number) => void;
};

type UpdateBookActionsType = {
  updateBookFromFirstShelf: (book: TBook, index: number) => void;
  updateBookFromSecondShelf: (book: TBook, index: number) => void;
};

type AddBookActionsType = {
  addBookToFirstShelf: (book: TBook) => void;
  addBookToSecondShelf: (book: TBook) => void;
};

export type ActionsType = SortActionsType &
  ReorderActionsType &
  DeleteActionsType &
  UpdateBookActionsType &
  AddBookActionsType;
