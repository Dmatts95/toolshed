import  React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Col, Row, Container, Nav, NavItem, NavLink} from "reactstrap";
import StringSubTool from "./Components/stringSubTool";
import "./Components/sidenav.css";

const defaultDomain = "/toolshed/"
const stringSubPath = defaultDomain + "string_substitution";

const AppRouter = () => (
	<Router>
		<Container fluid>
			<Row noGutters>
				<Col sm="2" >
					<Nav vertical className="sidenav">
						<NavItem>
							<NavLink>
								<Link to={stringSubPath}>String Sub</Link>
							</NavLink>
						</NavItem>
					</Nav>
				</Col>
				<Col sm="10">
						<Route path={stringSubPath} exact component={StringSubTool} />			
				</Col>
			</Row>
		</Container>
	</Router>
  
);

export default AppRouter;