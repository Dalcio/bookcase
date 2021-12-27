import { TBook } from "../Book/types";

export type AddNewBookCardType = {
  addNewBook: (newBook: TBook, shelf: 0 | 1) => void;
};
