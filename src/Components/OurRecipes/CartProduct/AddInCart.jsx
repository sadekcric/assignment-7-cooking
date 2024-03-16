import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table1 from './Table1';
import Table2 from './Table2';

const AddInCart = ({cookItems,setCookItems}) => {

  const [currentCooking, setCurrentCooking] = useState([])
  const [totalTime, SetTotalTime] = useState(0);
  const [totalCal, SetTotalCal] = useState(0);
  




   // add to Currently cooking: clicking Preparing btn
   const handlePreparingBtn = (id) =>{
    SetTotalTime(totalTime+id['preparing_time'])
    SetTotalCal(totalCal + id['calories'])
    setCurrentCooking([...currentCooking,id ])
    
    const remainItems = cookItems.filter(itm => itm['recipe_id']!==id['recipe_id'])

    if(remainItems){
      
      setCookItems(remainItems)
    }
  }

  



  return (
    <div className='flex-1'>
      <div className='border-2 border-slate-200 rounded-xl px-2 py-5'>


        {/* Want to cook */}
        <div className='w-4/5 mx-auto'>

          <h3 className='text-2xl lg:text-3xl font-bold text-center mb-2'>Want to cook: {cookItems.length}</h3>
          
          <div className='border-b-2 border-slate-200'></div>
        </div>

        <table className='text-lg mt-5 text-center mb-10 mx-auto'>
          <thead>
            <tr>
              <th className='p-3 hidden lg:block'></th>
              <th className='p-3'>Name</th>
              <th className='p-3' >Time</th>
              <th className='p-3'>Calories</th>
              <th className='p-3'></th>
            </tr>
          </thead>
        {/* Want to cook Table */}

        <tbody>
        {
            cookItems.map((item, idx) => <Table1 key={item['recipe_id']} item={item} index={idx} handlePreparingBtn={handlePreparingBtn} />)
        }
        </tbody>
        
        </table>


        {/* Currently cooking */}
        <div className='w-4/5 mx-auto'>

          <h3 className='text-2xl lg:text-3xl font-bold text-center mb-2'>Currently cooking: {currentCooking.length}</h3>
          
          <div className='border-b-2 border-slate-200'></div>
        </div>


        {/* Currently cooking table*/}
        <table className='text-lg mt-5 mb-10 mx-auto'>
          <thead>
            <tr>
              <th className='p-3'></th>
              <th className='p-3'>Name</th>
              <th className='p-3'>Time</th>
              <th className='p-3'>Calories</th>
            </tr>
          </thead>

          <tbody>
          {
            currentCooking.map((cooking,idx)=><Table2 key={idx} cooking={cooking} index={idx} />)
          }
          </tbody>

          <tfoot>
            <tr>
              <th className='p-3'></th>
              <th className='p-3'>Total:</th>
              <th className='p-3'>{totalTime} minutes</th>
              <th className='p-3'>{totalCal} Calories</th>
            </tr>
          </tfoot>

          
          
        </table>

      </div>
      
    </div>
  );
};

AddInCart.propTypes = {
  cookItems:PropTypes.array,
  setCookItems:PropTypes.object
};

export default AddInCart;