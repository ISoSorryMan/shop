import React, { Component } from 'react'
import main_pic from '../img/header.svg'
import '../css/home.css'

export default class Home extends Component {
  render() {
    return (
      <main>
        <div className="header-text-container">
          <h1 className="header-text">Кращі комп'ютерні комплектуючі й аксесуари від експертів.</h1>
          <img src={main_pic} alt="" className="MainPic"/>
        </div>
          <div className="about-us">
            <div className="about-heading">
              <h2>Про нас</h2>
            </div>
            <div className="about-content">
              <div className='info'>
                <p>Ласкаво просимо до інтернет-магазину Комп’ютерна Всесвітня!</p>
                <p>
                  Наша місія полягає в створенні зручної платформи для шанувальників передових комп'ютерних технологій
                  та новаторів в галузі угод з комплектуючими.
                </p>
              </div>
              <div className="cards">
                <div className="card">
                  <h2>150</h2>
                  <p>експертів</p>
                </div>
                <div className="card">
                  <h2>700</h2>
                  <p>відмінних товарів</p>
                </div>
                <div className="card">
                  <h2>99</h2>
                  <p>задоволених клієнтів</p>
                </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
