import { apiUrl } from "../../../data/globalVariables"
import { asignPurchaseIdNumber } from "./asignIdNumber"
import { clearCartAfterPurchase } from "./clearCartAfterPurchase"
import { fetchData } from "./fetchData"

export const proceedToPayment = async (userData:any) => {
  try {
    const itemsArr = await Promise.all(userData.cartItems.map(async (item:string)=>{
      const data = await fetchData(`/wines/idNumber/${JSON.parse(item).itemData}`)

      const newObj = {
        object: data._id,
        numberOfItems: Number(JSON.parse(item).numberOfItems)
      }

     return newObj

    }))

    const payload = {
      idNumber: await asignPurchaseIdNumber(),
      client: userData._id,
      itemsBought: itemsArr,
    }
    const data = await fetch(`${apiUrl}/purchases/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      },
      body:JSON.stringify(payload)
    })

    if(data.status ===201){
      clearCartAfterPurchase(userData)
    }

    alert(`We're working on the payment section of the page. Your purchase has been recorded in our DB`)
  } catch (err) {
    console.log(err)
  }
}