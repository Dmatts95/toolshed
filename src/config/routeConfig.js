// import StringSubTool from '../components/stringSubTool';
import Home from '../components/Home';
import About from '../components/About'; 
import StringSubber from '../components/StringSubber'; 

const RoutingInfo = {
    "routes": [
        {
            "name":"Home",
            "route": "/",
            "component": Home,
            "exact": true   
        },
        {
            "name":"About",
            "route": "/about",
            "component": About,
            "exact": false
        },
        {
            "name":"String Subber",
            "route": "/string-subber",
            "component": StringSubber,
            "exact": false
        }
    ]
}

export default RoutingInfo; 