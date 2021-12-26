import { TBook } from "../Book/types";

export const reorderSameSource = (
  list: TBook[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from<TBook>(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderDiffSource = (
  sourceList: TBook[],
  destList: TBook[],
  startIndex: number,
  endIndex: number
) => {
  const source = sourceList.filter((_, i) => i !== startIndex);
  const dest = [
    ...destList.slice(0, endIndex),
    sourceList[startIndex],
    ...destList.slice(endIndex, destList.length),
  ];

  return { sourceList: source, destList: dest };
};
