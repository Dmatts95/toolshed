import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderNav from './components/HeaderNav.jsx';
import RoutingInfo from './routing/routeConfig.js';

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
  )
}

export default App;
