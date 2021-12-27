import React, { useState } from "react";

import { BoardWrapper } from "./style";
import { FiltersKeys } from "../FilterBtn/type";

import Organize from "../Organize";
import FilterBtn from "../FilterBtn";
import { useBookcase } from "../../context";

const Board: React.FC = () => {
  const { sortByAlphabet, sortByColors, sortBySizes, sortByReleaseDate } =
    useBookcase();
  const [selectedFilter, setSelectedFilter] = useState<FiltersKeys>("alphabet");

  const organizeBy = () => {
    if (selectedFilter === "alphabet") {
      sortByAlphabet();
    } else if (selectedFilter === "color") {
      sortByColors();
    } else if (selectedFilter === "size") {
      sortBySizes();
    } else {
      sortByReleaseDate();
    }
  };

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
          <FilterBtn
            filter="release-date"
            selectedFilter={selectedFilter}
            selectFilter={setSelectedFilter}
          />
        </div>
        <Organize onClick={organizeBy} />
      </div>
    </BoardWrapper>
  );
};

export default Board;
