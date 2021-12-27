import styled from "styled-components";

import { board } from "../../Assets";

export const BoardWrapper = styled.div`
  background: url(${board});
  background-repeat: no-repeat;

  position: absolute;
  z-index: 1;
  left: 10px;
  bottom: 0;
  height: 166px;
  width: 350px;

  @media screen and (min-width: 500px) {
    height: 184px;
    width: 360px;
    left: 15px;
  }

  @media screen and (min-width: 600px) {
    height: 192px;
    width: 400px;
    bottom: 20px;
    left: 20px;
  }

  display: grid;
  grid-template-columns: 1fr auto 20px;
  grid-template-rows: 1fr 10px;
  align-items: center;

  & > .container {
    grid-column: 2 / 3;

    display: grid;
    row-gap: 10px;
    align-items: space-around;
    text-align: center;

    & > h5 {
      text-transform: uppercase;
      letter-spacing: 5px;
      color: #c3b6d3;
    }

    & > .filters {
      display: grid;
      grid-template-columns: auto auto auto auto;
      justify-content: space-between;

      &:after {
        grid-column: 1 / -1;

        content: "";
        position: relative;
        margin: 10px 16px 0;
        border-bottom: 3px solid #c3b6d3;
      }
    }
  }

  @media screen and (min-width: 500px) {
    grid-template-rows: 1fr 20px;
    & > .container {
      row-gap: 12px;
      & > .filters {
        &:after {
          margin: 16px 16px 0;
        }
      }
    }
  }
`;
