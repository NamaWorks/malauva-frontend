import { apiUrl } from "../../data/globalVariables";

export const fetchData = async (
  endpoint: string
): Promise<[] | undefined | void | Response> => {
  // console.log(apiUrl + endpoint)
  // const dataMain = await fetch(apiUrl + endpoint)

  const dataMain = fetch(apiUrl + endpoint)
    .then((data) => data)
    .catch((err) => console.log(err))
    .then((res) => res.json())
    .catch((err) => console.warn(err));

  return dataMain;
};
