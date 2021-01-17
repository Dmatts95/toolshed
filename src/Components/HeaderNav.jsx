import React from 'react'; 
import {Navbar, Nav, Container} from 'react-bootstrap'; 
import RoutingInfo from '../config/routeConfig';
import {NavLink, Link} from 'react-router-dom'

const HeaderNav = () => {
	return (
		<>
		    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        The Toolshed
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            {RoutingInfo.routes.map(siteEntry => <Nav.Link as={NavLink} key={siteEntry.name} to={siteEntry.route}>{siteEntry.name}</Nav.Link>)}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
			</Navbar>
		</>
    );
}

export default HeaderNav; 