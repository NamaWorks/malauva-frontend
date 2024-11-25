import React, { useEffect, useState } from 'react'

const useScrollByDragging = (item) => {

  const element = document.querySelector(`#${item}`)
  const parentElement = element?.parentElement

  const [held, setHeld] = useState(false)
  const [elementPosX, setElementPosX] = useState()
  const [elementPosY, setElementPosY] = useState()

useEffect(()=>{
  console.log(held)
},[held])
  
  let mouseX = 0;
  let mouseY = 0;
  
  let elementX = elementPosX || 0;
  let elementY = elementPosY || 0;
  
  const speed = 0.05;
  
  
  function animate(){
    
    const distX = mouseX - elementX;
    const distY = mouseY - elementY - (window.innerHeight*2);
    
    
    elementX = elementX + (distX * speed);
    elementY = elementY + (distY * speed);

    // setElementPosX(elementX)
    // setElementPosY(elementY)
    
    element.style.left = elementX + "px";
    element.style.top = elementY + "px";
    
    requestAnimationFrame(animate);
  }
  animate();
  
  parentElement.addEventListener("mousemove", function(event){
    if(!held){
      // mouseX = mouseX;
      // mouseY = mouseY;
      // console.log('choripanes')
      return
    } else{
      mouseX = event.pageX;
      mouseY = event.pageY;
    }
  })
  
  parentElement?.addEventListener('mousedown', ()=>{setHeld(true)})
  parentElement?.addEventListener('mouseup', ()=>{setHeld(false)})
  
}


export default useScrollByDragging