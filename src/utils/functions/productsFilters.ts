import { Wine } from "../types/types";

export const addAllOrigins = (fromArr: string[]) => {
  let accArr: string[] = []
  fromArr.map((item: Wine)=>{
    !accArr.includes(item.origin) && accArr.push(item.origin.split(" ").join("-").toLowerCase())
  })

  accArr.sort()
  return accArr
}