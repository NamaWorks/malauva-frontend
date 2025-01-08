import { redirectToUrl } from "../navigation_fn/redirectToUrl"

export const submitLogout = ():any=>{
  sessionStorage.removeItem('token')
  redirectToUrl('/home')
}