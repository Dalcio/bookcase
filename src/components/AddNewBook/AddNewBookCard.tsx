import { SyntheticEvent, useCallback, useState } from "react";
import { v4 as uuid4 } from "uuid";

import { ReleaseDate, ShelfPosition } from "./helpers";
import { TBook } from "../Book/types";
import { AddNewBookCardContainer } from "./styles";
import { AddNewBookCardType } from "./types";

import * as books from "../../Assets/books";

import allBooks from "../../context/allBooks";

const AddNewBookCard: React.FC<AddNewBookCardType> = ({ addNewBook }) => {
  const [selectedBook, setSelectedBook] = useState("");
  const [releaseDate, setReleaseDate] = useState<Date>(new Date());
  const [shelfNumber, setShelfNumber] = useState<0 | 1>(0);

  const handleSelectBook = useCallback((name: string) => {
    setSelectedBook(name);
  }, []);

  const handleReleaseDate = (e: SyntheticEvent<HTMLInputElement>) => {
    setReleaseDate(new Date(e.currentTarget.value));
  };

  const handleShelfNumber = (e: SyntheticEvent<HTMLInputElement>) => {
    const shelf = Number(e.currentTarget.value) - 1;
    setShelfNumber(shelf >= 1 ? 1 : 0);
  };

  const handleNewBook = () => {
    const bookBase = allBooks.find((book) => book.name === selectedBook);
    if (bookBase) {
      const newBook: TBook = {
        ...bookBase,
        id: uuid4(),
        releaseDate,
      } as TBook;
      addNewBook(newBook, shelfNumber);
    }
  };

  return (
    <AddNewBookCardContainer>
      <h4>Create a new book</h4>
      <ReleaseDate onChange={handleReleaseDate} />
      <ShelfPosition onChange={handleShelfNumber} />
      <div className="books">
        {allBooks.map(({ name }) => (
          <button
            className={(name === selectedBook && "selected") || undefined}
            key={name}
            onClick={() => handleSelectBook(name)}
          >
            <img src={books[`book_${name}`]} alt={`book ${name}`} />
          </button>
        ))}
      </div>
      <button onClick={handleNewBook} className="add-book">
        Add the book
      </button>
    </AddNewBookCardContainer>
  );
};

export default AddNewBookCard;
