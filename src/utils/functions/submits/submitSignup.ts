import { apiUrl } from "../../../data/globalVariables";
import { asignUserIdNumber } from "../api_fn/asignIdNumber";

export const signupSubmit = async ({ personName, email, username, password}: { personName:string, email:string, username:string, password:string}) => {

  const payload = {
    idNumber: await asignUserIdNumber(),
    personName: personName,
    email: email,
    username: username,
    password: password
  }

  const data = await fetch(apiUrl+"/users/signup", {
    headers: {
      "Content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(payload),
  })
  
  // const dataResponse = await data.json()
  return data.status

}