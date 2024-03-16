

const Table2 = ({cooking, index}) => {
  return (
  
    <tr>
      <td className='p-3'>{index+1}</td>
      <td className='p-3'>{cooking['recipe_name']}</td>
      <td className='p-3'>{cooking['preparing_time']} minutes</td>
      <td className='p-3'>{cooking.calories} calories</td>
    </tr>
    
  );
};

export default Table2;