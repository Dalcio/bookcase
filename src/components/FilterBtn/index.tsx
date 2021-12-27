import React from "react";

import {
  filter_alphabetic,
  filter_button,
  filter_button_active,
  filter_colors,
  filter_release_date,
  filter_sizes,
} from "../../Assets/filters";
import { FilterBtnContainer } from "./styles";
import { FilterBtnProps } from "./type";

const filtersIcons = {
  alphabet: filter_alphabetic,
  color: filter_colors,
  size: filter_sizes,
  "release-date": filter_release_date,
};

const FilterBtn: React.FC<FilterBtnProps> = ({
  filter,
  selectedFilter,
  selectFilter,
}) => {
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
        src={filtersIcons[filter]}
        alt={`filter by ${filter}`}
        className="filter-by-shape"
      />
    </FilterBtnContainer>
  );
};

export default FilterBtn;
