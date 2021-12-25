import styled from "styled-components";

export const FilterBtnContainer = styled.button<{ active: boolean }>`
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
