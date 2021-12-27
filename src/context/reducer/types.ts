import { TBook } from "../../components/Book/types";
import { LastFilter } from "../types";

export type StatePayloadType = {
  lastFilter: LastFilter;
  firstShelf: TBook[];
  secondShelf: TBook[];
};

export type ActionWithPayloadType =
  | {
      type: "SORT";
      payload: StatePayloadType;
    }
  | {
      type: "REORDER_BOTH_SHELVES";
      payload: Omit<StatePayloadType, "lastFilter">;
    }
  | {
      type:
        | "REORDER_FIRST_SHELF"
        | "REORDER_SECOND_SHELF"
        | "DELETE_BOOK_FROM_FIRST_SHELF"
        | "DELETE_BOOK_FROM_SECOND_SHELF"
        | "UPDATE_BOOK_FROM_FIRST_SHELF"
        | "UPDATE_BOOK_FROM_SECOND_SHELF"
        | "ADD_BOOK_TO_FIRST_SHELF"
        | "ADD_BOOK_TO_SECOND_SHELF";
      payload: TBook[];
    };
