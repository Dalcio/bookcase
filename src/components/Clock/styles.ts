import styled from "styled-components";

import { clock_base } from "../../Assets";

export const ClockWrapper = styled.svg`
  @media screen and (max-width: 719px) {
    display: none;
  }

  grid-row: 2 / 3;
  grid-column: 1 / 2;

  position: relative;

  background: url(${clock_base});

  width: 130px;
  height: 130px;

  display: grid;
  justify-items: center;
  align-items: center;

  & > .hour,
  & > .min {
    position: absolute;
    transform-origin: center;
  }

  & > #hands > #hour-hand {
    stroke-width: 4px;
    stroke: #633585;
  }

  & > #hands > #min-hand {
    stroke-width: 4px;
    stroke: #9b6dbf;
  }

  & > #hands > #sec-hand {
    stroke-width: 4px;
    stroke: #c3b6d3;
  }
`;
