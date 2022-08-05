import React from "react";
import products from '../../products.json'
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';

function ProductItemCard(props) {

    

    return (
  
        <Card style={{ width: '18rem' }}>
            <Link to={`/products/${props.name}`}>
          <Card.Img className='' alt={props.name} src={props.image} />
          </Link>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.price}
            </Card.Text>
          </Card.Body>
        </Card>
    );
  }

  function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
  }
  
  function ProductItem () {  
    return (
    <>
    <div>
    </div>
    <h1>Tops</h1>
  
      <Wrapper>
  
        {products.map((products) => (
          <ProductItemCard 
          name={products.name}
          key={products.id}
          image={products.image}
          price={products.price}
          />
        ))}
      </Wrapper>
    </>
    
    );
  }


  export default ProductItem;