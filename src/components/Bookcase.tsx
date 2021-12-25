import { FC } from "react";
import styled from "styled-components";

import { bookcase } from "../Assets";

const BookcaseContainer = styled.div`
  position: absolute;
  z-index: 1;
  background: url(${bookcase});
  background-repeat: no-repeat;

  width: 360px;
  height: 274px;

  bottom: 165px;
  left: calc(50% - 144px);

  @media screen and (min-width: 400px) {
    left: calc(50% - 160px);
    width: 400px;
    bottom: 182px;
  }

  @media screen and (min-width: 500px) {
    left: calc(50% - 180px);
    width: 500px;
    bottom: 200px;
  }

  @media screen and (min-width: 720px) {
  }
`;

const Bookcase: FC = () => {
  return <BookcaseContainer></BookcaseContainer>;
};

export default Bookcase;
