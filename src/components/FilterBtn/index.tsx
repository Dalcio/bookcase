import React from "react";

import {
  filter_alphabetic,
  filter_button,
  filter_button_active,
  filter_colors,
  filter_sizes,
} from "../../Assets/filters";
import { FilterBtnContainer } from "./styles";
import { FilterBtnProps } from "./type";

const FilterBtn: React.FC<FilterBtnProps> = ({
  filter,
  selectedFilter,
  selectFilter,
}) => {
  const filtersSvg = {
    alphabet: filter_alphabetic,
    color: filter_colors,
    size: filter_sizes,
  };

  const handleFilterIsActive = () => {
    selectFilter(filter);
  };

  return (
    <FilterBtnContainer
      active={filter === selectedFilter}
      onClick={handleFilterIsActive}
    >
      <img
        src={
          (filter === selectedFilter && filter_button_active) || filter_button
        }
        alt=""
        className="btn-filter-shape"
      />
      <img
        src={filtersSvg[filter]}
        alt={`filter by ${filter}`}
        className="filter-by-shape"
      />
    </FilterBtnContainer>
  );
};

export default FilterBtn;
