import { apiUrl } from "../../data/globalVariables"

export const fetchData = async(endpoint: string): Promise<[] | undefined | void | Response> => {

  // console.log(apiUrl + endpoint)

  const dataMain = fetch(apiUrl + endpoint).then(data => data).catch(err=>console.log(err))
  // const dataMain = await fetch(apiUrl + endpoint)

  return dataMain

}