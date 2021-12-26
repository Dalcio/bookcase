import { FC } from "react";

import { logo } from "./Assets";
import { Library } from "./styles/Library";

import Bookcase from "./components/Bookcase";
import Clock from "./components/Clock";
import BookcaseProvider from "./context";
import Librarian from "./components/Librarian";

const App: FC = () => {
  return (
    <Library>
      <Clock />
      <img src={logo} alt="tech library vizpert logo" className="logo" />
      <BookcaseProvider>
        <Bookcase />
        <Librarian />
      </BookcaseProvider>
    </Library>
  );
};

export default App;
