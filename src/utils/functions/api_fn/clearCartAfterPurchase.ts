import { apiUrl } from "../../../data/globalVariables";

export const clearCartAfterPurchase = async (userData) => {
  try {
    const newUser = { ...userData, cartItems:[]}
    console.log(newUser)
    const data = await fetch(apiUrl + "/users/update/" + userData._id, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      method: "PATCH",
      body: JSON.stringify(newUser)
    });

    if(data.ok){
      console.warn(`changes in DB okay`)
    }
  } catch (err) {
    console.log(err);
  }
};
