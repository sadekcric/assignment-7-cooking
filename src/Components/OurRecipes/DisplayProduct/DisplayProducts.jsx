
import PropTypes from 'prop-types';
import SingleProduct from './SingleProduct';
import AddInCart from '../CartProduct/AddInCart';
import { useEffect, useState } from 'react';

const DisplayProducts = () => {

  const [cookItems, setCookItems]=useState([])

  // add to Want to cook
  const handleWantCook = (item) => {
    const filtered = cookItems.find(itm => itm['recipe_id'] === item['recipe_id'])

    if(!filtered){
      setCookItems([...cookItems, item])
    }
    
  }


 

  


  return (
    <div className='flex flex-col lg:flex-row gap-5'>
      <SingleProduct handleWantCook={handleWantCook}/>
      <AddInCart cookItems={cookItems} setCookItems={setCookItems} />
    </div>
  );
};

DisplayProducts.propTypes = {
  
};

export default DisplayProducts;