import React from 'react';
import ProductList from '../components/ProductList';
import SubCategoryMenu from '../components/SubCategoryMenu';

const ShopMens = () => {
    return (
      <main>
        <h2>Shop Mens</h2>
            <SubCategoryMenu />
            <ProductList />
        
      </main>
    );
  };
  
  export default ShopMens;