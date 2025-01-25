import { apiUrl } from "../../../data/globalVariables"
import { fetchData } from "../api_fn/fetchData"
import { redirectToUrl } from "../navigation_fn/redirectToUrl";

export const submitDeactivateAccount = async () => {
  try {
    
    const { _id } = await fetchData('/users/profile');
    console.log(`user Deactivated`)
    // const userRemoved = await fetch(`${apiUrl}/users/delete/${_id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    //   }
    // })

    // if(userRemoved.status === 200){
    //   redirectToUrl('home')
    // }

  } catch (err) {
    console.log(err)
  }
}