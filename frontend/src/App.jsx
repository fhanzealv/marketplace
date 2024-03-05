import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Content/Content'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './pages/Content/Content'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Trending from './pages/Trending/Trending'
import Popular from './components/Popular/Popular'
import ShopCategory from './pages/ShopCategory/ShopCategory'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='flex h-[calc(100vh-93px)] overflow-hidden '>
      <Router>
      <Sidebar />
        <Routes>
          <Route path='/' element={<Content /> } />
          <Route path='/trending' element={<Popular  />} />
          <Route path='/mens' element={<ShopCategory category="men"/>}/>
          {/* <Route path='/product' element={<Product />}>
            <Route path=':productID' element={<Product />} />
          </Route> */}
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App