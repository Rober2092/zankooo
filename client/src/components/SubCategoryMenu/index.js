import React, { useState } from 'react';
import ProductList from '../ProductList';

function SubCategoryMenu() {

    const [currentProductList, setCurrentProductList] = useState()
    return (
        <main className='subcats'>
            <ul>
                <li>
                    <button onClick={() => setCurrentProductList(<ProductList />)}>Tops</button>
                </li>
                <li>
                    <button>Bottoms</button>
                </li>
                <li>
                    <button>Shoes</button>
                </li>
                <li>
                    <button>Accessories</button>
                </li>
            </ul>
            {currentProductList && <ProductList />}
            

        </main>
    );
  };
  
  export default SubCategoryMenu;