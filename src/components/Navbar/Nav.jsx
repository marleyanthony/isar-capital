import React from 'react';
import { NavItems } from './NavItems';

class Nav extends React.Component {
  state = {
    clicked: false,
    menuOpen: false
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar__logo">ISAR</h1>
        <div className="navbar__links-wrapper">
          <div className="navbar__menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <div className={this.state.menuOpen === false ? 'navbar__nav-menu-closed' : 'navbar__nav-menu-open'}>
            <i className="fas fa-times navbar__nav-menu-open-close-btn" onClick={this.handleClick}></i>
            <ul>
              {NavItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav
