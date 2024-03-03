import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Content/Content'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './pages/Content/Content'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='flex gap-5'>
      <Sidebar />
      <Content />
    </div>
    </>
  )
}

export default App