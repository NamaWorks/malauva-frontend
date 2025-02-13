import { apiUrl } from "../../../data/globalVariables"
import { fetchData } from "../api_fn/fetchData"

export const submitDeactivateAccount = async ():Promise<boolean> => {
  try {
    
    const { _id } = await fetchData('/users/profile');
    console.log(`user Deactivated`)
    const userRemoved = await fetch(`${apiUrl}/users/delete/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    })

    if(userRemoved.status === 200){
      return true
    } else {
      return false
    }

  } catch (err) {
    console.log(err)
    return false
  }
}