import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Yetkazish from '../pages/yetkazish/Yetkazish'
import Return from '../pages/return/Return'
import Kafolat from '../pages/kafolat/Kafolat'
import Contact from '../pages/contact/Contact'
import Blog from '../pages/blog/Blog'
import Catalog from '../pages/catalog/Catalog'
import Errorlar from '../pages/errorlar/Errorlar'
import Detail from '../pages/detail/Detail'
import Layout from '../pages/layout/Layout'
import Wishlist from '../pages/wishlist/Wishlist'
import Cards from '../pages/cards/Cards'
import Admin from '../pages/admin/Admin'
import Create from '../pages/admin/create/Create'
import Manage from '../pages/admin/manage/Manage'



const Routesone = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/yetkazish' element={<Yetkazish />} />
          <Route path='/return' element={<Return />} />
          <Route path='/kafolat' element={<Kafolat />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/product/:id' element={<Detail />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cards' element={<Cards />} />
        </Route>
        <Route path='*' element={<Errorlar />} />
        <Route path='/admin' element={<Admin />} >
          <Route path='create' element={<Create />} />
          <Route path='manage' element={<Manage />} />
        </Route>
      </Routes>



    </>
  )
}

export default Routesone