import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  
  return (
    <Router basename={window.location.pathname.replace(/(\/[^/]+)$/, "")}>
      <div>
        <Switch>
          <Route
            path={`/login`}
            component={LoginScreen}
          />
          <Route
            path={`/`}
            component={DashboardRoutes}
          />

          <Redirect to={`/`} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
