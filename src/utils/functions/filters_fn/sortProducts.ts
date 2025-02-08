import { Wine } from "../../types/types";

export const sortProducts = (products: Wine[], sortKind:string) :Wine[] => {

 switch (sortKind) {
  case 'alphabetically':
    products.sort((a,b) => compareAlph(a, b))
    break;

  case 'high price':
    
    break;

  case 'low price':
    
    break;

  case 'low price':
    
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