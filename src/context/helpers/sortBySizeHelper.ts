import { TBook } from "../../components/Book/types";
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
    filter = "size-des";
  } else if (lastFilter === "size-des") {
    order = -1;
    filter = "size";
  }

  const sort = ({ size }: TBook, { size: _size }: TBook) =>
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
