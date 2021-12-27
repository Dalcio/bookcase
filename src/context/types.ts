import { ActionsType } from "./actions/types";
import { FiltersKeys } from "../components/FilterBtn/type";
import { StatePayloadType } from "./reducer/types";

export type LastFilter =
  | FiltersKeys
  | "alphabet-des"
  | "size-des"
  | "color-des"
  | undefined;

export interface BookcaseContextInterface
  extends StatePayloadType,
    ActionsType {}
