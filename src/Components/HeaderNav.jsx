import React from 'react'; 
import {Navbar, Nav, Container} from 'react-bootstrap'; 
import RoutingInfo from '../routing/routeConfig';
import {NavLink, Link} from 'react-router-dom'

const HeaderNav = () => {
	return (
		<>
		    <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        The Toolshed
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {RoutingInfo.routes.map(siteEntry => <Nav.Link as={NavLink} key={siteEntry.name} to={siteEntry.route}>{siteEntry.name}</Nav.Link>)}
                    </Nav>
                </Container>
			</Navbar>
		</>
    );
}

export default HeaderNav; 