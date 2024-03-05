import React from 'react'
import Nav__left from '../Sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faCircleUser, faSearch, faSliders } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Cart from '../../assets/cat.png'

const Navbar = () => {

   const navActive = () => {
        const sideLinks = document.querySelectorAll('.text__links');
        const sideFoot = document.querySelector('.side__footer');
        const sideNav = document.querySelector('.side__nav');
        sideLinks.forEach( (e) => {
            e.classList.toggle('text__links-active');
        });
      
        sideNav.classList.toggle('side__nav-active')
    }

  return (
    <>
    <div className='nav-wrapper px-3 py-4 border-b bg-white'>
        <nav className='navbar flex justify-between items-center gap-5 '>
            <nav className='nav__left flex items-center gap-4 w-[20rem] '>
                <button className='hamburger'><FontAwesomeIcon icon={faBars} className='h-6 w-12' onClick={navActive}/></button>

                <div className='brands px-6'>Fmarket</div>
            </nav>
            <nav className='search__bar w-[40rem] h-10 left-0 flex  items-center border rounded-full relative overflow-hidden px-4' >
                   <input type='search' placeholder='search' className='w-full border-none h-full ' />
                    <button className='flex justify-center items-center w-16 h-full bg-slate-200 right-0 absolute '>
                    <FontAwesomeIcon icon={faSearch} className=' iconn' />
                    </button>

                     </nav>
            <nav className='nav__right flex gap-4 '>
                <div className='icon__head flex items-center gap-4 max-md:hidden border-r-2 px-4'>
                    <button className=''>Premium</button>
                    <button className=''>Contact</button>

                </div>

                {/* <div className='nav__links flex items-center gap-4 '>
                    <button className=''>
                        <FontAwesomeIcon icon={faSliders} />
                    </button>


                    <button className=''>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  
                    <div className=''><FontAwesomeIcon icon={faCircleUser} className='h-7' /></div>

                </div> */}

                <div className='nav-login-cart'>
                    <button>Login</button>
                    <img src={Cart} alt='' className='w-12 h-12'/>
                    <div className="nav-cart-count">0</div>
                </div>
            </nav>
        </nav>

    </div>
 
 </>
  )
}

export default Navbar