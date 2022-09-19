import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiMailSendLine } from 'react-icons/ri';
import AppContext from '../../context/AppContext'

/* import getFonts from '../styles/getFonts';
 import getThemes from '../styles/getThemes'; */

import './Nav.css';
import './Footer.css';

const Footer = () => {

    const {playMode, /* updateFont,  updateTheme */} = React.useContext(AppContext);

    /* var fonts = getFonts(); 
    var themes = getThemes(); */

    return (
            <Navbar 
                className={`CustomFooter CustomNav  ${playMode ? "Hidden" : ''}`}
                fixed="bottom" 
                collapseOnSelect 
                variant="dark" 
                expand="lg">   
                {/* <Navbar.Toggle aria-controls="basic-nav-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav>
                         <NavDropdown 
                            drop="up"
                            title="Fonts" 
                            id="basic-nav-nav"
                            onSelect={(event) => {
                                updateFont(event);
                                localStorage.setItem('font', JSON.stringify(event));
                            }} >   
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
                            onSelect={(event) => {
                                updateTheme(event);
                                localStorage.setItem('theme', JSON.stringify(event));
                            }} >   
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
                </Navbar.Collapse>  */}       
                <p className="CopyRight" > 
                    Copyright &copy; Jozinho {(new Date().getFullYear())}
                </p>
                <Link to="/contact">
                    <RiMailSendLine 
                        className="ContactIcon"
                        href="/contact" />
                </Link>
            </Navbar>
    );
}

export default Footer;