import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Envelope } from 'react-bootstrap-icons';
import AppContext from '../../context/AppContext'

import Themes from '../styles/Themes';
import pathBuilder from '../../helpers/pathBuilder';
import PagesConstants from './PagesConstants';

import './Nav.css';
import './Footer.css';

const Footer = () => {

    const {playMode, updateTheme} = React.useContext(AppContext);

    var themes = Object.keys(Themes).map(key => Themes[key]);

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
                         {/* <NavDropdown 
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
                        </NavDropdown>  */}
                        <NavDropdown 
                            drop="up"
                            title="Couleurs" 
                            id="basic-nav-dropdown"
                            onSelect={(event) => {
                                updateTheme(event);
                                sessionStorage.setItem('ma-thematique-theme', JSON.stringify(event));
                            }} >   
                            {
                                themes.map(theme => (
                                    <NavDropdown.Item 
                                        /* key={index} */
                                        id="theme-dropdown-item"
                                        className={theme}
                                        eventKey={theme}>
                                        {theme}
                                    </NavDropdown.Item>
                                ))
                            }                         
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>        
                <p className="CopyRight" > 
                    Copyright &copy; Jozinho {(new Date().getFullYear())}
                </p>
                <NavLink to={pathBuilder(PagesConstants.CONTACT)}>
                    <Envelope className="ContactIcon" />
                </NavLink>
            </Navbar>
    );
}

export default Footer;