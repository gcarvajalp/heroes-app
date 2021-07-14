import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import DcScreen from '../components/dc/DcScreen';
import LoginScreen from '../components/login/LoginScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';

import Navbar from '../components/ui/Navbar';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact={true}
            path="/login"
            component={LoginScreen}
          />
          <Route
            path="/"
            component={DashboardRoutes}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
