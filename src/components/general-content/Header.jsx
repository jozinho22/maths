import React from 'react';
import { Navbar, Nav, DropdownButton, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ThemeContext from '../context/ThemeContext';

import './Header.css';

const Header = () => {

    function ThemeChoice() {
        
        const {theme, updateTheme} = React.useContext(ThemeContext);
    
        const handleChange = (event) => {
            updateTheme(event); 
        }

        return (
            <DropdownButton 
                id="dropdown-item-button"
                onSelect={handleChange}
                title={theme}
                className="CustomDropdownButton" >
                <Dropdown.Item className="Brazil" eventKey="Brazil" as="button" >Brazil</Dropdown.Item>
                <Dropdown.Item className="Darcula" eventKey="Darcula" as="button" >Darcula</Dropdown.Item>
                <Dropdown.Item className="Forest" eventKey="Forest" as="button" >Forest</Dropdown.Item>
                <Dropdown.Item className="Shades" eventKey="Shades" as="button" >Shades</Dropdown.Item>
                <Dropdown.Item className="Purple" eventKey="Purple" as="button" >Purple</Dropdown.Item>
                <Dropdown.Item className="Bordeaux" eventKey="Bordeaux" as="button" >Bordeaux</Dropdown.Item>
                <Dropdown.Item className="Africa" eventKey="Africa" as="button" >Africa</Dropdown.Item>
            </DropdownButton>
        );

    }

    return (
        <Navbar className="CustomHeader" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
   {/*          <Navbar.Brand>
                <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar className="m-auto">
                <ThemeChoice className="ThemeChoice" />
            </Navbar> */}

              <Container>
    <Navbar.Brand href="/">Maths pour tous</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/test-home">Réviser ses tables</Nav.Link>
        {/* <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      <Nav>
        <Navbar.Text>Theme : &nbsp; </Navbar.Text>
        <ThemeChoice className="ThemeChoice" />
      </Nav>
    </Navbar.Collapse>
    </Container>  
        </Navbar>
        );
    }
    
export default Header;