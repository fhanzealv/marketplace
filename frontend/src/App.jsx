import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Nav__left from './components/Nav__left/Nav__left'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='flex'>
      <Nav__left />
      <Home />
    </div>
    </>
  )
}

export default App