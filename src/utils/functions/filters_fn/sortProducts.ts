import { Wine } from "../../types/types";

export const sortProducts = (products: Wine[], sortKind:string) :Wine[] => {

 switch (sortKind) {
  case 'alphabetically':
    products.sort((a,b) => compareAlph(a, b))
    break;

  case 'high price':
    products.sort((a,b)=>{return (a.price > b.price) ? -1 : (a.price < b.price) ? 1 : 0})
    break;
    
    case 'low price':
    products.sort((a,b)=>{return (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0})  
    break;
      
  default:
    break;
 } 

  return products
}


function compareAlph (a:Wine, b:Wine){
  const nameA = a.name;
  const nameB = b.name;

  console.log(nameA)

  return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
}