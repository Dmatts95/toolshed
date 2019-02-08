import  React from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import {Col, Row, Container, Nav, NavItem, NavLink} from "reactstrap";
import StringSubTool from "./Components/stringSubTool";
import "./Components/sidenav.css";

//const defaultDomain = "/toolshed/"
//const stringSubPath = defaultDomain + "string_substitution/";

const AppRouter = () => (
	<Router>
		<Container fluid>
			<Row noGutters>
				<Col sm="2" >
					<Nav vertical className="sidenav">
						<NavItem>
							<NavLink href={"/"}>String Sub
							</NavLink>
						</NavItem>
					</Nav>
				</Col>
				<Col sm="10">
						<Route path={"/"} exact component={StringSubTool} />			
				</Col>
			</Row>
		</Container>
	</Router>
  
);

export default AppRouter;