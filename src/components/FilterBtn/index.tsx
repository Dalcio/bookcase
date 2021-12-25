import React, { useState } from "react";

import {
  filter_alphabetic,
  filter_button,
  filter_button_active,
  filter_colors,
  filter_sizes,
} from "../../Assets/filters";
import { FilterBtnContainer } from "./styles";

type FilterBtnProps = {
  filterBy: "alphabet" | "color" | "size";
  // activeFilter: "alphabet" | "color" | "size";
  // compareFn: () => void;
};

const FilterBtn: React.FC<FilterBtnProps> = ({ filterBy }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const filter =
    (filterBy === "alphabet" && filter_alphabetic) ||
    (filterBy === "color" && filter_colors) ||
    filter_sizes;

  const handleFilterIsActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <FilterBtnContainer active={isActive} onClick={handleFilterIsActive}>
      <img
        src={(isActive && filter_button_active) || filter_button}
        alt=""
        className="btn-filter-shape"
      />
      <img
        src={filter}
        alt={`filter by ${filterBy}`}
        className="filter-by-shape"
      />
    </FilterBtnContainer>
  );
};

export default FilterBtn;
