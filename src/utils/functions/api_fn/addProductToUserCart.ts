import { apiUrl } from "../../../data/globalVariables";
import { fetchData } from "./fetchData"

export const addProductToUserCart = async (productIdNumber: String, numberToAdd:Number):Promise<String[]> => {

  const user = await fetchData('/users/cart');
  const currentItemsInCart = user.cartItems;

  const userId = user._id

  const payload = {cartItems: addNewProductToCartArr(currentItemsInCart, productIdNumber, numberToAdd)};

  const data = await fetch(apiUrl+'/users/update/'+userId, {
    headers:{
      "Content-type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`
    },
    method: "PATCH",
    body: JSON.stringify(payload)
  })

  if(data.status===200){
    console.log(data.status)
  } else{
    console.log(data.status)
  }
}


function addNewProductToCartArr(originalArr:String[], newProduct:String, numberToAdd:Number=1):[] | void{
  let parsedArr = originalArr.map(item=>JSON.parse(item))
  parsedArr.forEach(item=>item.numberOfItems = Number(item.numberOfItems))

  const foundNewItem = parsedArr.find(item=>item.itemData===newProduct)

  if(!foundNewItem){
    parsedArr.push({
      itemData: newProduct,
      numberOfItems: numberToAdd,
    })
  } else if(foundNewItem){
    const indexOfItem = parsedArr.indexOf(foundNewItem)
    parsedArr[indexOfItem].numberOfItems = Number(parsedArr[indexOfItem].numberOfItems) + Number(numberToAdd)
  }

  const stringifiedArr = parsedArr.map(item=>JSON.stringify(item))

  return stringifiedArr
  
}