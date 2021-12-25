import React from "react";
import styled from "styled-components";

import { lady } from "../Assets";

import Board from "./Board";

const LibrarianContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 10px;

  & > .lady {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 40vw;
    min-width: 190px;
    max-width: 250px;
  }
`;

const Librarian: React.FC = () => {
  return (
    <LibrarianContainer>
      <Board />
      <img src={lady} alt="librarian lady" className="lady" />
    </LibrarianContainer>
  );
};

export default Librarian;
