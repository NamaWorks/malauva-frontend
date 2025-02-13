import React from 'react'

const useSubmitFilters = ({setOriginsValue, setTasteValue, setPriceValue, setTemperatureValue, setSortValue}: {setOriginsValue: (value: string) => void, setTasteValue: (value: string) => void, setPriceValue: (value: number | string) => void, setTemperatureValue: (value: number | string) => void, setSortValue: (value: string) => void}): void => {
  const selectDomItems = document.querySelectorAll(`.products-filter-select`)
  selectDomItems.forEach((item: HTMLSelectElement) => {
    const id = item.id.split('-')[1]
    const value = item.value || '';

    switch (id) {
      case 'origins':
        setOriginsValue(value.replaceAll('-', ' '))
        break;
      
      case 'taste':
        setTasteValue(value.replaceAll('-', ' '))
        break;

      case 'price':
        setPriceValue(value === 'price' ? 'price' : Number(value.replace('<', '')))
        break;

      case 'temperature':
        setTemperatureValue(value === 'temperature' ? 'temperature' : Number(value.replace('<', '')))
        break;

      case 'sort':
        setSortValue(value);
        break;

      default:
        console.error(`error at useSubmitFilter`)
        break;
    }
  })
}

export default useSubmitFilters