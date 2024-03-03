import React from 'react'
import Nav__left from '../Nav__left/Nav__left'

const Navbar = () => {
  return (
    <>
    <div className='nav-wrapper px-3 py-4 border-b'>
        <nav className='navbar flex justify-between items-center gap-5 '>
            <nav className='nav__left flex gap-4 w-[20rem] bg-slate-400'>
                <div className='hamburger'>Ham </div>
                <div className='brands'>brand Here</div>

            </nav>
            <nav className='search__bar '>search Here </nav>
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

                </div>
            </nav>
        </nav>

    </div>
 
 </>
  )
}

export default Navbar