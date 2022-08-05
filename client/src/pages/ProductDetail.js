import React, { useState } from 'react';
import { Link } from "react-router-dom";
import products from '../products.json'
import ProductItem from '../components/ProductItem';

function ProductDetailInfo(props) {
    console.log(props)

    return (
        <>
            <div className="container my-1">
                <Link to="/">← Back to Products</Link>

                <h2>{props.name}</h2>

                <p>{props.description}</p>

                <p>
                    <strong>Price:</strong>${props.price}{' '}
                    <button >Add to cart</button>
                    <button
                    //   disabled={!cart.find(p => p._id === currentItem._id)}
                    //   onClick={removeFromCart}
                    >
                        Remove from Cart
                    </button>
                </p>
                
                <img
                    src={props.image}
                    alt={props.name}
                />
            </div>
        </>
    );


}

function Wrapper(props) {
    return <div>{props.children}</div>;
}

function ProductDetail() {

    return (

        <Wrapper>

            {products.map((products) => (

                <ProductDetailInfo
                    name={products.name}
                    key={products.id}
                    image={products.image}
                    price={products.price}
                />
            ))}
        </Wrapper>
    )
};









export default ProductDetail;