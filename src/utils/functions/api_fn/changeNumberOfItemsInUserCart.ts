import { apiUrl } from "../../../data/globalVariables"
import { fetchData } from "./fetchData"

export const changeNumberOfItemsInUserCart = async(productIdNumber: String, numberToSet:number) => {

    const user = await fetchData("/users/cart")
  const userId = user._id
  let itemToModify:Number

  user.cartItems.forEach((item, i) => {
    if(item.includes(productIdNumber)){itemToModify=i}
  });
  const parsedItem = JSON.parse(user.cartItems[itemToModify])      

  // console.log(user)

  if(numberToSet>0){
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
  } else {
    try {
      // user.cartItems.splice(itemToModify,1)

      // console.log(user.cartItems)
  
      // const data = await fetch(apiUrl+'/users/update/'+userId, {
      //   headers:{
      //     "Content-type": "application/json",
      //     "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      //   },
      //   method: "PATCH",
      //   body: JSON.stringify(user.cartItems)
      // })

      const newItem = {...parsedItem, numberOfItems: 0}
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

      // console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
}