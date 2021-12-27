import { TBook } from "../Book/types";

export type BookCardType = {
  onFinish: (book: TBook, shelf?: 0 | 1) => void;
  book?: TBook;
  title?: string;
  finishBtnLabel?: string;
};
