import React from 'react';
import { NavItems } from './NavItems';

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__logo">ISAR</h1>
      <ul className="nav__links-wrapper">
        {
          NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav >
  )
}

export default Navbar