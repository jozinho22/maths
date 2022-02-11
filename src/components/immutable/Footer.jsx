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

    const {theme, updateTheme} = React.useContext(ThemeContext);

    const changeTheme = (event) => {
        updateTheme(event); 
    }
  
    const {font, updateFont} = React.useContext(FontContext);
        
    const changeFont = (event) => {
        updateFont(event); 
    }

    var j = -1;
    var themes = [
                    {id: ++j, name: 'Algeria'},
                    {id: ++j, name: 'Brazil'},
                    {id: ++j, name: 'Darcula'},
                    {id: ++j, name: 'France'},
                    {id: ++j, name: 'Senegal'}
                ];

    var k = -1;
    var fonts = [
                    {id: ++k, name: 'Aladdin'},
                    {id: ++k, name: 'Arabic'},
                    {id: ++k, name: 'BlackChancery'},
                    {id: ++k, name: 'Celtic'},
                    {id: ++k, name: 'Chinese'},
                    {id: ++k, name: 'Dragons'},
                    {id: ++k, name: 'Gothic'},
                    {id: ++k, name: 'Indian'},
                    {id: ++k, name: 'Western'},
                    {id: ++k, name: 'Xmas'}
                ];

    return (
            <Navbar 
                className="CustomNav CustomFooter" 
                fixed="bottom" 
                collapseOnSelect 
                variant="dark" 
                expand="lg">   
                {/* <FaQuestion 
                    className="QuestionIcon" /> */} 
                <Navbar.Toggle expand="true" aria-controls="basic-nav-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavDropdown 
                            drop="up"
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
                        <NavDropdown 
                            drop="up"
                            title="Changer le thème" 
                            id="theme-dropdown-menu"
                            onSelect={changeTheme} >   
                            {
                                themes.map(theme => (
                                    <NavDropdown.Item 
                                        key={theme.id}
                                        id="theme-dropdown-item"
                                        className={theme.name}
                                        eventKey={theme.name}>
                                        {theme.name}
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