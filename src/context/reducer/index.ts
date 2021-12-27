import { ActionWithPayloadType, StatePayloadType } from "./types";

const reducer = (
  prevState: StatePayloadType,
  action: ActionWithPayloadType
): StatePayloadType => {
  switch (action.type) {
    case "SORT":
      return { ...action.payload };
    case "REORDER_BOTH_SHELVES":
      return { ...prevState, lastFilter: undefined, ...action.payload };
    case "REORDER_FIRST_SHELF":
    case "DELETE_BOOK_FROM_FIRST_SHELF":
    case "UPDATE_BOOK_FROM_FIRST_SHELF":
    case "ADD_BOOK_TO_FIRST_SHELF":
      return {
        ...prevState,
        lastFilter: undefined,
        firstShelf: action.payload,
      };
    case "REORDER_SECOND_SHELF":
    case "DELETE_BOOK_FROM_SECOND_SHELF":
    case "UPDATE_BOOK_FROM_SECOND_SHELF":
    case "ADD_BOOK_TO_SECOND_SHELF":
      return {
        ...prevState,
        lastFilter: undefined,
        secondShelf: action.payload,
      };
    default:
      return { ...prevState };
  }
};

export default reducer;
