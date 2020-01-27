import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css';

class Header extends React.Component {
	render() {
		return (
			<Navbar bg='light' expand='lg'>
			  <Navbar.Brand href='#home'>beerbuddy</Navbar.Brand>
			  <Navbar.Toggle aria-controls='basic-navbar-nav' />
			  <Navbar.Collapse id='basic-navbar-nav'>
			    <Nav className='mr-auto'>
			    	<InputGroup>
					    <FormControl
					      placeholder="Recipient's username"
					      aria-label="Recipient's username"
					      aria-describedby='basic-addon2'
					    />
					    <InputGroup.Append>
					      <Button variant='danger'>
					      	<FontAwesomeIcon icon={faSearch} size='lg'/>
					      </Button>
					    </InputGroup.Append>
					  </InputGroup>
			      <Nav.Link href='#'>Navigation</Nav.Link>
			      <Nav.Link href='#'>Navigation</Nav.Link>
			    </Nav>
			    <Form inline>
			      <Button variant='dark'>Log In</Button>
			      <Button variant='danger'>Sign Up</Button>
			    </Form>
			  </Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;