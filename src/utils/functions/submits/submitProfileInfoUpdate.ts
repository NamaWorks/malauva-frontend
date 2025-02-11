import { apiUrl } from "../../../data/globalVariables"
import { fetchData } from "../api_fn/fetchData"

export const submitProfileInfoUpdate = async (newUsername: string, newPersonName: string, newPhoneNumber: number, newEmail:string,newPassword: string) => {
  const originalUser = await fetchData('/users/profile')
  console.table(originalUser)

  const payload:any = {}
  if (!(newUsername==='') && !(newUsername===null) && !(newUsername===undefined)) payload.username = newUsername
  if (!(newPersonName==='') && !(newPersonName===null) && !(newPersonName===undefined)) payload.personName = newPersonName
  if (!(Number(newPhoneNumber)===0) && !(newPhoneNumber===null) && !(newPhoneNumber === undefined)) payload.phoneNumber = newPhoneNumber
  if (!(newEmail==='') && !(newPassword===null) && !(newEmail===undefined)) payload.email = newEmail
  if (!(newPassword==='') && !(newPassword===null) && !(newPassword===undefined)) payload.password = newPassword
  console.table(payload)

  try {
    const response = await fetch(apiUrl+"/users/update/"+originalUser._id, {
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      },
      method: "PATCH",
      body: JSON.stringify(payload)
    })
    const data = await response.json()
    console.log('Response:', data)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

  } catch (err) {
    console.error('Error:', err)
  }
}

export const newProfileInfoChecker =  (newInput: string, inputField: string) => {
  switch (inputField) {
    case 'username':
      usernameChecker(newInput)
      return true
      break;
  
    case 'name':
      personNameChecker(newInput)
      return true
      break;

    case 'phone':
      phoneChecker(newInput)
      return true
      break;

    case 'email':
      emailChecker(newInput)
      return true
      break;

    case 'password':
      passwordChecker(newInput)
      return true
      break;

    default:
      return false
      break;
  }
}

function usernameChecker (username){
  console.log(username)
}

function personNameChecker (personName){
  console.log(personName)
}

function phoneChecker (phoneNumber){
  console.log(phoneNumber)
}

function emailChecker (email){
  console.log(email)
}

function passwordChecker (password){
  console.log(password)
}