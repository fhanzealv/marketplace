import React from 'react'
import Nav__left from '../Sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = () => {

   const navActive = () => {
        const sideLinks = document.querySelectorAll('.side__links');
        const sideFoot = document.querySelector('.side__footer')
        sideLinks.forEach( (e) => {
            e.classList.toggle('hidden');
        });
        sideFoot.classList.toggle('hidden');
    }

  return (
    <>
    <div className='nav-wrapper px-3 py-4 border-b bg-white'>
        <nav className='navbar flex justify-between items-center gap-5 '>
            <nav className='nav__left flex items-center gap-4 w-[20rem] '>
                <button className='hamburger'><FontAwesomeIcon icon={faBars} className='h-6 w-12' onClick={navActive}/></button>
                <div className='brands '>Fmarket</div>

            </nav>
            <nav className='search__bar w-[50rem] h-10 left-0 flex  items-center border rounded-full'>
                <p className='px-4'>
                    search Here
                    </p>
                     </nav>
            <nav className='nav__right flex gap-4'>
                <div className='icon__head flex items-center gap-4'>
                    <button className=''>Logo 1</button>
                    <button className=''>Logo 1</button>
                    <button className=''>Logo 1</button>
                    <button className=''>Separator</button>

                </div>

                <div className='apps__heads flex items-center gap-4'>
                    <div className=''>Apps here</div>
                    <div className=''>Premium</div>
                    <div className=''><FontAwesomeIcon icon={faCircleUser} className='h-7' /></div>

                </div>
            </nav>
        </nav>

    </div>
 
 </>
  )
}

export default Navbar