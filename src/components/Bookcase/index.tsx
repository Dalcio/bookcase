import React, { useCallback, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { BookcaseContainer } from "./styles";
import { useBookcase } from "../../context";

import Shelf from "../Shelf";
import Options from "../Options";
import { useModal } from "../Modal";
import BookCard from "../AddNewBook/BookCard";
import { BookType } from "../Book/types";

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
    updateBookFromFirstShelf,
    updateBookFromSecondShelf,
  } = useBookcase();
  const { openModal, closeModal } = useModal();

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleUpdateBook = useCallback(
    (sourceId: string, index: number) => {
      let books;

      if (sourceId === "first-shelf-droppable") {
        books = [...firstShelf];
      } else {
        books = [...secondShelf];
      }

      const book = books[index];

      const updateBook = (updatedBook: BookType) => {
        closeModal();
        if (sourceId === "first-shelf-droppable") {
          updateBookFromFirstShelf(updatedBook, index);
        } else {
          updateBookFromSecondShelf(updatedBook, index);
        }
      };

      const UpdateBookCard = (
        <BookCard
          onFinish={updateBook}
          book={book}
          finishBtnLabel="Update"
          title="Change the desired field"
        />
      );

      openModal(UpdateBookCard);
    },
    [
      closeModal,
      firstShelf,
      openModal,
      secondShelf,
      updateBookFromFirstShelf,
      updateBookFromSecondShelf,
    ]
  );

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
        handleUpdateBook(sourceId, source.index);
      }
      setTimeout(() => {
        setIsDragging(false);
      }, 100);
    },
    [
      deleteBookFromFirstShelf,
      deleteBookFromSecondShelf,
      handleUpdateBook,
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
