import { FC } from "react";
import styled from "styled-components";

import { board } from "../Assets";

const BoardContainer = styled.div`
  background: url(${board});
  background-repeat: no-repeat;

  position: absolute;
  z-index: 1;
  height: 166px;
  left: 20px;
  bottom: 20px;
  min-width: 330px;

  @media screen and (min-width: 400px) {
    height: 184px;
    width: 360px;
  }

  @media screen and (min-width: 460px) {
    height: 192px;
    width: 418px;
  }
`;

const Board: FC = () => {
  return <BoardContainer></BoardContainer>;
};

export default Board;
