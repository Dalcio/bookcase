import React, { useCallback } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { BookcaseContainer } from "./styles";
import { reorderDiffSource, reorderSameSource } from "./reorders";

import Shelf from "../Shelf";
import { useBookcase } from "../../context";

const Bookcase: React.FC = () => {
  const { firstShelf, secondShelf, setFirstShelf, setSecondShelf } =
    useBookcase();

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const { destination, source } = result;

      if (source.droppableId === destination.droppableId) {
        if (source.droppableId === "first-shelf-droppable") {
          const reordered = reorderSameSource(
            firstShelf,
            source.index,
            destination.index
          );
          setFirstShelf([...reordered]);
        }
        if (source.droppableId === "second-shelf-droppable") {
          const reordered = reorderSameSource(
            secondShelf,
            source.index,
            destination.index
          );
          setSecondShelf([...reordered]);
        }
      } else {
        if (source.droppableId === "first-shelf-droppable") {
          const { sourceList, destList } = reorderDiffSource(
            firstShelf,
            secondShelf,
            source.index,
            destination.index
          );
          setFirstShelf([...sourceList]);
          setSecondShelf([...destList]);
        }
        if (source.droppableId === "second-shelf-droppable") {
          const { sourceList, destList } = reorderDiffSource(
            secondShelf,
            firstShelf,
            source.index,
            destination.index
          );
          setFirstShelf([...destList]);
          setSecondShelf([...sourceList]);
        }
      }
    },
    [firstShelf, secondShelf, setFirstShelf, setSecondShelf]
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
