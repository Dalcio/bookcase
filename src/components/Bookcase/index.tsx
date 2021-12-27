import React, { useCallback, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { BookcaseContainer } from "./styles";
import { useBookcase } from "../../context";

import Shelf from "../Shelf";
import Options from "../Options";
import AddNewBook from "../AddNewBook";

const Bookcase: React.FC = () => {
  const {
    firstShelf,
    secondShelf,
    deleteBookFromFirstShelf,
    deleteBookFromSecondShelf,
    reorderFirstShelf,
    reorderSecondShelf,
    reorderFromFstToSndShelves,
    reorderFromSndToFstShelves,
  } = useBookcase();

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        setIsDragging(false);
        return;
      }

      const { destination, source } = result;

      const sourceId = source.droppableId;
      const destId = destination.droppableId;

      if (destId.includes("shelf-droppable")) {
        if (sourceId === destId) {
          if (sourceId === "first-shelf-droppable") {
            reorderFirstShelf(source.index, destination.index);
          } else {
            reorderSecondShelf(source.index, destination.index);
          }
        } else if (sourceId === "first-shelf-droppable") {
          reorderFromFstToSndShelves(source.index, destination.index);
        } else if (sourceId === "second-shelf-droppable") {
          reorderFromSndToFstShelves(source.index, destination.index);
        }
      } else if (destId === "delete-droppable") {
        if (sourceId === "first-shelf-droppable") {
          deleteBookFromFirstShelf(source.index);
        } else if (sourceId === "second-shelf-droppable") {
          deleteBookFromSecondShelf(source.index);
        }
      } else if (destId === "update-droppable") {
      }
      setTimeout(() => {
        setIsDragging(false);
      }, 500);
    },
    [
      deleteBookFromFirstShelf,
      deleteBookFromSecondShelf,
      reorderFirstShelf,
      reorderFromFstToSndShelves,
      reorderFromSndToFstShelves,
      reorderSecondShelf,
    ]
  );

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <BookcaseContainer>
        <Shelf shelf="first" books={firstShelf} />
        <Shelf shelf="second" books={secondShelf} />
        <Options isDragging={isDragging} />
      </BookcaseContainer>
    </DragDropContext>
  );
};

export default Bookcase;
