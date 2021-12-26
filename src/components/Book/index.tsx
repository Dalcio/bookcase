import React from "react";

import { Draggable } from "react-beautiful-dnd";

import { BookWrapper } from "./styles";
import { BookProps } from "./types";

import * as books from "../../Assets/books";

const Book: React.FC<BookProps> = ({ name, index, id }) => (
  <Draggable key={id} draggableId={id} index={index}>
    {(provided) => (
      <BookWrapper
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <img src={books[`book_${name}`]} alt={`book ${name}`} />
      </BookWrapper>
    )}
  </Draggable>
);

export default Book;
