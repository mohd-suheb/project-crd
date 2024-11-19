import React from 'react';

// Importing filterData for fallback/default
import { filterData as defaultFilterData } from '../data';

const Filter = ({ filterData = defaultFilterData }) => {
  return (
    <div>
      {filterData.map((data) => (
        <button key={data.id}>{data.title}</button>
      ))}
    </div>
  );
};




export default Filter;