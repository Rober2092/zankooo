import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import products from '../products.json'
import ProductItem from '../components/ProductItem';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';



function ProductDetailInfo() {

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

        const pathname = window.location.pathname
        console.log(pathname)
        const paths = pathname.split('/')
        console.log(paths)
        const detailID = paths[1]
        console.log(detailID)

        return state.products.filter(
            (product) => product._id == detailID
          );
    }

    console.log(filterProducts)

    return (
        <>
            <div className="container my-1">
                <Link to="/">← Back to Products</Link>
                {filterProducts().map((product) => (
                <div key={product._id}>
                    
                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <p>
                    <strong>Price:</strong>${product.price}{' '}
                    <button >Add to cart</button>
                    <button
                    //   disabled={!cart.find(p => p._id === currentItem._id)}
                    //   onClick={removeFromCart}
                    >
                        Remove from Cart
                    </button>
                </p>
                
                <img
                    src={product.image}
                    alt={product.name}
                />

                </div> 
                ))}
            </div>
            
        </>
    );


}

// function Wrapper(products) {
//     return <div>{products.children}</div>;
// }

// function ProductDetail() {

//     return (

//         <Wrapper>

            

//                 <ProductDetailInfo
//                     // name={product.name}
//                     // key={product.id}
//                     // image={product.image}
//                     // price={product.price}
//                 />
            
//         </Wrapper>
//     )
// };









export default ProductDetailInfo;