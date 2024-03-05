import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <section className='sec__wrapper mt-10 w-full px-8 overflow-auto'>

        <div className='item'>
            <Link to={`/product/${props.id}`}>
            <img src={props.img} alt='' /></Link>
            <p>{props.name}</p>
            <div className='item-prices'>
                    <div className='item-price-new'>
                        {props.new_price}
                    </div>
                    <div className='item-price_old'>
                        {props.old_price}
                    </div>
                </div> 
        </div>
        </section>
    )
}

export default Item