import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <div className="container">
          <div className="topbar-left">
            <button className="topbar-toggler"> X </button>
            <Link className="topbar-brand" to="/">
              <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="logo" />
              <img className="logo-inverse"  src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`} alt="logo" />
            </Link>
          </div>
          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/articles/create">write new article</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hey Sam!
                  <i className="fa fa-caret-down" />
                </a>
                <div className="nav-submenu">
                  <Link to="/articles"> my articles</Link> <br />
                  <Link to="/logout">logout</Link>
                </div>
              </li>
              <li className="nav-item">
              <Link to="/login">login</Link>
              </li>
              <li className="nav-item">
              <Link to="/signup">sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  )
}

export default NavBar;