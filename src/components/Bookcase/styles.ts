import styled from "styled-components";

import { bookcase } from "../../Assets";

export const BookcaseContainer = styled.div`
  position: absolute;
  z-index: 1;
  background: url(${bookcase});
  background-repeat: no-repeat;

  width: 360px;
  height: 274px;

  bottom: 165px;
  left: calc(50% - 144px);

  display: grid;
  grid-template-columns: 20px 1fr 90px;
  grid-template-rows: 42px 1fr 3px 1fr 80px;

  @media screen and (min-width: 400px) {
    grid-template-rows: 50px 1fr 13px 1fr 45px;
    grid-template-columns: 20px 1fr 100px;
    left: calc(50% - 160px);
    width: 400px;
    bottom: 182px;
  }

  @media screen and (min-width: 500px) {
    grid-template-rows: 56px 1fr 26px 1fr 24px;
    grid-template-columns: 23px 1fr 168px;
    left: calc(50% - 180px);
    width: 500px;
    bottom: 200px;
  }
`;
