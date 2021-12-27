import { compareAsc, compareDesc } from "date-fns";

import { BookType } from "../../../components/Book/types";
import { StatePayloadType } from "../../reducer/types";
import { LastFilter } from "../../types";
import { ActionDispatch } from "../types";

const sortByReleaseDate =
  (dispatch: ActionDispatch, state: StatePayloadType) => () => {
    const firstShelf = [...state.firstShelf];
    const secondShelf = [...state.secondShelf];

    let ascending = true;
    let lastFilter: LastFilter = "release-date";

    if (state.lastFilter === "release-date-des") {
      lastFilter = "release-date";
    } else if (state.lastFilter === "release-date") {
      ascending = false;
      lastFilter = "release-date-des";
    }

    const sort = (a: BookType, b: BookType) =>
      (ascending && compareAsc(a.releaseDate, b.releaseDate)) ||
      compareDesc(a.releaseDate, b.releaseDate);

    firstShelf.sort(sort);
    secondShelf.sort(sort).reverse();

    dispatch({
      type: "SORT",
      payload: { firstShelf, secondShelf, lastFilter },
    });
  };

export default sortByReleaseDate;
