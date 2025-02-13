import { Wine } from "../../types/types"

export const filterProducts = (originsValue:string, tasteValue:string, priceValue:number|string, temperatureValue:number | string, sortValue:string, fetchWines:Wine[]):Array<Wine> => {
  // let filteredArr:Wine[] = [];

  console.table([originsValue, tasteValue, priceValue, temperatureValue, sortValue])
  
const filteredByOrigin = fetchWines.filter(filterByOrigin);
const filteredByTaste = filteredByOrigin.filter(filterByTaste);
const filteredByPrice = filteredByTaste.filter(filterByPrice);
const filteredByTemperature = filteredByPrice.filter(filterByTemperature);
const sortedArr = filteredByTemperature.sort()

function filterByOrigin (item:Wine){
  if(originsValue === 'origins'){
    return item
  } else {
    return item.origin?.toLowerCase() === originsValue
  }
}

function filterByTaste (item:Wine){
  if(tasteValue === 'taste'){
    return item
  } else {
    return item.taste?.toLowerCase() === tasteValue
  }
}

function filterByPrice (item:Wine){
  if(priceValue === 'price'){
    return item
  } else if(typeof priceValue==='number'){
    return item.price <= priceValue
  }
}

function filterByTemperature (item:Wine){
  if(temperatureValue === 'temperature'){
    return item
  } else if(typeof temperatureValue ==='number'){
    return item.idealTemperature <= temperatureValue
  }
}

return sortedArr
}