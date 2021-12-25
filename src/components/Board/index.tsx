import React from "react";

import { BoardWrapper } from "./style";

import Organize from "../Organize";
import FilterBtn from "../FilterBtn";

const Board: React.FC = () => {
  return (
    <BoardWrapper>
      <div className="container">
        <h5>Sort by</h5>
        <div className="filters">
          <FilterBtn filterBy="alphabet" />
          <FilterBtn filterBy="color" />
          <FilterBtn filterBy="size" />
        </div>
        <Organize />
      </div>
    </BoardWrapper>
  );
};

export default Board;
