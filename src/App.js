import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderNav from './components/HeaderNav.jsx';
import RoutingInfo from './routing/routeConfig.js';
import packageJson from '../package.json';

const App = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <> 
          <HeaderNav />
          <Switch>
            {RoutingInfo.routes.map(sitemapEntry => {
              console.log(sitemapEntry);
              return <Route key={sitemapEntry.name} exact path={sitemapEntry.route} component={sitemapEntry.component} />})}
          </Switch>
          <footer className='text-right fixed-bottom mx-2'><p>{`version ${packageJson.version}`}</p></footer>
        </>
      </Router>
    </>
  )
}

export default App;
