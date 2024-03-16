import React from 'react';

const List = ({ing}) => {
  return (
    <div>
      <ul className='list-disc ml-8 text-lg lg:text-xl  text-gray-500 lg:leading-normal'>

<li> {ing}</li>
</ul>
    </div>
  );
};

export default List;