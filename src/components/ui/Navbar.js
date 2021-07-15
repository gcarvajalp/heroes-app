import React from 'react';
import { Link, NavLink, useHistory, useLocation, Redirect } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';


const Navbar = () => {

  const history = useHistory();

  const [formValues, handleInputChange, reset] = useForm({
    search: ''
  });

  const { search } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`search?q=${search}`);
    reset();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        className="navbar-brand"
        to="/">
        <img src="./hero.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
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

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <form
            className="form-inline"
            onSubmit={handleSubmit}
          >
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              value={search}
              onChange={handleInputChange}
            ></input>
            <button
              class="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >Search</button>
          </form>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;
