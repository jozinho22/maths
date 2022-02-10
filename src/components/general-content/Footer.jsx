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
                      <NavDropdown.Item eventKey="Celtic" as="button">
                          Celtic
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="Choco" as="button">
                          Choco
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