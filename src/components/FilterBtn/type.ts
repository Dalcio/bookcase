export type FiltersKeys = "alphabet" | "color" | "size";

export type FilterBtnProps = {
  filter: FiltersKeys;
  selectFilter: (filter: FiltersKeys) => void;
  selectedFilter: FiltersKeys;
  // compareFn: () => void;
};
