import { position } from "../types/types"

export const handleScrollByDragging = (item:string)=>{

}

 export const handleMouseMove_ = (item: string) => {
  window.onload = ()=>{
    let held = false;
    
    const element = document.querySelector("#" + item);
    const elementRect = element?.getBoundingClientRect();
    const parent = element?.parentElement;
    
    let startMouseX = 0;
    let startMouseY = 0;
    let endMouseX = 0;
    let endMouseY = 0;
    
    let elementX = elementRect?.left;
    let elementY = elementRect?.top;
    
    const speed = 0.05;
    
    
    function animate(){
      
      const distX = endMouseX - (Math.abs(startMouseX));
      const distY = endMouseY - (Math.abs(startMouseY));
      
      
      elementX = elementX + (distX * speed);
      elementY = elementY + (distY * speed);
      
      element.style.left = elementX + "px";
      element.style.top = elementY + "px";
      
      requestAnimationFrame(animate);
      
      return [elementX, elementY]
    }
    animate();
    
    document.addEventListener("mousemove", function(event){
      if(held){
        endMouseX = event.pageX;
        endMouseY = event.pageY;
      } else {
        // console.log('choripanes')
      }
    })
    
    parent?.addEventListener('mousedown', (e)=>{
      // console.log('mousedown')
      startMouseX = e.pageX;
      startMouseY = e.pageY;
      held = true
    })
    parent?.addEventListener('mouseup', (e)=>{
      held = false
      endMouseX = e.pageX;
      endMouseY = e.pageY;
    })
    
  }
  };