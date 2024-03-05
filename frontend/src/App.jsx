import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Content/Content'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './pages/Content/Content'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Trending from './pages/Trending/Trending'
import Popular from './components/Popular/Popular'
import ShopCategory from './pages/ShopCategory/ShopCategory'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <>
      <Router>
    <Navbar />
    <div className='flex h-[calc(100vh-98px)] overflow-hidden '>
      <Sidebar />
        <Routes>
          <Route path='/' element={<Content /> } />
          <Route path='/trending' element={<Popular  />} />
          <Route path='/mens' element={<ShopCategory category="men"/>}/>
          <Route path='/product/' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
      </Router>
    </>
  )
}

export default App