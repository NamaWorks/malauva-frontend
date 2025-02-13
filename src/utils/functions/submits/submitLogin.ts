import { apiUrl } from '../../../data/globalVariables';

export const submitLogin = async({email, password}:{email: string | undefined, password: string | undefined}):Promise<number> => {
  const payload = {
    email: email,
    password: password
  }

  const data = await fetch(apiUrl+"/users/login", {
    headers:{
      "Content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(payload),
  })


    if (data.status === 200){
      const dataResponse = await data.json()
      sessionStorage.setItem('token', dataResponse.token)
    } else {console.log('not worked')}
    return  data.status
}