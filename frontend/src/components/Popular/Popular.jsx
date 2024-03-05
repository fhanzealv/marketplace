import React from 'react'
import data_product from '../../AssetsEcom/data'
import Item from '../Item/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Popular = () => {
  return (
    <section className='sec__wrapper mt-10 w-full px-8 overflow-auto'>

    <div className='w-full h-8 relative flex items-center justify-between '>
      <p className='text-md'>New Launch</p>
      <div className='flex justify-center items-center w-8 h-8 border border-black rounded-full'>
      <FontAwesomeIcon icon={faArrowRight} className='' />
      </div>
    </div>

        <div className="popular-item card__container">
            {data_product.map((item,i) =>{
                return <>
                <Item key={item.id} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
                
                </>
            } )}
    </div>
    </section>
  
    )
}

export default Popular