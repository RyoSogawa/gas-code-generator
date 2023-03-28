export const convertArrayToJsonCompatible = (array: unknown[]): any[] => {
  return array.map((item) => {
    if (item instanceof Date) {
      return item.getTime();
    }

    return item;
  });
};
