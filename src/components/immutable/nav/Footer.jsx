import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Envelope } from 'react-bootstrap-icons';
import AppContext from '../../context/AppContext'

import { getFonts } from '../styles/getFonts';
import { getThemes } from '../styles/getThemes'; 
import pathBuilder from '../../helpers/pathBuilder';

import './Nav.css';
import './Footer.css';

const Footer = () => {

    const {playMode, updateFont,  updateTheme} = React.useContext(AppContext);

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
                            id="basic-nav-dropdown"
                            onSelect={(event) => {
                                updateFont(event);
                                sessionStorage.setItem('ma-thematique-font', JSON.stringify(event));
                            }} >   
                            {
                                fonts.map(font => (
                                    <NavDropdown.Item 
                                        key={font.id}
                                        id="font-dropdown-item"
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
                            id="basic-nav-dropdown"
                            onSelect={(event) => {
                                updateTheme(event);
                                sessionStorage.setItem('ma-thematique-theme', JSON.stringify(event));
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
                </Navbar.Collapse>        
                <p className="CopyRight" > 
                    Copyright &copy; Jozinho {(new Date().getFullYear())}
                </p>
                <NavLink to={pathBuilder("/contact")}>
                    <Envelope className="ContactIcon" />
                </NavLink>
            </Navbar>
    );
}

export default Footer;