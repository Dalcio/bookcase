import { FC } from "react";
import styled from "styled-components";
import { board } from "../Assets";

const BoardContainer = styled.div`
  background: url(${board});
  background-repeat: no-repeat;

  position: absolute;
  z-index: 1;
  height: 23vh;
  left: 20px;
  width: 80vw;
  bottom: 0;
`;

const Board: FC = () => {
  return <BoardContainer></BoardContainer>;
};

export default Board;
