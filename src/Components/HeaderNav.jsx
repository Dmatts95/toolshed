import React from 'react'; 
import {Navbar, Nav, Container} from 'react-bootstrap'; 
import RoutingInfo from '../routing/routeConfig';

const HeaderNav = () => {
	return (
		<>
		    <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        The Toolshed
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {RoutingInfo.routes.map(siteEntry => <Nav.Link key={siteEntry.name} href={siteEntry.route}>{siteEntry.name}</Nav.Link>)}
                    </Nav>
                </Container>
			</Navbar>
		</>
    );
}

export default HeaderNav; 