import { UseSubmitFiltersProps } from '../types/interfaces'


const useSubmitFilters = ({setOriginsValue, setTasteValue, setPriceValue, setTemperatureValue, setSortValue}: UseSubmitFiltersProps): void => {
  const selectDomItems = document.querySelectorAll(`.products-filter-select`)
  selectDomItems.forEach((item: any) => {
    const id = item.id.split('-')[1]
    const value = item.querySelector('.chosen-filter').innerHTML.toLowerCase();

    switch (id) {
      case 'origins':
        setOriginsValue(value.replaceAll('-', ' '))
        break;
      
      case 'taste':
        setTasteValue(value.replaceAll('-', ' '))
        break;

      case 'price':
        setPriceValue(value === 'price' ? 'price' : Number(value.replace('<', '').replace('&lt;', '')))
        break;

      case 'temperature':
        setTemperatureValue(value === 'temperature' ? 'temperature' : Number(value.replace('<', '').replace('&lt;', '')))
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