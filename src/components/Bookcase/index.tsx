import React, { useCallback } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { BookcaseContainer } from "./styles";
import { useBookcase } from "../../context";

import Shelf from "../Shelf";

const Bookcase: React.FC = () => {
  const {
    firstShelf,
    secondShelf,
    reorderFirstShelf,
    reorderSecondShelf,
    reorderFromFstToSndShelves,
    reorderFromSndToFstShelves,
  } = useBookcase();

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const { destination, source } = result;

      if (source.droppableId === destination.droppableId) {
        if (source.droppableId === "first-shelf-droppable") {
          reorderFirstShelf(source.index, destination.index);
        } else {
          reorderSecondShelf(source.index, destination.index);
        }
      } else if (source.droppableId === "first-shelf-droppable") {
        reorderFromFstToSndShelves(source.index, destination.index);
      } else {
        reorderFromSndToFstShelves(source.index, destination.index);
      }
    },
    [
      reorderFirstShelf,
      reorderFromFstToSndShelves,
      reorderFromSndToFstShelves,
      reorderSecondShelf,
    ]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BookcaseContainer>
        <Shelf shelf="first" books={firstShelf} />
        <Shelf shelf="second" books={secondShelf} />
      </BookcaseContainer>
    </DragDropContext>
  );
};

export default Bookcase;
