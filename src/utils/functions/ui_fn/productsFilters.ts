import { Wine } from "../../types/types";

export const addAllStrings = (fromArr: Wine[], objKey: keyof Wine): string[] => {
  let accArr: string[] = [];
  fromArr.forEach((item: Wine) => {
    const value = item[objKey];
    if (typeof value === 'string' && !accArr.includes(value.split(" ").join("-").toLowerCase())) {
      accArr.push(value.split(" ").join("-").toLowerCase());
    }
  });
  accArr.sort();
  return accArr;
}

export const prepareIntervals = (fromArr: number[]): string[] => {
  const accArr: string[] = [];
  fromArr.forEach((item, i) => {
    if (i >= 0) accArr.push(`<${item}`);
  });

  return accArr;
}