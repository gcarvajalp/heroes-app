import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import HomeScreen from '../components/home/HomeScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import Navbar from '../components/ui/Navbar';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Switch>
          <Route exact={true} path="/marvel" component={MarvelScreen} />
          <Route exact={true} path="/hero/:heroeId" component={HeroScreen} />
          <Route exact={true} path="/dc" component={DcScreen} />
          <Route exact={true} path="/search" component={SearchScreen} />
          <Route exact={true} path="/" component={HomeScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

export default DashboardRoutes
