import { BookType } from "../../components/Book/types";
import { LastFilter } from "../types";
import { SortByColorHelper } from "./types";

const sortBySizeHelper = ({
  firstShelf,
  secondShelf,
  lastFilter,
}: SortByColorHelper) => {
  const firstShelfCpy = [...firstShelf];
  const secondShelfCpy = [...secondShelf];

  let order = 1;
  let filter: LastFilter = "size";

  if (lastFilter === "size") {
    order = -1;
    filter = "size-des";
  } else if (lastFilter === "size-des") {
    filter = "size";
  }

  const sort = ({ size }: BookType, { size: _size }: BookType) =>
    order * (size - _size);

  firstShelfCpy.sort(sort);
  secondShelfCpy.sort(sort).reverse();

  return {
    filter,
    firstShelfSorted: firstShelfCpy,
    secondShelfSorted: secondShelfCpy,
  };
};

export default sortBySizeHelper;
