import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_MENSSUBCATEGORIES } from '../../utils/actions';
import { QUERY_MENSSUBCATEGORIES } from '../../utils/queries';




function MensSubcategoryMenu() {
    const [state, dispatch] = useStoreContext();

const { menssubcategories } = state;

const { data: mensSubcategoryData } = useQuery(QUERY_MENSSUBCATEGORIES);

useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (mensSubcategoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_MENSSUBCATEGORIES,
        menssubcategories: mensSubcategoryData.menssubcategories
      });
    }
  }, [mensSubcategoryData, dispatch]);

    return (
        <main>

            {menssubcategories.map((item) => (
                <button
                    key={item._id}
                >
                    {item.name}
                </button>
            ))}
        </main>
    );
  };
  
  export default MensSubcategoryMenu;