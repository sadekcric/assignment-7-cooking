const Table1 = ({item, index, handlePreparingBtn}) => {
  return (
        <tr className='bg-gray-100'>
          <td className='p-2 lg:p-3 hidden lg:block'>{index+1} </td>
          <td className='p-2 lg:p-3'>{item['recipe_name']}</td>
          <td className='p-2 lg:p-3'>{item['preparing_time']} minutes</td>
          <td className='p-2 lg:p-3'>{item.calories} calories</td>
          <td className='p-2 lg:p-3'>
            <button onClick={()=>handlePreparingBtn(item)} className='btn rounded-full bg-[#0BE58A] font-bold'>Preparing</button>
          </td>
        </tr>
    
  );
};



export default Table1;