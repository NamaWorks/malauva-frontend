import './ProductsFilterSelect.scss'

const ProductsFilterSelect = ({selectName, allText, arr}: {selectName: string, allText: string, arr?: string[] | number[]}) => {

  return (
    <>
      <select className="products-filter-select" name={`products-${selectName}-select`} id={`products-${selectName}-select`}>
        <option value={selectName.split(' ').join('-').toLowerCase()} hidden>{selectName}</option>
        <option value={allText.split(' ').join('-').toLowerCase()}>{allText}</option>

        {arr && arr.map((value, i) => {
          return (
            <option value={value} key={i}>
              {typeof value === 'string' ? value.split('-').join(' ') : value}
            </option>
          );
        })};
      </select>
    </>
  );
};

export default ProductsFilterSelect;
