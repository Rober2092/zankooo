import React from 'react';
import MensSubcategoryMenu from '../components/MensSubcategoryMenu';
import ProductItem from '../components/ProductList';
import ProductList from '../components/ProductList';

import SubCategoryMenu from '../components/SubCategoryMenu';

const ShopMensTops = () => {
    return (
      <main>
        <h2>Shop Mens Tops</h2>
        <MensSubcategoryMenu />
        < ProductList />
           
        
      </main>
    );
  };
  
  export default ShopMensTops;