import { apiUrl } from "../../../data/globalVariables"
import { fetchData } from "./fetchData"

export const changeNumberOfItemsInUserCart = async(productIdNumber: string, numberToSet:number) => {

    const user = await fetchData("/users/cart")
  const userId = user._id
  let itemToModify:number | null = null

  user.cartItems.forEach((item:string, i:number) => {
    if(item.includes(productIdNumber)){itemToModify=i}
  });

  if(typeof itemToModify === 'number'){
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
      if(data.ok){
        console.log('okay')
      }
  } else {
    try {
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

        if(data.ok){
          console.log('okay')
        }

      // console.log(data)
    } catch (err) {
      console.log(err)
    }
  } 
  }
  
}