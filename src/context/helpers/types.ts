import { BookType } from "../../components/Book/types";
import { LastFilter } from "../types";

export type SortByColorHelper = {
  firstShelf: BookType[];
  secondShelf: BookType[];
  lastFilter: LastFilter;
};
