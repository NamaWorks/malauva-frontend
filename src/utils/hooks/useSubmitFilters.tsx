import React from 'react'

const useSubmitFilters = ({setOriginsValue, setTasteValue, setPriceValue, setTemperatureValue, setSortValue}: {setOriginsValue: string, seTasteValue: string, setPriceValue: number, setTemperatureValue:number, setSortValue: string}):void => {
  const selectDomItems = document.querySelectorAll(`.products-filter-select`)
  selectDomItems.forEach((item)=>{
    const id = item.id.split('-')[1]
    
    switch (id) {
      case 'origins':
        setOriginsValue(item.value.replaceAll('-', ' '))
        break;
      
      case 'taste':
        setTasteValue(item.value.replaceAll('-', ' '))
        break;

      case 'price':
        setPriceValue(item.value === 'price' ? 'price' : Number(item.value.replace('<', '')))
        break;

      case 'temperature':
        setTemperatureValue(item.value === 'temperature' ? 'temperature' : Number(item.value.replace('<', '')))
        break;

      case 'sort':
        setSortValue(item.value);
        break;

      default:
        console.error(`error at useSubmitFilter`)
        break;
    }
  })
}

export default useSubmitFilters