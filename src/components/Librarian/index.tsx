import React from "react";

import { lady } from "../../Assets";
import { LibrarianContainer } from "./styles";

import Board from "../Board";

const Librarian: React.FC = () => {
  return (
    <LibrarianContainer>
      <Board />
      <img src={lady} alt="librarian lady" className="lady" />
    </LibrarianContainer>
  );
};

export default Librarian;
