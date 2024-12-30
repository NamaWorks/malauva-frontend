import { fetchData } from "/src/utils/functions/api_fn/fetchData"

export const asignIdNumber = async () => {
  const lastId = await fetchData('/users/lastid')
  console.log(lastId)
  const newId = createNewId(lastId)
  return newId
}

function createNewId(lastId){
  const newId = "U" + (Number(lastId.replace('U', ''))+1)
  return newId
}