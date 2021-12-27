import { TBook } from "../../../components/Book/types";
import { ActionDispatch } from "../types";

const reorderBothShelves =
  (
    origin: "FIRST" | "SECOND",
    dispatch: ActionDispatch,
    sourceShelf: TBook[],
    destShelf: TBook[]
  ) =>
  (startIndex: number, endIndex: number) => {
    const source = sourceShelf.filter((_, i) => i !== startIndex);
    const destiny = [
      ...destShelf.slice(0, endIndex),
      sourceShelf[startIndex],
      ...destShelf.slice(endIndex, destShelf.length),
    ];

    dispatch({
      type: "REORDER_BOTH_SHELVES",
      payload:
        origin === "FIRST"
          ? { firstShelf: source, secondShelf: destiny }
          : { firstShelf: destiny, secondShelf: source },
    });
  };

export default reorderBothShelves;
