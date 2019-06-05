import React from 'react';


 const Product = props => (
    <li key = {props.id}>
      <img src={props.image} alt="img"/>   
      <span>{props.name}</span>
      <span className="phone">price:  ${props.price}</span>
    </li>     
  );
 
    
export default Product;

