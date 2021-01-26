import React from 'react';
import { Card } from 'react-bootstrap';
// import products from '../products';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} varient='top' />
      </a>
    </Card>
  );
};

export default Product;
