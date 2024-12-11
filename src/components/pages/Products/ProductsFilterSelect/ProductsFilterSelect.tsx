import "./ProductsFilterSelect.scss";

import React, { useEffect } from "react";

const ProductsFilterSelect = ({selectName, allText, arr}: {selectName: string, allText: string, arr?: string[] | number[]}) => {

  return (
    <>
      <select name="products-origin-select" id="products-origin-select">
        <option value={selectName.split(' ').join('-').toLowerCase()} hidden>{selectName}</option>
        <option value={allText.split(' ').join('-').toLowerCase()}>{allText}</option>

        {arr && arr.map((value, i) => {
          return (
            <option value={value} key={i}>
              {value === String ? value.split('-').join(' ') : value}
            </option>
          );
        })};

        {/* we should add a range of values */}


      </select>
    </>
  );
};

export default ProductsFilterSelect;
