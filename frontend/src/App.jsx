import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Content/Content'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './pages/Content/Content'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Trending from './pages/Trending/Trending'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='flex h-[calc(100vh-91px)] overflow-hidden '>
      <Router>
      <Sidebar />
        <Routes>
          <Route path='/' element={<Content /> } />
          <Route path='/trending' element={<Trending />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App