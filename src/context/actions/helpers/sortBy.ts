import { TBook } from "../../../components/Book/types";
import { FiltersKeys } from "../../../components/FilterBtn/type";
import { StatePayloadType } from "../../reducer/types";
import { LastFilter } from "../../types";
import { ActionDispatch } from "../types";
import { sorter } from "./sorter";

const colorWeight = {
  red: 0,
  orange: 1,
  yellow: 2,
  green: 3,
  lightblue: 4,
  darkblue: 5,
  violet: 6,
  pink: 7,
  magenta: 8,
};

const sortBy =
  (
    sortFilter: FiltersKeys,
    dispatch: ActionDispatch,
    state: StatePayloadType
  ) =>
  () => {
    const firstShelf = [...state.firstShelf];
    const secondShelf = [...state.secondShelf];

    let order = 1;
    let lastFilter: LastFilter = sortFilter;

    if (state.lastFilter === `${sortFilter}-des`) {
      lastFilter = sortFilter;
    } else if (state.lastFilter === sortFilter) {
      order = -1;
      lastFilter = `${sortFilter}-des`;
    }

    const index = sortFilter === "alphabet" ? "name" : sortFilter;

    const sort = (a: TBook, b: TBook) =>
      sortFilter === "color"
        ? sorter(colorWeight[a.color], colorWeight[b.color], order)
        : sorter(a[index], b[index], order);

    firstShelf.sort(sort);
    secondShelf.sort(sort).reverse();

    dispatch({
      type: "SORT",
      payload: { firstShelf, secondShelf, lastFilter },
    });
  };

export default sortBy;
