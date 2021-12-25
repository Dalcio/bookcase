import { FC } from "react";

import { logo } from "./Assets";
import { Library } from "./styles/Library";

import Bookcase from "./components/Bookcase";
import Clock from "./components/Clock";
import Librarian from "./components/Librarian";

const App: FC = () => {
  return (
    <Library>
      <Clock />
      <img src={logo} alt="tech library vizpert logo" className="logo" />
      <Bookcase />
      <Librarian />
    </Library>
  );
};

export default App;
