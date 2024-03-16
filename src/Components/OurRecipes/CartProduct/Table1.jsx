import React from 'react';
import PropTypes from 'prop-types';

const Table1 = ({item, index, handlePreparingBtn}) => {
  return (
        <tr className='bg-gray-100'>
          <td className='p-3'>{index+1} </td>
          <td className='p-3'>{item['recipe_name']}</td>
          <td className='p-3'>{item['preparing_time']} minutes</td>
          <td className='p-3'>{item.calories} calories</td>
          <td className='p-3'>
            <button onClick={()=>handlePreparingBtn(item)} className='btn rounded-full bg-[#0BE58A] font-bold'>Preparing</button>
          </td>
        </tr>
    
  );
};

Table1.propTypes = {
  
};

export default Table1;