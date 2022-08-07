import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_WOMENSSUBCATEGORIES } from '../../utils/actions';
import { QUERY_WOMENSSUBCATEGORIES } from '../../utils/queries';




function WomensSubcategoryMenu() {
    const [state, dispatch] = useStoreContext();

const { womenssubcategories } = state;

const { data: womensSubcategoryData } = useQuery(QUERY_WOMENSSUBCATEGORIES);

useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (womensSubcategoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_WOMENSSUBCATEGORIES,
        womenssubcategories: womensSubcategoryData.womenssubcategories
      });
    }
  }, [womensSubcategoryData, dispatch]);

    return (
        <main>

            {womenssubcategories.map((item) => (
                <button
                    key={item._id}
                >
                    {item.name}
                </button>
            ))}
        </main>
    );
  };
  
  export default WomensSubcategoryMenu;