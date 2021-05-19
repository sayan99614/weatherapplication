import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../images/rainbow.png";
import "../App.css";

function Navbar() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-white'>
        <div class='container'>
          <a class='navbar-brand' href='#'>
            <img src={Icon} style={{ height: "10vh", width: "40%" }} alt='' />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <NavLink
                  className='nav-link'
                  activeClassName='navline'
                  exact
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  activeClassName='navline'
                  to='/weather'
                >
                  Weather
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  activeClassName='navline'
                  to='/location'
                >
                  Location
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
