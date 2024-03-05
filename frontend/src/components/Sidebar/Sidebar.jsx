import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFire, faHouse, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

import Cart from '../../assets/cat.png'


const Sidebar = () => {
  const [menu, setMenu] = useState("featured");

  return (
    <>

    
    <div className='sidebar overflow-hidden bg-white  relative flex flex-col justify-between'>
                
    <ul className='side__nav' id='side__nav' >
      <Link to='/'><li onClick={() => {setMenu('featured')}}  className={`side__links ${menu === "featured" ? "side-active" : ""}` }><FontAwesomeIcon icon={faFire} className='w-12' />
      <span className='text__links'>Featured</span></li></Link>

      <Link to='/trending'><li onClick={() => {setMenu('trending')}} className={`side__links ${menu === "trending" ? "side-active" : ""}` }><FontAwesomeIcon icon={faStar} className='w-12' /><span className='text__links'>Trending</span>
            </li></Link>
                
      <Link to='/mens'><li onClick={() => {setMenu('mens')}} className={`side__links ${menu === "mens" ? "side-active" : ""}` }><FontAwesomeIcon icon={faStar} className='w-12' /><span className='text__links'>Trending</span>
            </li></Link>
                {/* <button className='flex  py-2 hover:bg-blue-400 w-full'>
                <div className='logo relative px-3 '>
                <FontAwesomeIcon icon={faFire} className='w-12' />
                </div>

                <div className='text-left w-[15rem] side__links md'>Best Selling
                    </div>
                </button> */}

        </ul>



      {/* <div className='side__footer p-5 min-h-60 '>
        <div className='credit flex gap-2'>
          
         <span className=''>made with ❤️</span> and <img src='../../src/assets/react.svg' className='w-5' />
        </div>
      
      
      </div> */}

     </div>


    </>
  )
}

export default Sidebar