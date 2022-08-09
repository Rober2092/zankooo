import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
// import products from '../products.json'
import ProductItem from '../components/ProductItem';
import { useStoreContext } from '../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import Cart from '../components/Cart';
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_PRODUCTS,
  } from '../utils/actions';



function ProductDetailInfo() {

    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

    const { products, cart } = state;

    const [currentProduct, setCurrentProduct] = useState({});
  
    const { loading, data } = useQuery(QUERY_PRODUCTS);
  
    useEffect(() => {
            // already in global store
    if (products.length) {
        setCurrentProduct(products.find((product) => product._id === id));
      }
      // retrieved from server
      else if (data) {
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

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
      
        if (itemInCart) {
          dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: id,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
          });
        } else {
          dispatch({
            type: ADD_TO_CART,
            product: { ...currentProduct, purchaseQuantity: 1 }
          });
        }
      };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id
        });
    };

    return (
        <>
        
            <div className="container my-1">

                <Link to="/">← Back to Products</Link>
                {filterProducts().map((product) => (




                    <div key={product._id} className="card mx-auto col-md-5 col-10 mt-5 pt-4">
                        <div className="d-flex sale ">
                            <div className="btn" onClick={addToCart}>Add To Shopping Bag</div>
                            <button className="btn" disabled={!cart.find(p => p._id === currentProduct._id)} 
  onClick={removeFromCart}>Remove From Shopping Bag</button>
                        </div>
                        <img className='mx-auto img-thumbnail'
                            src={product.image}
                            width="auto" height="auto" />
                        <div className="card-body text-center mx-auto">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">${product.price}</p>
                        </div>
                        <p className='mx-3'>{product.description}</p>
                    </div>

                ))}
            </div>
            <Cart />
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