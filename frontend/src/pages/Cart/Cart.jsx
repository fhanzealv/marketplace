import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Cart = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div>
        {all_product.map((e) => {
            if(cartItems[e.id]>0)
            {
                return <div>
                        <img src={e.image} />
                         <p>{e.name}</p>   
                    </div>
            }
        })}
    </div>
  )
}

export default Cart