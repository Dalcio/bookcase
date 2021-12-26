import React, { createContext, useContext, useMemo, useState } from "react";

import { TBook } from "../components/Book/types";
import { SortByColorHelper, SortBySizeHelper } from "./helpers";
import sortByAlphabetHelper from "./helpers/sortByAlphabetHelper";
import { initFirstShelf, initSecondShelf } from "./init";
import { BookcaseContextInterface, LastFilter } from "./types";

const BookcaseContext = createContext<BookcaseContextInterface>(
  {} as BookcaseContextInterface
);

const BookcaseProvider: React.FC = ({ children }) => {
  const [firstShelf, setFirstShelf] = useState<TBook[]>(initFirstShelf);
  const [secondShelf, setSecondShelf] = useState<TBook[]>(initSecondShelf);

  const [lastFilter, setLastFilter] = useState<LastFilter>("alphabet");

  const sortByAlphabet = () => {
    const { firstShelfSorted, secondShelfSorted, filter } =
      sortByAlphabetHelper({ firstShelf, secondShelf, lastFilter });

    setLastFilter(filter);
    setFirstShelf([...firstShelfSorted]);
    setSecondShelf([...secondShelfSorted]);
  };

  const sortByColors = () => {
    const { firstShelfSorted, secondShelfSorted, filter } = SortByColorHelper({
      firstShelf,
      secondShelf,
      lastFilter,
    });

    setLastFilter(filter);
    setFirstShelf([...firstShelfSorted]);
    setSecondShelf([...secondShelfSorted]);
  };

  const sortBySizes = () => {
    const { firstShelfSorted, secondShelfSorted, filter } = SortBySizeHelper({
      firstShelf,
      secondShelf,
      lastFilter,
    });

    setLastFilter(filter);
    setFirstShelf([...firstShelfSorted]);
    setSecondShelf([...secondShelfSorted]);
  };

  const values = useMemo(
    () => ({ firstShelf, secondShelf, setFirstShelf, setSecondShelf }),
    [firstShelf, secondShelf]
  );

  return (
    <BookcaseContext.Provider
      value={{
        ...values,
        sortByAlphabet,
        sortByColors,
        sortBySizes,
        setFirstShelf,
        setSecondShelf,
      }}
    >
      {children}
    </BookcaseContext.Provider>
  );
};

export const useBookcase = (): BookcaseContextInterface =>
  useContext(BookcaseContext);

export default BookcaseProvider;
