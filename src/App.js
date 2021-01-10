import React, { Component } from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RoutingInfo from './routing/routeConfig';
//import { Button } from 'reactstrap';
//import AppRouter from './AppRouter';

const App = () => {
  return (
    <>
      <HeaderNav />
      <Router>
        <Switch>
          {RoutingInfo.routes.map(sitemapEntry => {
            console.log(sitemapEntry);
            return <Route key={sitemapEntry.name} exact={sitemapEntry.exact} path={sitemapEntry.route} component={sitemapEntry.component} />})}
        </Switch>
      </Router>
    </>


    // <div className="App">
    //   <HeaderNav />
    // </div>
  )
}

export default App;
