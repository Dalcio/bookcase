import { TBook } from "../components/Book/types";

const allBooks: Omit<TBook, "releaseDate" | "id">[] = [
  {
    color: "yellow",
    name: "a",
    size: 4,
  },
  {
    color: "red",
    name: "b",
    size: 2,
  },
  {
    color: "orange",
    name: "c",
    size: 5,
  },
  {
    color: "violet",
    name: "d",
    size: 5,
  },
  {
    color: "lightblue",
    name: "e",
    size: 0,
  },
  {
    color: "magenta",
    name: "f",
    size: 1,
  },
  {
    color: "green",
    name: "i",
    size: 3,
  },
  {
    color: "darkblue",
    name: "h",
    size: 5,
  },
  {
    color: "pink",
    name: "g",
    size: 1,
  },
];

export default allBooks;
