import { useReducer } from 'react';
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_SUBCATEGORIES,
    UPDATE_MENSSUBCATEGORIES
  } from "./actions";
  
  export const reducer = (state, action) => {
    switch (action.type) {
      // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };

        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        case UPDATE_SUBCATEGORIES:
          return {
            ...state,
            subcategories: [...action.subcategories]
          };

          case UPDATE_MENSSUBCATEGORIES:
            return {
              ...state,
              menssubcategories: [...action.menssubcategories]
            };

        // if it's none of these actions, do not update state at all and keep things the same!
        default:
            return state;
    }
  };


  export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }