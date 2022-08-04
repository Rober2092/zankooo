import React, { useState } from 'react';



function ProductDetail() {


//   return (
//     <>
//       {currentProduct ? (
//         <div className="container my-1">
//           <Link to="/">← Back to Products</Link>

//           <h2>{currentProduct.name}</h2>

//           <p>{currentProduct.description}</p>

//           <p>
//             <strong>Price:</strong>${currentProduct.price}{' '}
//             <button onClick={addToCart}>Add to cart</button>
//             <button
//               disabled={!cart.find(p => p._id === currentProduct._id)}
//               onClick={removeFromCart}
//             >
//               Remove from Cart
//             </button>
//           </p>

//           <img
//             src={`/images/${currentProduct.image}`}
//             alt={currentProduct.name}
//           />
//         </div>
//       ) : null}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//       <Cart />
//     </>
//   );
}

export default ProductDetail;