import { useState } from 'react';
import './ProductsFilterSelect.scss';

const ProductsFilterSelect = ({ selectName, allText, arr }: { selectName: string, allText: string, arr?: string[] | number[] }) => {
  // console.log(arr);

  const [ filterValue, setFilterValue ] = useState<string | number>(allText)
  const [ toggleOptions, setToggleOptions ] = useState<boolean>(false)


  return (
    <>
      <div className='products-filter-select' id={`products-${selectName}-select`}>
        <p className='chosen-filter' onClick={()=>{setToggleOptions(!toggleOptions)}}>{filterValue=== 'all' ? selectName : filterValue }</p>
        <div className={`select-options ${toggleOptions ? 'show-options' : 'hide-options'}`}>
            <p className='filter-option' onClick={()=>{setFilterValue(allText); setToggleOptions(false)}}>all</p>
        {arr && arr.map((value, i) => {
          return (
            <p key={i} onClick={()=>{setFilterValue(value); setToggleOptions(false)}} className='filter-option'>
              {typeof value === 'string' ? value.split('-').join(' ') : value}
            </p>
          );
        })}

        </div>
      </div>



      {/* <select className="products-filter-select" name={`products-${selectName}-select`} id={`products-${selectName}-select`}>
        <option value={selectName.split(' ').join('-').toLowerCase()} hidden>{selectName}</option>
        <option value={allText.split(' ').join('-').toLowerCase()}>{allText}</option>

        {arr && arr.map((value, i) => {
          return (
            <option value={value} key={i}>
              {typeof value === 'string' ? value.split('-').join(' ') : value}
            </option>
          );
        })}
      </select> */}
    </>
  );
};

export default ProductsFilterSelect;
