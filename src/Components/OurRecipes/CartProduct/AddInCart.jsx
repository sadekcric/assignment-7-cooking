import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table1 from './Table1';
import Table2 from './Table2';

const AddInCart = ({cookItems,setCookItems}) => {

  const [currentCooking, setCurrentCooking] = useState([])

   // add to Currently cooking: clicking Preparing btn
   const handlePreparingBtn = (id) =>{
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
          <tr>
            <th className='p-3 hidden lg:block'></th>
            <th className='p-3'>Name</th>
            <th className='p-3' >Time</th>
            <th className='p-3'>Calories</th>
            <th className='p-3'></th>
          </tr>
        {/* Want to cook Table */}

        {
            cookItems.map((item, idx) => <Table1 key={item['recipe_id']} item={item} index={idx} handlePreparingBtn={handlePreparingBtn} />)
        }
        {/* <Table1 cookItems ={cookItems} /> */}

        </table>


        {/* Currently cooking */}
        <div className='w-4/5 mx-auto'>

          <h3 className='text-2xl lg:text-3xl font-bold text-center mb-2'>Currently cooking: {currentCooking.length}</h3>
          
          <div className='border-b-2 border-slate-200'></div>
        </div>


        {/* Currently cooking table*/}
        <table className='text-lg mt-5 mb-10 mx-auto'>
          <tr>
            <th className='p-3'></th>
            <th className='p-3'>Name</th>
            <th className='p-3'>Time</th>
            <th className='p-3'>Calories</th>
          </tr>

          {
            currentCooking.map((cooking,idx)=><Table2 key={idx} cooking={cooking} index={idx} />)
          }

          
          
        </table>

      </div>
      
    </div>
  );
};

AddInCart.propTypes = {
  
};

export default AddInCart;