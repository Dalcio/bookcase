import styled from "styled-components";

export const ShelfContainer = styled.div`
  grid-column: 2 / 3;

  display: flex;

  &.first-shelf {
    grid-row: 2 / 3;
  }

  &.second-shelf {
    grid-row: 4 / 5;
    justify-content: flex-end;
  }
`;
