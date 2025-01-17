import { cartItem } from "../../types/types";
import { fetchData } from "../api_fn/fetchData"

export const parseCartItems = (strArr: string[]):cartItem => {
  return strArr.map((item) => JSON.parse(item));
};

export const createObjsToPrint = async (objArr: any[]): Promise<any[]> => {
  // we use Promise.all to make all the async function concurrently, we could make them sequentially, we could use a for...of loop
  const newArr = await Promise.all(
    objArr.map(async (parsedObj) => {

      const objDataDB = await fetchData(`/wines/idNumber/${parsedObj.itemData}`);

      const objToPrint = {
        name: objDataDB?.name,
        idNumber: parsedObj.itemData,
        numberOfItems: parsedObj.numberOfItems,
        price: objDataDB?.price,
        picture: objDataDB?.picture,
      };

      return objToPrint;
    })
  );
  return newArr;
};