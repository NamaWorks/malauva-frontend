import { apiUrl } from '/src/data/globalVariables';

export const submitLogin = async({email, password}:{email: string | undefined, password: string | undefined}) => {
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

  console.log(await data)
  
  const dataResponse = await data.json()

  if (data.status === 200){
    window.location.href = '/home'
    sessionStorage.setItem('token', dataResponse.token)
  } else {console.log('not worked')}


  return  data.status
}