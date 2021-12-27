import { BookType } from "../Book/types";

export type BookCardType = {
  onFinish: (book: BookType, shelf?: 0 | 1) => void;
  book?: BookType;
  title?: string;
  finishBtnLabel?: string;
};
