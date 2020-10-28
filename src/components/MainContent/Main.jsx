import React from 'react';
import { MainItems } from './MainItems';
import Hero from '../Hero/Hero';

const Main = () => {
  return (
    <>
      <Hero />
      <div className="main">
        <h1 className="main__heading">We're Different</h1>
        {
          MainItems.map((item, index) => {
            return (
              <div className="main__item" key={index}>
                <i className={item.class}></i>
                <h2 className="main__item-heading">{item.heading}</h2>
                <p className="main__text">{item.text}</p>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Main
