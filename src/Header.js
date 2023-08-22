import React, { Component } from 'react';
import search from './img/search.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './css/header.css'

import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Account from './Pages/Account'
import Shop from './Pages/Shop'

export default class Header extends Component {
  render() {
    return (
      <>
        <div>
          <header>
            <div className="container borderXwidth">
              <a href="/">Головна</a>
              <a href="/shop">Товари</a>
              <a href="/blog">Блог</a>
              <a href="/account">Аккаунт</a>
              <input type="search" className="search"/>
              <a href="/"><img src={search} alt="" className="searchPic" /></a>
            </div>
          </header>
        </div>

        <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Home/>} />
            <Route exact path="/shop" element={<Shop/>} />
            <Route exact path="/blog" element={<Blog/>} />
            <Route exact path="/account" element={<Account/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
