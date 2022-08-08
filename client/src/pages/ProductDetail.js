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




                    <div key={product._id} className="card mx-auto col-md-5 col-10 mt-5 pt-4">
                        <div className="d-flex sale ">
                            <div className="btn">Add To Shopping Bag</div>
                            <div className="btn">Remove From Shopping Bag</div>
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