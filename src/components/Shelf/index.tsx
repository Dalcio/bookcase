import React from "react";

import { Droppable } from "react-beautiful-dnd";

import { ShelfContainer } from "./styles";
import { ShelfProps } from "./types";

import Book from "../Book";

const Shelf: React.FC<ShelfProps> = ({ shelf, books }) => (
  <Droppable droppableId={`${shelf}-shelf-droppable`} direction="horizontal">
    {(provided) => (
      <ShelfContainer
        ref={provided.innerRef}
        {...provided.droppableProps}
        className={`${shelf}-shelf`}
      >
        {books.map((book, index) => (
          <Book {...book} key={book.id} index={index} />
        ))}
        {provided.placeholder}
      </ShelfContainer>
    )}
  </Droppable>
);

export default Shelf;
