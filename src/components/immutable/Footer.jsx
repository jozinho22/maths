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

  var id = -1;
  var fonts = [{id: ++id, name: 'Aladdin'},
               {id: ++id, name: 'Arabic'},
               {id: ++id, name: 'BlackChancery'},
               {id: ++id, name: 'Celtic'},
               {id: ++id, name: 'Chinese'},
               {id: ++id, name: 'Dragons'},
               {id: ++id, name: 'Gothic'},
               {id: ++id, name: 'Indian'},
               {id: ++id, name: 'Western'},
               {id: ++id, name: 'Xmas'}]

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
                        {
                            fonts.map(font => (
                                <NavDropdown.Item key={font.id}
                                    className={font.name}
                                    eventKey={font.name}>
                                    {font.name}
                                </NavDropdown.Item>
                            ))
                        }                         
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