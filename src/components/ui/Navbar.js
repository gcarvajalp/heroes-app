import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavContext } from '../../reducers/NavContext';
// import { types } from '../../types/types';


const Navbar = () => {

  const { navbar } = useContext(NavContext);

  useEffect(() => {
    console.log('click en el boton');
  }, [navbar])


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        className="navbar-brand"
        to="/">
        <img src="./hero.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarNav">
        <div className="navbar-nav mr-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact={true}
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact={true}
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            to="/search"
          >
            Search
          </NavLink>

        </div>
      </div>

    </nav>
  )
}

export default Navbar;
