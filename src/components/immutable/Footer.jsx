import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { RiMailSendLine } from 'react-icons/ri';
import { FaQuestion } from 'react-icons/fa';

import ThemeContext from '../context/ThemeContext'

import FontContext from '../context/FontContext'
import Contact from '../contact/Contact';
import './Nav.css';
import './Footer.css';

const Footer = ( { setComponent } ) => {

  const {font, updateFont} = React.useContext(FontContext);
    
  const changeFont = (event) => {
    updateFont(event); 
  }

  return (
        <Navbar className="CustomFooter CustomNav" fixed="bottom" collapseOnSelect variant="dark" expand="lg">   
            {/* <FaQuestion 
                className="QuestionIcon" /> */} 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav>
                    <NavDropdown drop="up"
                        title="Changer la police" 
                        id="basic-nav-nav"
                        onSelect={changeFont} >                        
                        <NavDropdown.Item 
                            className="Dragon"
                            eventKey="Dragon">
                            Celtic
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                            className="Gothic"
                            eventKey="Gothic">
                            Gothic
                        </NavDropdown.Item>    
                        <NavDropdown.Item 
                            className="BlackChancery"
                            eventKey="BlackChancery">
                            BlackChancery
                        </NavDropdown.Item>   
                        <NavDropdown.Item 
                            className="Christmas"
                            eventKey="Christmas">
                            Christmas
                        </NavDropdown.Item> 
                        <NavDropdown.Item 
                            className="Arabic"
                            eventKey="Arabic">
                            Arabic
                        </NavDropdown.Item>               
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>        
            <p className="CopyRight" > 
                Copyright &copy; Jozinho {(new Date().getFullYear())}
            </p>
            <RiMailSendLine 
                className="ContactIcon"
                onClick={() => setComponent(<Contact setComponent={setComponent} />)} />
        </Navbar>
  );
}

export default Footer;