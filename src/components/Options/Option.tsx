import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { OptionWrapper } from "./styles";
import { OptionType } from "./types";

const Option: React.FC<OptionType> = ({ id }) => {
  return (
    <Droppable droppableId={`${id}-droppable`} direction="horizontal">
      {(provided) => (
        <OptionWrapper
          ref={provided.innerRef}
          {...provided.droppableProps}
          id={id}
        >
          <h6>{id} book</h6>
          {provided.placeholder}
        </OptionWrapper>
      )}
    </Droppable>
  );
};

export default Option;
