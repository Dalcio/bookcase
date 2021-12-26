import { TBook } from "../components/Book/types";
import { FiltersKeys } from "../components/FilterBtn/type";

export type LastFilter =
  | FiltersKeys
  | "alphabet-des"
  | "size-des"
  | "color-des";

export interface BookcaseContextInterface {
  firstShelf: TBook[];
  secondShelf: TBook[];
  sortBySizes: () => void;
  sortByColors: () => void;
  sortByAlphabet: () => void;
  setFirstShelf: (args: TBook[]) => void;
  setSecondShelf: (args: TBook[]) => void;
}
