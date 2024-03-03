import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFire, faHouse, faStar } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
  return (
    <>

    
    <div className='sidebar overflow-hidden bg-white h-[calc(100vh-75px)] relative flex flex-col justify-between'>
                
    <div className='side__nav' id='sideLinks' >

                <button className='flex gap-4 py-2 hover:bg-blue-400 w-full'>
                <div className='logo relative px-3'>
                <FontAwesomeIcon icon={faStar}  className='w-12'/>
                </div>

                <div className='text-left w-[15rem] side__links px-4'>Featured
                    </div>
                </button>

                <button className='flex gap-4 py-2 hover:bg-blue-400 w-full'>
                <div className='logo relative px-3 '>
                <FontAwesomeIcon icon={faFire} className='w-12' />
                </div>

                <div className='text-left w-[15rem] side__links px-4'>Best Selling
                    </div>
                </button>

        </div>



      <div className='side__footer p-5 min-h-60 '>
        <p className=''> Made with ❤️ and React</p>
      </div>

     </div>


    </>
  )
}

export default Sidebar