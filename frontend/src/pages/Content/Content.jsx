import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Test from '../../assets/DLfhanze.png'
import all_product from '../../AssetsEcom/all_product'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <section className='sec__wrapper mt-10 w-full px-8 overflow-auto'>

        <div className='w-full h-8 relative flex items-center justify-between '>
          <p className='text-md'>New Launch</p>
          <div className='flex justify-center items-center w-8 h-8 border border-black rounded-full'>
          <FontAwesomeIcon icon={faArrowRight} className='' />
          </div>
        </div>


      <div className='card__container gap-4 relative' >
     
      {all_product.map((item,i) => {
          return <>
 <Link to={`/product/${item.id}`}>
        <div className='card  '>
          <div className="card-top relative">
                   <img src={item.image} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom relative py-4'>
            <a href='' className='hover:text-blue-300'>

          <div className='flex items-center gap-1'>
            <h2 className='text-xl font-semibold'>

            {item.name}
            </h2>
            <span className='border rounded-md bg-green-300 p-1 text-white font-semibold  '>Status: Ready</span>
            </div>
 <p className='card__desc mb-4 '>{item.name}</p>
       
          </a>
          </div>
        </div>
        </Link>
        {/* <div className='card  '>
          <div className="card-top relative">
                   <img src='../../src/assets/download.jpeg' className='object-cover bg-center w-full'/>
          </div>
          <div className='card-bottom py-4 ' href=''>

          <div className='flex items-center gap-1 '>
            <h2 className='text-xl font-semibold'>

            Akun Growtopia
            </h2>
            <span className='border rounded-md bg-red-300 p-1 text-white font-semibold  '>Status: Sold</span>
            </div>          <span className=''>Lorem ipsum dolor sit amet.</span>
          
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src='../../src/assets/download.jpeg' className='object-cover bg-center w-full'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src='../../src/assets/download.jpeg' className='object-cover bg-center w-full'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src='../../src/assets/download.jpeg' className='object-cover bg-center w-full'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className='card  '>
          <div className="card-top relative">
                   <img src={Test} className='object-cover bg-center'/>
          </div>
          <div className='card-bottom py-4'>

          <h2 className='text-xl font-semibold'>Diamond Lock</h2>
          <span className=''>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      
      </div> */}
    </>
    })}
      </div>
    </section>
  )
}

export default Content