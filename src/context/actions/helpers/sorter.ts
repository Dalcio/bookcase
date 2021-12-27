export const sorter = (
  a: number | string,
  b: number | string,
  order: number
) => {
  if (a > b) return order * 1;
  if (a < b) return order * -1;
  return 0;
};
