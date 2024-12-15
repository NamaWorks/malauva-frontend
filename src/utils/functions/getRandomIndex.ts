export const getRandomIndex = (min:number=0, max:number=10):number =>{
  return Math.random() * (max - min) + min;
}