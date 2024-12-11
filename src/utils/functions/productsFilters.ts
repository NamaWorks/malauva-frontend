import { Wine } from "../types/types";

export const addAllStrings = (fromArr: string[], objKey: string) => {
  let accArr: string[] = [];
  fromArr.map((item: Wine)=>{
    !accArr.includes(item[objKey].split(" ").join("-").toLowerCase()) && accArr.push(item[objKey].split(" ").join("-").toLowerCase())
  })
  accArr.sort()
  return accArr
}

export const addAllNumbers = (fromArr: number[], objKey: string) => {
  // in this case, what we want is having intervals of prices-temps-etc
  let accArr: number[] = [];
  fromArr.map((item:Wine)=>{
    !accArr.includes(item[objKey])
  })
}