import { redirectToUrl } from "../navigation_fn/redirectToUrl"

export const submitLogout = ():void=>{
  sessionStorage.removeItem('token')
  redirectToUrl('home')
}