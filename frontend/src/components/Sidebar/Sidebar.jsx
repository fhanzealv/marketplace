import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFire, faHouse, faStar } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
  return (
    <>

    
    <div className='sidebar overflow-hidden bg-white  relative flex flex-col justify-between'>
                
    <div className='side__nav' id='sideLinks' >

                <button className='flex py-2 hover:bg-blue-400 w-full'>
                <div className='logo px-3'>
                <FontAwesomeIcon icon={faStar}  className='w-12'/>
                </div>

                <div className='text-left w-[15rem] side__links '>Featured
                    </div>
                </button>

                <button className='flex  py-2 hover:bg-blue-400 w-full'>
                <div className='logo relative px-3 '>
                <FontAwesomeIcon icon={faFire} className='w-12' />
                </div>

                <div className='text-left w-[15rem] side__links md'>Best Selling
                    </div>
                </button>

        </div>



      <div className='side__footer p-5 min-h-60 '>
        <div className='credit flex gap-2'>
          
         <span className=''>made with ❤️</span> and <img src='../../src/assets/react.svg' className='w-5' />
        </div>
      
      
      </div>

     </div>


    </>
  )
}

export default Sidebar