import { v4 as uuid4 } from "uuid";
import { TBook } from "../components/Book/types";
import { StatePayloadType } from "./reducer/types";

const firstShelfDefaultState: TBook[] = [
  {
    id: uuid4(),
    createdAt: new Date(),
    color: "yellow",
    name: "a",
    size: 4,
  },
  {
    id: uuid4(),
    createdAt: new Date(),
    color: "red",
    name: "b",
    size: 2,
  },
  {
    id: uuid4(),
    createdAt: new Date(),
    color: "orange",
    name: "c",
    size: 5,
  },
  {
    id: uuid4(),
    createdAt: new Date(),
    color: "violet",
    name: "d",
    size: 5,
  },
  {
    id: uuid4(),
    createdAt: new Date(),
    color: "lightblue",
    name: "e",
    size: 0,
  },
  {
    id: uuid4(),
    createdAt: new Date(),
    color: "magenta",
    name: "f",
    size: 1,
  },
];

const secondShelfDefaultState: TBook[] = [
  {
    id: uuid4(),
    createdAt: new Date(),
    color: "green",
    name: "i",
    size: 3,
  },
  {
    id: uuid4(),
    createdAt: new Date(),
    color: "darkblue",
    name: "h",
    size: 5,
  },
  {
    id: uuid4(),
    createdAt: new Date(),
    color: "pink",
    name: "g",
    size: 1,
  },
];

export const initialState: StatePayloadType = {
  lastFilter: "alphabet",
  firstShelf: firstShelfDefaultState,
  secondShelf: secondShelfDefaultState,
};

export const initFirstShelf = (): TBook[] => firstShelfDefaultState;

export const initSecondShelf = (): TBook[] => secondShelfDefaultState;
