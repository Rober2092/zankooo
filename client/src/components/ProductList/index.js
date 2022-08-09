import React, { useEffect} from "react";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import Cart from "../Cart";




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

    if (window.location.pathname === "/shopmens/tops")

    return state.products.filter(
        (product) => product.department === "mens" && product.subcategory === "tops"
    );

    if (window.location.pathname === "/shopmens/pants")

    return state.products.filter(
        (product) => product.department === "mens" && product.subcategory === "pants"
    );

    if (window.location.pathname === "/shopmens/shoes")

    return state.products.filter(
        (product) => product.department === "mens" && product.subcategory === "shoes"
    );

    if (window.location.pathname === "/shopmens/accessories")

    return state.products.filter(
        (product) => product.department === "mens" && product.subcategory === "accessories"
    );

    if (window.location.pathname === "/shopwomens")

    return state.products.filter(
        (product) => product.department === "womens"
    );

    if (window.location.pathname === "/shopwomens/tops")

    return state.products.filter(
        (product) => product.department === "womens" && product.subcategory === "tops"
    );

    if (window.location.pathname === "/shopwomens/dresses")

    return state.products.filter(
        (product) => product.department === "womens" && product.subcategory === "dresses"
    );

    if (window.location.pathname === "/shopwomens/pants")

    return state.products.filter(
        (product) => product.department === "womens" && product.subcategory === "pants"
    );

    if (window.location.pathname === "/shopwomens/skirts")

    return state.products.filter(
        (product) => product.department === "womens" && product.subcategory === "skirts"
    );

    if (window.location.pathname === "/shopwomens/shoes")

    return state.products.filter(
        (product) => product.department === "womens" && product.subcategory === "shoes"
    );

    if (window.location.pathname === "/shopwomens/swimwear")

    return state.products.filter(
        (product) => product.department === "womens" && product.subcategory === "swimwear"
    );

    if (window.location.pathname === "/shopwomens/accessories")

    return state.products.filter(
        (product) => product.department === "womens" && product.subcategory === "accessories"
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
        )}
        {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
        <Cart />
      </div>

    );
}
  
  export default ProductList;