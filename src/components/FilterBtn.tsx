import { FC, useState } from "react";
import styled from "styled-components";
import {
  filter_alphabetic,
  filter_button,
  filter_button_active,
  filter_colors,
  filter_sizes,
} from "../Assets/filters";

type FilterBtnProps = {
  filterBy: "alphabet" | "color" | "size";
  // activeFilter: "alphabet" | "color" | "size";
  // compareFn: () => void;
};

const FilterBtnContainer = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  position: relative;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > .btn-filter-shape {
    position: absolute;
    inset: 0;
  }

  & > .filter-by-shape {
    position: absolute;
    height: 16px;
    ${({ active }) => active && "margin-top: 10px"};
  }
`;

const FilterBtn: FC<FilterBtnProps> = ({ filterBy }) => {
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
