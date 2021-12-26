import { TBook } from "../../components/Book/types";
import { LastFilter } from "../types";
import { SortByColorHelper } from "./types";

const sortByAlphabetHelper = ({
  firstShelf,
  secondShelf,
  lastFilter,
}: SortByColorHelper) => {
  const firstShelfCpy = [...firstShelf];
  const secondShelfCpy = [...secondShelf];

  let order = 1;
  let filter: LastFilter = "alphabet";

  if (lastFilter === "alphabet-des") {
    filter = "alphabet";
  } else if (lastFilter === "alphabet") {
    order = -1;
    filter = "alphabet-des";
  }

  const sort = ({ name }: TBook, { name: _name }: TBook) => {
    if (name > _name) return order * 1;
    if (name < _name) return order * -1;
    return 0;
  };

  firstShelfCpy.sort(sort);
  secondShelfCpy.sort(sort).reverse();

  return {
    filter,
    firstShelfSorted: firstShelfCpy,
    secondShelfSorted: secondShelfCpy,
  };
};

export default sortByAlphabetHelper;
