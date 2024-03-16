
import PropTypes from 'prop-types';
import SingleProduct from './SingleProduct';
import AddInCart from '../CartProduct/AddInCart';
import { useEffect, useState } from 'react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayProducts = () => {

  const [cookItems, setCookItems]=useState([])

  // add to Want to cook
  const handleWantCook = (item) => {
    const filtered = cookItems.find(itm => itm['recipe_id'] === item['recipe_id'])

    if(!filtered){
      setCookItems([...cookItems, item])
    }else{

      toast("Already Exist.")
    }
    
  }


 

  


  return (
    <div className='flex flex-col lg:flex-row gap-5'>
      <SingleProduct handleWantCook={handleWantCook}/>
      <AddInCart cookItems={cookItems} setCookItems={setCookItems} />


      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

DisplayProducts.propTypes = {
  
};

export default DisplayProducts;