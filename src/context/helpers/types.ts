import { TBook } from "../../components/Book/types";
import { LastFilter } from "../types";

export type SortByColorHelper = {
  firstShelf: TBook[];
  secondShelf: TBook[];
  lastFilter: LastFilter;
};
