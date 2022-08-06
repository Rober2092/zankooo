import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';

import { Link } from "react-router-dom";


function CategoryMenu() {

  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
    }
  }, [categoryData, dispatch]);

  return (
    <main>
            <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button

        >
          {item.name}
        </button>
      ))}
      <ul className="flex-row">
          <li className="mx-1">
            <Link to="/shopmens">
              Shop Mens
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/shopwomens">
              Shop Womens
            </Link>
          </li>
        </ul>
    </main>
  );
};

export default CategoryMenu;