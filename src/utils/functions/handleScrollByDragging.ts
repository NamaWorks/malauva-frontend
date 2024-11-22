import { position } from "../types/types"

let dragPos: position ;
let dropPos: position ;
let distance: position ;


const getItem = (item: string)=>{
  return document.querySelector(`#${item}`)
} 

const getMousePosition = (event: MouseEvent)=>{
  const position: position = {
    x: event.clientX,
    y: event.clientY
  }
  return position
}

const calculateDistance= ()=>{
  distance = {
    x: dropPos.x - dragPos.x,
    y: dropPos.y - dragPos.y,
  }
}

const getItemToHandlePos=(item: string)=>{
  const itemToHandle = document.querySelector(`#${item}`)
  const itemToHandleRect = itemToHandle?.getBoundingClientRect()

  console.log(itemToHandleRect)

  let itemToHandlePos:position = {
    x: itemToHandleRect?.x,
    y: itemToHandleRect?.y,
  } 

  return itemToHandlePos
}

const  moveItem=(item: string, distance: position)=>{
  const itemToHandle = document.querySelector(`#${item}`)
  const itemToHandlePos = getItemToHandlePos(item)

  console.log(distance)
  console.log(itemToHandlePos)

  itemToHandle.style.top = itemToHandlePos.y + distance.y + 'px';
  itemToHandle.style.left = itemToHandlePos.x + distance.x + 'px';
}

const onMouseMove=(item: string, distance: position)=>{
  console.log('eventlistener not exited')
  calculateDistance()
  moveItem(item, distance)
}

// /////////////////////////////////////////////

export const handleScrollByDragging = (item: string) => {

  const itemToHandle = getItem(item)

  itemToHandle?.addEventListener('mousedown', (e: Event)=>{
    dragPos = getMousePosition(e)
    // itemToHandle.addEventListener('mousemove', onMouseMove(item, distance))
    itemToHandle.style.cursor = "grabbing"
  })
  
  itemToHandle?.addEventListener('mouseup', (e: Event)=>{
    dropPos = getMousePosition(e);
    calculateDistance()
    // itemToHandle.removeEventListener('mousemove', onMouseMove(item, distance))
    itemToHandle.style.cursor = "grab"
    moveItem(item, distance)
  })
}