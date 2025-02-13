// import React, { useEffect, useRef, useState } from "react";
// import { useFetcher } from "react-router-dom";

// const useScrollByDragging = (item: string) => {

//   const speed = 0.05;

//   const element:HTMLDivElement | null = document.querySelector(`#${item}`);
//   const parent = element?.parentElement;
  
//   const [held, setHeld] = useState(false);
//   const [startMouseX, setStartMouseX] = useState<number>(0);
//   const [startMouseY, setStartMouseY] = useState<number>(0);
//   const [endMouseX, setEndMouseX] = useState<number>(0);
//   const [endMouseY, setEndMouseY] = useState<number>(0);
//   const [elementX, setElementX] = useState<number>(0);
//   const [elementY, setElementY] = useState<number>(0);
//   const [cleanListeners, setCleanListeners] = useState<boolean>(false);

//   useEffect(()=>{
//     // console.log(`endMouseY: ${endMouseY}` + ` ||| startMouseY: ${startMouseY}`)
//   },[held])


    
//     const animate = () => {
//       const element = document.querySelector(`#${item}`);
  
//       const distX = startMouseX - Math.abs(endMouseX);
//       const distY = startMouseY - Math.abs(endMouseY);
      
//       setElementX(elementX - distX * speed);
//       setElementY(elementY - distY * speed);
      
//       // element.style.left = elementX + "px";
//       // element.style.top = elementY + "px";
//       if(element){
//         element.style.left = endMouseX + "px";
//         element.style.top = endMouseY - window.innerHeight * 2 + "px";
//       }

//       requestAnimationFrame(animate);
//     };
    
//     const handleMouseDown = (e: Event) => {
//       // animate()
//       setHeld(true);
//       setStartMouseX(e.pageX);
//       setStartMouseY(e.pageY);
//       element.style.cursor = 'grabbing';
//     };
//     const handleMouseUp = (e: Event) => {
//       // console.warn(`startMouseX: ${startMouseX} -------- vs -------- endMouseX: ${endMouseX}` )
//       setCleanListeners(true)
//       setHeld(false);
//       element.style.cursor = 'grab';
//     };
//     const handleMouseMove = (e: Event) => {
//       if(held === true){
//         console.log(held)
//         console.log('button being hold')
//         setEndMouseX(e.pageX);
//         setEndMouseY(e.pageY);
//       } else if (held === false){
//         console.log(held)
//       }
//     }
//     const removeListeners = () =>{
//       parent?.removeEventListener("mousedown", handleMouseDown);
//       parent?.removeEventListener("mouseup", handleMouseUp);
//       document.removeEventListener('mousemove', handleMouseMove)
//       // setCleanListeners(false)
//     };
//   window.onload=()=>{
//     animate()
//   }
    
//     parent?.addEventListener("mousedown", handleMouseDown);
//     parent?.addEventListener("mouseup", handleMouseUp);
//     if(held === true){document.addEventListener('mousemove', handleMouseMove)}
//     if(cleanListeners){removeListeners()}
  
// };

// export default useScrollByDragging;
