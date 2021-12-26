import { TBook } from "../Book/types";

export type ShelfProps = {
  shelf: "first" | "second";
  books: TBook[];
};
