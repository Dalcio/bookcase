import { TBook } from "../../../components/Book/types";
import { ActionDispatch } from "../types";

export const reorderShelf =
  (
    type: "REORDER_FIRST_SHELF" | "REORDER_SECOND_SHELF",
    dispatch: ActionDispatch,
    shelf: TBook[]
  ) =>
  (startIndex: number, endIndex: number) => {
    const result = Array.from<TBook>(shelf);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    dispatch({ type, payload: result });
  };

export default reorderShelf;
