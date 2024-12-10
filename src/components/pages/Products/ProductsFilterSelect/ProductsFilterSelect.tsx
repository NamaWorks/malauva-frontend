import "./ProductsFilterSelect.scss";

import React from "react";

const ProductsFilterSelect = ({selectName, allText, arr}: {selectName: string, allText: string, arr: string[] | number[]}) => {
  return (
    <>
      <select name="products-origin-select" id="products-origin-select">
        <option value={selectName.split(' ').join('-').toLowerCase()} hidden>{selectName}</option>
        <option value={allText.split(' ').join('-').toLowerCase()}>{allText}</option>

        {arr.map((value, i) => {
          console.log(value)
          return (
            <option value={value} key={i}>
              {value}
            </option>
          );
        })};


      </select>
    </>
  );
};

export default ProductsFilterSelect;
