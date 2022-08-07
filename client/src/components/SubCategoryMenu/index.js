import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_SUBCATEGORIES } from '../../utils/actions';
import { QUERY_SUBCATEGORIES } from '../../utils/queries';

import ProductList from '../ProductList';


function SubCategoryMenu() {
    const [state, dispatch] = useStoreContext();

const { subcategories } = state;

const { data: subcategoryData } = useQuery(QUERY_SUBCATEGORIES);

useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (subcategoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_SUBCATEGORIES,
        subcategories: subcategoryData.subcategories
      });
    }
  }, [subcategoryData, dispatch]);

    const [currentProductList, setCurrentProductList] = useState()
    return (
        <main>
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