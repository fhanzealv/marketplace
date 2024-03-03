import React from 'react'

const Nav__left = () => {
  return (
    <>
    <div className='nav__left-wrapper px-3'>

    
    <div className='w-[20rem] bg-slate-400 flex flex-col items-start gap-4'>
            <button className='flex gap-4'>
                <div className='logo px-3'>
                    
                </div>

                <span className=''>
                    Utama
                    </span>
                </button>
            
            
        <button className='utama'>Anime</button>
        <button className='utama'>Trending</button>
        <button className='utama'>Kategori</button>
    </div>

    </div>
    </>
  )
}

export default Nav__left