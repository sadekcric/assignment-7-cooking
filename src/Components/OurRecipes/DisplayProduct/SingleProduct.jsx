import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCartDesign from './ProductCartDesign';

const SingleProduct = () => {

  const [items, setItems] = useState([])


  useEffect(() => {

    (async()=>{
      const res = await fetch('../../../../public/recipes.json');
      const data= await res.json()
      setItems(data);
    })()

  },[])

  






  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-2/3'>
      {
        items.map(item =><ProductCartDesign key = {item['recipe_id']} item = {item} />)
      }
    </div>
  );
};

SingleProduct.propTypes = {
  
};

export default SingleProduct;