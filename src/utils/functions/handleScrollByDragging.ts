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

const getParentItemTop = (item:string) => {
  const parentItemScrollY = getItem(item)?.parentElement.getBoundingClientRect()
  console.log(parentItemScrollY)
  console.warn(parentItemScrollY.top)
  return parentItemScrollY.top
}

const calculateDistance= (item)=>{
  distance = {
    x: dropPos.x - dragPos.x,
    y: dropPos.y - dragPos.y - getParentItemTop(item),
  }

  return distance
}

const getItemToHandlePos=(item: string)=>{
  const itemToHandle = document.querySelector(`#${item}`)
  const itemToHandleRect = itemToHandle?.getBoundingClientRect()

  // console.log(itemToHandleRect)

  let itemToHandlePos:position = {
    x: itemToHandleRect?.x,
    y: itemToHandleRect?.y,
  } 

  return itemToHandlePos
}


const  moveItem=(item: string, distance: position)=>{
  const itemToHandle = document.querySelector(`#${item}`)
  const itemToHandlePos = getItemToHandlePos(item)

  console.log(itemToHandlePos)

  itemToHandle.style.top = itemToHandlePos.y + distance.y + 'px';
  itemToHandle.style.left = itemToHandlePos.x + distance.x + 'px';
}

const onMouseMove=(item: string, distance: position)=>{
  console.log('eventlistener not exited')
  calculateDistance(item)
  moveItem(item, distance)
}

// /////////////////////////////////////////////

export const handleScrollByDragging = (item: string) => {

  const itemToHandle = getItem(item)
  
  itemToHandle?.addEventListener('mousedown', (e: Event)=>{
    dragPos = getMousePosition(e)
    // itemToHandle?.addEventListener("mousemove", onMouseMove(item, distance))
    itemToHandle.style.cursor = "grabbing"
  })
  
  
  itemToHandle?.addEventListener('mouseup', (e: Event)=>{
    dropPos = getMousePosition(e);
    calculateDistance(item)
    // itemToHandle.removeEventListener('mousemove', onMouseMove(item, distance))
    itemToHandle.style.cursor = "grab"
    moveItem(item, distance)
  })
}

// /////////////////////////////////////////////

export const handleScrollByDraggingTest = (item: string) => {

  window.onload = ()=>{
    console.log('page charged')
    const ball = document.querySelector("#" + item);

    let mouseX = 0;
    let mouseY = 0;
    
    let ballX = 0;
    let ballY = 0;
    
    const speed = 0.05;
    
    
    function animate(){
      
      const distX = mouseX - ballX;
      const distY = mouseY - ballY - (window.innerHeight*2);
      
      
      ballX = ballX + (distX * speed);
      ballY = ballY + (distY * speed);
      
      ball.style.left = ballX + "px";
      ball.style.top = ballY + "px";
      
      requestAnimationFrame(animate);
    }
    animate();
    
    document.addEventListener("mousemove", function(event){
      mouseX = event.pageX;
      mouseY = event.pageY;
    })
  }
};
