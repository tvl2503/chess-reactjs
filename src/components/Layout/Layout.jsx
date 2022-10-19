import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
import Board from '../../pages/Board'
import Home from '../../pages/Home'
import Profile from '../../pages/Profile'
import Rank from '../../pages/Rank'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
        <div className="main">
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "board" element = {<Board />} />
            <Route path = "/rank" element = {<Rank />} />
            <Route path = "/profile" element = {<Profile />} />
            <Route path = "/auth" >
              <Route index = {true} element = {<Login />} />
              <Route path = "login" element = {<Login />} />
              <Route path = "register" element = {<Register />} />
            </Route>
        </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  )
}

export default Layout