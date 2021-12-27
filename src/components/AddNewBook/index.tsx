import React from "react";

import { useBookcase } from "../../context";
import { TBook } from "../Book/types";
import { useModal } from "../Modal";
import { AddNewBookBtn } from "./styles";

import BookCard from "./BookCard";

const AddNewBook: React.FC = () => {
  const { addBookToFirstShelf, addBookToSecondShelf } = useBookcase();

  const { openModal, closeModal } = useModal();

  const addBook = (book: TBook, shelf?: 0 | 1) => {
    closeModal();
    shelf === 0 ? addBookToFirstShelf(book) : addBookToSecondShelf(book);
  };

  const OpenModalElement = <BookCard onFinish={addBook} />;

  return (
    <AddNewBookBtn onClick={() => openModal(OpenModalElement)}>
      <h1>+</h1>
    </AddNewBookBtn>
  );
};

export default AddNewBook;
