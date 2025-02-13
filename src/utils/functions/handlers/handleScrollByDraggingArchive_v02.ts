// import { position } from "../types/types"

// let dragPos: position ;
// let dropPos: position ;
// let distance: position ;


// const getItem = (item: string)=>{
//   return document.querySelector(`#${item}`)
// } 


// const getMousePosition = (event: MouseEvent)=>{
//   const position: position = {
//     x: event.clientX,
//     y: event.clientY
//   }
//   return position
// }

// const getParentItemTop = (item:string) => {
//   const parentItemScrollY: undefined | any | null = getItem(item)?.parentElement.getBoundingClientRect()
//   console.log(parentItemScrollY)
//   console.warn(parentItemScrollY.top)
//   return parentItemScrollY.top
// }

// const calculateDistance= (item)=>{
//   distance = {
//     x: dropPos.x - dragPos.x,
//     y: dropPos.y - dragPos.y - getParentItemTop(item),
//   }

//   return distance
// }

// const getItemToHandlePos=(item: string)=>{
//   const itemToHandle = document.querySelector(`#${item}`)
//   const itemToHandleRect = itemToHandle?.getBoundingClientRect()

//   // console.log(itemToHandleRect)

//   let itemToHandlePos:position = {
//     x: itemToHandleRect?.x,
//     y: itemToHandleRect?.y,
//   } 

//   return itemToHandlePos
// }


// const  moveItem=(item: string, distance: position)=>{
//   const itemToHandle = document.querySelector(`#${item}`)
//   const itemToHandlePos = getItemToHandlePos(item)

//   console.log(itemToHandlePos)

//   itemToHandle.style.top = itemToHandlePos.y + distance.y + 'px';
//   itemToHandle.style.left = itemToHandlePos.x + distance.x + 'px';
// }

// const onMouseMove=(item: string, distance: position)=>{
//   console.log('eventlistener not exited')
//   calculateDistance(item)
//   moveItem(item, distance)
// }

// // /////////////////////////////////////////////

// export const handleScrollByDragging = (item: string) => {

//   const itemToHandle = getItem(item)
  
//   itemToHandle?.addEventListener('mousedown', (e: Event)=>{
//     dragPos = getMousePosition(e)
//     // itemToHandle?.addEventListener("mousemove", onMouseMove(item, distance))
//     itemToHandle.style.cursor = "grabbing"
//   })
  
  
//   itemToHandle?.addEventListener('mouseup', (e: Event)=>{
//     dropPos = getMousePosition(e);
//     calculateDistance(item)
//     // itemToHandle.removeEventListener('mousemove', onMouseMove(item, distance))
//     itemToHandle.style.cursor = "grab"
//     moveItem(item, distance)
//   })
// }

// // /////////////////////////////////////////////

//  const handleMouseMove = (item: string) => {

//   console.log('page charged')
//   const element = document.querySelector("#" + item);

//   let mouseX = 0;
//   let mouseY = 0;
  
//   let elementX = 0;
//   let elementY = 0;
  
//   const speed = 0.05;
  
  
//   function animate(){
    
//     const distX = mouseX - elementX;
//     const distY = mouseY - elementY - (window.innerHeight*2);
    
    
//     elementX = elementX + (distX * speed);
//     elementY = elementY + (distY * speed);
    
//     element.style.left = elementX + "px";
//     element.style.top = elementY + "px";
    
//     requestAnimationFrame(animate);
//   }
//   animate();
  
//   document.addEventListener("mousemove", function(event){
//     mouseX = event.pageX;
//     mouseY = event.pageY;
//   })

// };