import { FC } from "react";

import { logo } from "./Assets";
import { Library } from "./styles/Library";

import AddNewBook from "./components/AddNewBook";
import Bookcase from "./components/Bookcase";
import BookcaseProvider from "./context";
import Clock from "./components/Clock";
import Librarian from "./components/Librarian";
import Modal from "./components/Modal";

const App: FC = () => {
  return (
    <Library>
      <Clock />
      <img src={logo} alt="tech library vizpert logo" className="logo" />
      <BookcaseProvider>
        <Bookcase />
        <Librarian />
        <AddNewBook />
        <Modal />
      </BookcaseProvider>
    </Library>
  );
};

export default App;
