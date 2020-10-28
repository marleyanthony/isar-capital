import React from 'react';
import { NavItems } from './NavItems';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-wrapper">
        <i className="fas fa-chart-line navbar__logo-chart-icon" />
        <h1 className="navbar__logo">ISAR</h1>
      </div>
      <ul className="navbar__links-wrapper">
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