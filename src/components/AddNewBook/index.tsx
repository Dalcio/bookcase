import React from "react";

import { useBookcase } from "../../context";
import { BookType } from "../Book/types";
import { useModal } from "../Modal";
import { AddNewBookBtn } from "./styles";

import BookCard from "./BookCard";

const AddNewBook: React.FC = () => {
  const { addBookToFirstShelf, addBookToSecondShelf } = useBookcase();

  const { openModal, closeModal } = useModal();

  const addBook = (book: BookType, shelf?: 0 | 1) => {
    closeModal();
    shelf === 1 ? addBookToFirstShelf(book) : addBookToSecondShelf(book);
  };

  const OpenModalElement = <BookCard onFinish={addBook} />;

  return (
    <AddNewBookBtn onClick={() => openModal(OpenModalElement)}>
      <h1>+</h1>
    </AddNewBookBtn>
  );
};

export default AddNewBook;
