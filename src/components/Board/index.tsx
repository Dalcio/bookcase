import React, { useState } from "react";

import { BoardWrapper } from "./style";
import { FiltersKeys } from "../FilterBtn/type";

import Organize from "../Organize";
import FilterBtn from "../FilterBtn";

const Board: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FiltersKeys>("alphabet");

  return (
    <BoardWrapper>
      <div className="container">
        <h5>Sort by</h5>
        <div className="filters">
          <FilterBtn
            filter="alphabet"
            selectedFilter={selectedFilter}
            selectFilter={setSelectedFilter}
          />
          <FilterBtn
            filter="color"
            selectedFilter={selectedFilter}
            selectFilter={setSelectedFilter}
          />
          <FilterBtn
            filter="size"
            selectedFilter={selectedFilter}
            selectFilter={setSelectedFilter}
          />
        </div>
        <Organize />
      </div>
    </BoardWrapper>
  );
};

export default Board;
