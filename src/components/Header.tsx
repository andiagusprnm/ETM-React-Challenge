import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Navbar, NavbarToggler, Nav,
	Collapse, NavItem, Container
} from 'reactstrap';

const Header: React.FC = ({ children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color="light" light expand="md">
			<Container>
				<Link to="/">
					Articles
				</Link>
	      <NavbarToggler onClick={toggle} />
	      <Collapse isOpen={isOpen} navbar>
	        <Nav className="mr-auto" navbar>
	          <NavItem>
	          	{ children }
	          </NavItem>
	        </Nav>
	      </Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
