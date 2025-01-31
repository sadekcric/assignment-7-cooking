import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCartDesign from './ProductCartDesign';

const SingleProduct = ({handleWantCook}) => {

  const [items, setItems] = useState([])


  useEffect(() => {

    (async()=>{
      const res = await fetch('/recipes.json');
      const data= await res.json()
      setItems(data);
    })()

  },[])

  






  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-2/3'>
      {
        items.map((item, idx) =><ProductCartDesign key={item['recipe_id']} item = {item} handleWantCook = {handleWantCook} />)
      }
    </div>
  );
};

SingleProduct.propTypes = {
  
};

export default SingleProduct;