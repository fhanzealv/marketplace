import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom';
// import ProductDisplay from '../ProductDisplay/ProductDisplay';
// import Breadcrum from '../../components/Breadcrum/Breadcrum';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
        {product.name}
        <img src={product.image} alt='' />
    </div>
  )
}

export default Product