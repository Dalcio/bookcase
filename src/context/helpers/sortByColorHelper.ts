import { TBook } from "../../components/Book/types";
import { LastFilter } from "../types";
import { SortByColorHelper } from "./types";

const colorsWeight = {
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

const sortByColorsHelper = ({
  firstShelf,
  secondShelf,
  lastFilter,
}: SortByColorHelper) => {
  const firstShelfCpy = [...firstShelf];
  const secondShelfCpy = [...secondShelf];

  let order = 1;
  let filter: LastFilter = "color";

  if (lastFilter === "color-des") {
    filter = "color";
  } else if (lastFilter === "color") {
    order = -1;
    filter = "color-des";
  }

  const sort = ({ color }: TBook, { color: _color }: TBook) =>
    order * (colorsWeight[color] - colorsWeight[_color]);

  firstShelfCpy.sort(sort);
  secondShelfCpy.sort(sort).reverse();

  return {
    filter,
    firstShelfSorted: firstShelfCpy,
    secondShelfSorted: secondShelfCpy,
  };
};

export default sortByColorsHelper;
