import { apiUrl } from "../../../data/globalVariables";

export const fetchData = async (
  endpoint: string
): Promise<[] | undefined | void | Response> => {
  const token = sessionStorage.getItem('token');

  try {
    const response = await fetch(apiUrl + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // when doing some requests that need the token, we need to add it in the headers of the request
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};