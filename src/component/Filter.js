// import React from 'react'
// import {filterData, apiUrl} from  "../data"

// const Filter = ({filterData}) => {
//   return (
//     <div>

//         {
//             fileterData.map( (data)=>{
//                 return <button>
//                     {data.title};
//                 </button>
//             })
//         }
//     </div>
//   )
// }

// export default Filter;
import React from 'react';

const Filter = ({ filterData }) => {
  return (
    <div>
      {filterData.map((data, index) => (
        <button key={index}>
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
