import React from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RoutingInfo from './routing/routeConfig';

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
