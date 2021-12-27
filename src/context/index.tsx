import React, { createContext, useContext, useMemo, useReducer } from "react";

import { initialState } from "./init";
import { BookcaseContextInterface } from "./types";

import actions from "./actions";
import reducer from "./reducer";

const BookcaseContext = createContext<BookcaseContextInterface>(
  {} as BookcaseContextInterface
);

const BookcaseProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedActions = useMemo(() => actions(dispatch, state), [state]);

  return (
    <BookcaseContext.Provider value={{ ...state, ...memoizedActions }}>
      {children}
    </BookcaseContext.Provider>
  );
};

export const useBookcase = (): BookcaseContextInterface =>
  useContext(BookcaseContext);

export default BookcaseProvider;
