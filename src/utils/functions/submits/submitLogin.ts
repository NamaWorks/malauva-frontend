import { apiUrl } from "../../../data/globalVariables"

export const submitLogin = async({email, password}:{email: string, password: string}) => {
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

  const dataResponse = await data.json()

  if (data.status === 200){
    window.location.href = '/home'
    sessionStorage.setItem('token', dataResponse.token)
  } else {console.log('not worked')}

  return  data.status
}