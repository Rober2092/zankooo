import React, { useEffect} from "react";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';




import ProductItem from "../ProductItem";





function ProductList() {
    const [state, dispatch] = useStoreContext();

    const { products } = state;
  
    const { loading, data } = useQuery(QUERY_PRODUCTS);
  
    useEffect(() => {
      if (data) {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: data.products,
        });
    }
}, [data, loading, dispatch]);

console.log(products)

function filterProducts() {
    if (window.location.pathname === "/shopmens")
    // if (products) {
    //   return state.products;
    // }

    // const stateOfChoice = "womens"

    // console.log(window.location)

    return state.products.filter(
      (product) => product.department === "mens"
    );

    if (window.location.pathname === "/shopwomens")

    return state.products.filter(
        (product) => product.department === "womens"
    );
  }

    return (
        <div className="my-2">
        <h2>Our Products:</h2>
        {state.products.length ? (
          <div className="flex-row">
            {filterProducts().map((product) => (
  
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
              ))}
          </div>
        ) : (
          <h3>You haven't added any products yet!</h3>
        )/* )} */}
        {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
      </div>

    );
}
  
  export default ProductList;