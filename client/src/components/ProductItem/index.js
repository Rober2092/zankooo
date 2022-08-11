import React, { useEffect } from "react";
// import products from '../../products.json'
import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import Card from 'react-bootstrap/Card';
import { UPDATE_ALL_PRODUCTS } from '../../utils/actions';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';

function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  return (
    <Card className="product-card" style={{ width: '18rem' }}>
      <Link to={`/${_id}`}>
        <Card.Img className='' alt={name} src={image} />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ color: 'black' }}>
          {price}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

// function ProductItemCard(props) {

    

//     return (
  
//         <Card style={{ width: '18rem' }}>
//             <Link to={`/products/${props.name}`}>
//           <Card.Img className='' alt={props.name} src={props.image} />
//           </Link>
//           <Card.Body>
//             <Card.Title>{props.name}</Card.Title>
//             <Card.Text>
//               {props.price}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//     );
//   }

  // function Wrapper(props) {
  //   return <div className="wrapper">{props.children}</div>;
  // }
  
  // function ProductItem (item) {  
  //   const [state, dispatch] = useStoreContext();

  //   const { products } = state

  //   const { data: productsData } = useQuery(QUERY_ALL_PRODUCTS);

  //   const {
  //     image,
  //     name,
  //     _id,
  //     price,
  //     quantity
  //   } = item;

  //   console.log(products)

  //   useEffect(() => {
  //     // if categoryData exists or has changed from the response of useQuery, then run dispatch()
  //     if (productsData) {
  //       // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
  //       dispatch({
  //         type: UPDATE_ALL_PRODUCTS,
  //         products: productsData.products
  //       });
  //     }
  //   }, [productsData, dispatch]);

  //   return (
  //     <Card style={{ width: '18rem' }}>
  //     <Link to={`/products/${name}`}>
  //   <Card.Img className='' alt={name} src={image} />
  //   </Link>
  //   <Card.Body>
  //     <Card.Title>{name}</Card.Title>
  //     <Card.Text>
  //       {price}
  //     </Card.Text>
  //   </Card.Body>
  // </Card>
  //   // <>
  //   // <div>
  //   // </div>
  //   // <h1>Tops</h1>
  
  //   //   <Wrapper>
  
  //   //     {products.map((products) => (
  //   //       <ProductItemCard 
  //   //       name={products.name}
  //   //       key={products.id}
  //   //       image={products.image}
  //   //       price={products.price}
  //   //       />
  //   //     ))}
  //   //   </Wrapper>
  //   // </>
    
  //   );
  // }


  export default ProductItem;