import React, { useEffect, useRef, useState } from 'react'

const useDebouncer = (value: undefined | number | string | any, delay:number=300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return ()=>{
      clearTimeout(timer);
    }
  },[value, delay]);

  return debouncedValue
};

export default useDebouncer