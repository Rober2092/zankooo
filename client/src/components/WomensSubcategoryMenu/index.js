import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_WOMENSSUBCATEGORIES } from '../../utils/actions';
import { QUERY_WOMENSSUBCATEGORIES } from '../../utils/queries';
import { Link } from 'react-router-dom';




function WomensSubcategoryMenu() {
//     const [state, dispatch] = useStoreContext();

// const { womenssubcategories } = state;

// const { data: womensSubcategoryData } = useQuery(QUERY_WOMENSSUBCATEGORIES);

// useEffect(() => {
//     // if categoryData exists or has changed from the response of useQuery, then run dispatch()
//     if (womensSubcategoryData) {
//       // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
//       dispatch({
//         type: UPDATE_WOMENSSUBCATEGORIES,
//         womenssubcategories: womensSubcategoryData.womenssubcategories
//       });
//     }
//   }, [womensSubcategoryData, dispatch]);

    return (
        <main>

            {/* {womenssubcategories.map((item) => (
                <button
                    key={item._id}
                >
                    {item.name}
                </button>
            ))}
        </main> */}
                <ul>
                <li>
                 <Link to="/shopwomens/tops">
                    Tops
                  </Link>
                </li>
                <li>
                <Link to="/shopwomens/dresses">
                    Dresses
                  </Link>
                </li>
                <li>
                <Link to="/shopwomens/pants">
                    Pants
                  </Link>
                </li>
                <li>
                <Link to="/shopwomens/skirts">
                    Skirts
                  </Link>
                </li>
                <li>
                <Link to="/shopwomens/shoes">
                    Shoes
                  </Link>
                </li>
                <li>
                <Link to="/shopwomens/swimwear">
                    Swimwear
                  </Link>
                </li>
                <li>
                <Link to="/shopwomens/accessories">
                    Accessories
                  </Link>
                </li>
              </ul>
              </main>

    );
  };
  
  export default WomensSubcategoryMenu;