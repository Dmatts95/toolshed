import React from 'react';
import RoutingInfo from '../routing/routeConfig';
import {Link} from 'react-router-dom'

const Home = () => {
    const {routes} = RoutingInfo; 
    return(
        <ul>
            {routes.map(route => (
                <li key={route.name}><Link to={route.route}>{route.name}</Link></li>
            ))}
        </ul>
    );  
}
export default Home;