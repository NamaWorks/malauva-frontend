import { position } from "../types/types"

let dragPos: position = { x: 0, y: 0, };
let dropPos: position = { x: 0, y: 0, };
let distance: position = { x: 0, y: 0, };
export const handleScrollByDragging = (item: string) => {

  const itemToHandle = getItem(item)

  itemToHandle?.addEventListener('mousedown', (e: Event)=>{
    dragPos = getMousePosition(e)
    itemToHandle.addEventListener('mousemove', onMouseMove(item, distance))
    itemToHandle.style.cursor = "grabbing"
  })
  
  itemToHandle?.addEventListener('mouseup', (e: Event)=>{
    // dropPos = getMousePosition(e);
    itemToHandle.removeEventListener('mousemove', onMouseMove(item, distance))
    // calculateDistance()
    // moveItem(item, distance)
    itemToHandle.style.cursor = "grab"

  })



}


// ///////////////////////////////////////////////////////

function getItem(item: string){
  return document.querySelector(`#${item}`)
} 

function getMousePosition(event: MouseEvent){
  const position: position = {
    x: event.clientX,
    y: event.clientY
  }
  return position
}

function calculateDistance(){
  distance = {
    x: dropPos.x - Math.abs(dragPos.x),
    y: dropPos.y - Math.abs(dragPos.y),
  }
}

function getItemToHandlePos(item: string){
  const itemToHandle = document.querySelector(`#${item}`)
  const itemToHandleRect = itemToHandle?.getBoundingClientRect()
  let itemToHandlePos:position = {
    x: itemToHandleRect?.left,
    y: itemToHandleRect?.top,
  } 
  return itemToHandlePos
}

function moveItem(item: string, distance: position) {
  const itemToHandle = document.querySelector(`#${item}`)
  const itemToHandlePos = getItemToHandlePos(item)
  // console.log(itemToHandle?.getAttribute('style'))
  itemToHandle.style.top = itemToHandlePos.y + distance.y + 'px';
  itemToHandle.style.left = itemToHandlePos.x + distance.x + 'px';
  // console.log(`item should move`)
}

function onMouseMove(item, distance){
  console.log('eventlistener not exited')
  calculateDistance()
  moveItem(item, distance)
}