import { apiUrl } from "../../../data/globalVariables"
import { fetchData } from "./fetchData"

export const changeNumberOfItemsInUserCart = async(productIdNumber: String, numberToSet:Number) => {

  const user = await fetchData("/users/cart")

  const userId = user._id

  let itemToModify:Number

  user.cartItems.forEach((item, i) => {
    if(item.includes(productIdNumber)){itemToModify=i}
  });

  const parsedItem = JSON.parse(user.cartItems[itemToModify])

  const newItem = {...parsedItem, numberOfItems: numberToSet}

  user.cartItems[itemToModify] = JSON.stringify(newItem)


  const payload = { cartItems: user.cartItems }

    const data = await fetch(apiUrl+'/users/update/'+userId, {
      headers:{
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
      method: "PATCH",
      body: JSON.stringify(payload)
    })

}