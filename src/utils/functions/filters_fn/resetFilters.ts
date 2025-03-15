export const resetFilters = () => {
  const domItems = document.querySelectorAll(`.products-filter-select`)
  domItems.forEach((item: any)=>{
    const id = item.id.split('-')[1]
    item.querySelector('.chosen-filter').innerText = id
  })
}