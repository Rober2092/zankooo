import React from 'react';
import WomensSubcategoryMenu from '../components/WomensSubcategoryMenu';
import SubCategoryMenu from '../components/SubCategoryMenu';
import ProductList from '../components/ProductList';

const ShopWomens = () => {
    return (
      <main>
        <h2>Shop Womens</h2>
        {/* <a>Tops</a>
        <a>Dresses</a>
        <a>Pants</a>
        <a>Skirts</a>
        <a>Shoes</a>
        <a>Swimwear</a>
        <a>Accessories</a> */}
        < WomensSubcategoryMenu />
        < ProductList />

        
      </main>
    );
  };
  
  export default ShopWomens;