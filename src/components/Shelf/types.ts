import { BookType } from "../Book/types";

export type ShelfProps = {
  shelf: "first" | "second";
  books: BookType[];
};
