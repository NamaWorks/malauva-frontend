import { Wine } from "../../types/types";
// import { Wine } from "@utils/types/types";

export const addAllStrings = (fromArr: string[], objKey: string): string[] => {
  let accArr: string[] = [];
  fromArr.map((item: Wine)=>{
    !accArr.includes(item[objKey].split(" ").join("-").toLowerCase()) && accArr.push(item[objKey].split(" ").join("-").toLowerCase())
  })
  accArr.sort()
  return accArr
}

export const prepareIntervals = (fromArr: number[]): string[] => {
  const accArr: string[] = [];
  fromArr.forEach((item, i) => {
    i>=0 &&  accArr.push(`<${item}`)
  })

  return accArr

}