import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { RiMailSendLine } from 'react-icons/ri';
import AppContext from '../context/AppContext'

import Contact from '../contact/Contact';
import getFonts from './styles/getFonts';
import getThemes from './styles/getThemes';

import './Nav.css';
import './Footer.css';

const Footer = () => {

    const {updateComponent, playMode, updateFont, updateTheme} = React.useContext(AppContext);

    var fonts = getFonts();
    var themes = getThemes();

    return (
            <Navbar 
                className={`CustomFooter CustomNav  ${playMode ? "Hidden" : ''}`}
                fixed="bottom" 
                collapseOnSelect 
                variant="dark" 
                expand="lg">   
                <Navbar.Toggle aria-controls="basic-nav-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavDropdown 
                            drop="up"
                            title="Fonts" 
                            id="basic-nav-nav"
                            onSelect={(event) => updateFont(event)} >   
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
                            title="Themes" 
                            id="theme-dropdown-menu"
                            onSelect={(event) => updateTheme(event)} >   
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
                    onClick={() => updateComponent(<Contact />)} />
            </Navbar>
    );
}

export default Footer;