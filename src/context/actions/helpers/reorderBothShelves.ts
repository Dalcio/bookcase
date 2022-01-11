import { BookType } from "../../../components/Book/types";
import { ActionDispatch } from "../types";

const reorderBothShelves =
  (
    origin: "FIRST" | "SECOND",
    dispatch: ActionDispatch,
    sourceShelf: BookType[],
    destShelf: BookType[]
  ) =>
  (startIndex: number, endIndex: number) => {
    if (
      (destShelf.length < 11 && window.screen.width >= 500) ||
      (destShelf.length < 10 &&
        window.screen.width >= 400 &&
        window.screen.width < 500) ||
      (destShelf.length < 9 &&
        window.screen.width >= 160 &&
        window.screen.width < 400)
    ) {
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
    }
  };

export default reorderBothShelves;
