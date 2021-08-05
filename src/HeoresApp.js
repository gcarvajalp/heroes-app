import React, { useReducer } from 'react'
import AppRouter from './routers/AppRouter';
import './HeroesApp.css';
import { NavContext } from './reducers/NavContext';
import { navReducer } from './reducers/navReducer';

const init = () => {
  return { isOpen: false }
}

const HeoresApp = () => {

  const [navbar, dispatch] = useReducer(navReducer, {}, init)

  return (
    <NavContext.Provider value={{ navbar, dispatch }}>
      <AppRouter />
    </NavContext.Provider>

  )
}

export default HeoresApp
