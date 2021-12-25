import styled from "styled-components";

import { clock_base } from "../../Assets";

export const ClockContainer = styled.div`
  @media screen and (max-width: 720px) {
    display: none;
  }

  grid-row: 2 / 3;
  grid-column: 2 / 3;

  position: relative;

  background: url(${clock_base});

  width: 110px;
  height: 110px;
`;
