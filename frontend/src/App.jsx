import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='flex gap-5'>
      <Sidebar />
      <Home />
    </div>
    </>
  )
}

export default App