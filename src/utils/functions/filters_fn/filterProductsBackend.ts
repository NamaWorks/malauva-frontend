import { fetchFilteredProducts } from "../api_fn/fetchFilteredProducts"

export const filterProductsBackend = async ({originsValue, tasteValue, priceValue, temperatureValue}: {originsValue: string, tasteValue: string; priceValue: string |number, temperatureValue: string | number}) => {

  const newFilteredArr = await fetchFilteredProducts(
    {
      origin:originsValue == 'origins' ? '' : originsValue.split(' ').map((word)=>{return capitalizeFirstLetter(word)}).join(' '), 
      taste:tasteValue == 'taste' ? '' : tasteValue.split(' ').map((word)=>{return capitalizeFirstLetter(word)}).join(' '), 
      price:priceValue == 'price' ? '' : priceValue, 
      temperature: temperatureValue == 'temperature' ? '' : temperatureValue 
    }
  )

  return newFilteredArr
}


function capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}