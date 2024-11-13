import { apiUrl } from "../../data/globalVariables"

export const fetchData = async (endpoint: string): Promise<T> | void | undefined => {
  const res = await fetch(apiUrl + endpoint)
  const  data =  await res.json()
  // console.log(data)
}