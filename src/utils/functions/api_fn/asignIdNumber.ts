import { fetchData } from "/src/utils/functions/api_fn/fetchData"

export const asignUserIdNumber = async () => {
  const lastId = await fetchData('/users/lastid')
  const newId = createNewId(lastId, 'user')
  return newId
}

export const asignPurchaseIdNumber = async () => {
  const lastId = await fetchData('/purchases/lastid')
  const newId = createNewId(lastId, 'purchase')
  return newId
}

function createNewId(lastId: string, cat:string){
  switch (cat) {
    case 'user':
      const newIdUser = "U" + (Number(lastId.replace('U', ''))+1)
      return newIdUser;  
      break;
    case 'wine':
      const newIdWine = "W" + (Number(lastId.replace('W', ''))+1)
      return newIdWine
      break;
    case 'purchase':
      const newIdPurchase = "P" + (Number(lastId.replace('P', ''))+1)
      return newIdPurchase;
      break
  
    default:
      return 'A000'
      break;
  }
}