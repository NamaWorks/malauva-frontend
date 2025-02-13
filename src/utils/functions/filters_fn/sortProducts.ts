import { Wine } from "../../types/types";

export const sortProducts = (products: Wine[], sortKind:string) :Wine[] => {

 switch (sortKind) {
  case 'alphabetically':
    products.sort((a:any,b:any):any => compareAlph(a, b))
    break;

  case 'high price':
    products.sort((a:any,b:any)=>{return (a.price > b.price) ? -1 : (a.price < b.price) ? 1 : 0})
    break;
    
    case 'low price':
    products.sort((a:any,b:any)=>{return (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0})  
    break;
      
  default:
    break;
 } 

  return products
}


function compareAlph (a:Wine, b:Wine){
  const nameA:string|undefined = a.name;
  const nameB:string|undefined = b.name;

  if(nameA && nameB){
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  }

}