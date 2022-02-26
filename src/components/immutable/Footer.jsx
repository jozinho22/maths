import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { RiMailSendLine } from 'react-icons/ri';

import FontContext from '../context/FontContext'
import ThemeContext from '../context/ThemeContext'
import Contact from '../contact/Contact';
import getFonts from './styles/getFonts'
import getThemes from './styles/getThemes'
import './Nav.css';
import './Footer.css';

const Footer = ( { setComponent, hide } ) => {

    const {font, updateFont} = React.useContext(FontContext);
    const {theme, updateTheme} = React.useContext(ThemeContext);

    const changeFont = (event) => {
        updateFont(event); 
    }
    const changeTheme = (event) => {
        updateTheme(event); 
    }
  
    var fonts = getFonts();
    var themes = getThemes();

    return (
            <Navbar 
                className={`CustomFooter CustomNav  ${hide ? "Hidden" : ''}`}
                fixed="bottom" 
                collapseOnSelect 
                variant="dark" 
                expand="lg">   
                {/* <FaQuestion 
                    className="QuestionIcon" /> */} 
                <Navbar.Toggle aria-controls="basic-nav-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavDropdown 
                            drop="up"
                            title="Fonts" 
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
                            title="Themes" 
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