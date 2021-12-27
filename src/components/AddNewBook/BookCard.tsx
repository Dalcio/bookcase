import { SyntheticEvent, useCallback, useState } from "react";
import { v4 as uuid4 } from "uuid";

import { ReleaseDate, ShelfPosition } from "./helpers";
import { BookType } from "../Book/types";
import { AddNewBookCardContainer as BookCardContainer } from "./styles";
import { BookCardType } from "./types";

import * as books from "../../Assets/books";

import allBooks from "../../context/allBooks";
import { format } from "date-fns";

const BookCard: React.FC<BookCardType> = ({
  onFinish,
  book,
  title,
  finishBtnLabel,
}) => {
  const [selectedBook, setSelectedBook] = useState((book && book.name) || "");
  const [releaseDate, setReleaseDate] = useState<Date>(
    (book && book?.releaseDate) || new Date()
  );
  const [shelfNumber, setShelfNumber] = useState<0 | 1>();

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
      const newBook: BookType = {
        ...bookBase,
        id: uuid4(),
        releaseDate,
      } as BookType;
      onFinish(newBook, shelfNumber);
    }
  };

  return (
    <BookCardContainer>
      <h4>{title ? title : "Create a new book"}</h4>
      <ReleaseDate
        defaultValue={format(releaseDate, "yyyy-MM-dd")}
        onChange={handleReleaseDate}
      />
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
        {finishBtnLabel ? finishBtnLabel : "Add the book"}
      </button>
    </BookCardContainer>
  );
};

export default BookCard;
