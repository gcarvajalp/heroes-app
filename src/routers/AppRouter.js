import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  Redirect
} from "react-router-dom";


import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {

  
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact={true}
            path={`/login`}
            component={LoginScreen}
          />
          <Route
            path={`heroes-app/`}
            component={DashboardRoutes}
          />

          <Redirect to={`/`} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
