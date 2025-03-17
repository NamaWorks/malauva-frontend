import { apiUrl } from "../../../data/globalVariables"

export const fetchFilteredProducts = async (payload: {origin?: string, taste?: string, temperature?: number | string, price?: number | string}) => {

  console.log(payload)
  try {
    const data = await fetch(apiUrl+"/wines/filter", {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
    
    const dataResponse = await data.json()
    // console.log(dataResponse)
    return dataResponse
  } catch (error) {

    console.warn(error)
    
  }
}