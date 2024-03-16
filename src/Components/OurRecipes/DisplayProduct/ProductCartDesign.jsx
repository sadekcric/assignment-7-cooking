import React from 'react';
import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { FaBurn } from "react-icons/fa";
import List from './List';

const ProductCartDesign = ({item, handleWantCook}) => {

  // console.log(item);
  return (
    <div>
      <div className='p-3 border-2 border-slate-100 rounded-xl'>
        <div class="card card-compact">
        <figure><img className='h-72 w-full mb-5' src={item['recipe_image']} alt="" /></figure>


        <div class="card-body space-y-5">
            <h2 class="card-title">{item['recipe_name']}</h2>
            <p className='text-lg text-gray-500'>{item['short_description']}</p>

            <hr />

            <h6 className='text-2xl font-bold'>Ingredients: {item.ingredients.length} </h6>

            {
             item.ingredients.map((ing,idx) => <List key={idx} ing={ing} />)
            }
            {/* item.ingredients.map((ing,idx) =><li>key={idx} {ing}</li>) */}

            <hr />

            <div className='flex gap-5 items-center text-lg'>
              <div className='flex gap-2 items-center'>
              <CiClock2 />
              <p>{item['preparing_time']} minutes</p>
              </div>

              <div className='flex gap-2 items-center'>
              <FaBurn />
              <p>{item.calories} calories</p>
              </div>
            </div>


            <div class="card-actions">
              <button onClick={() => handleWantCook(item)} class="btn bg-[#0BE58A] rounded-full px-6 font-semibold">Want to Cook</button>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
};

ProductCartDesign.propTypes = {
  item:PropTypes.object
};

export default ProductCartDesign;