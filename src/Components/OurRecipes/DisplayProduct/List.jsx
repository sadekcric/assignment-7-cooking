import React from 'react';

const List = ({ing}) => {
  return (
      <ul className='list-disc ml-8 text-lg lg:text-xl  text-gray-500'>

        <li> {ing}</li>
      </ul>
    
  );
};

export default List;