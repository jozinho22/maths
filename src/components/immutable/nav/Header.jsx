import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AppContext from '../../context/AppContext'

import './Nav.css';
import './Header.css';

const Header = ( {coursesItems, pdfItems} ) => {

    const {playMode} = React.useContext(AppContext);

    const [showToggle, setShowToggle] = React.useState(false);

    return (
            <Navbar 
                className={`CustomNav CustomHeader ${playMode ? "Hidden" : ''}`}
                fixed="top" 
                expanded={showToggle}
                onToggle={() => {
                    setShowToggle(!showToggle);
                }}
                variant="dark" 
                expand="lg">
                <Navbar.Brand 
                    className="Clickable"
                    href="/" >
                    Maths pour tous
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav>
                        <NavDropdown title="Cours" id="basic-nav-dropdown">
                            {coursesItems.map(coursesItem => 
                                <NavDropdown.Item
                                    key={coursesItem.id}
                                    href={coursesItem.relativePath} >
                                    {coursesItem.title}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown> 
                        <NavDropdown title="BDs de Jean-Pierre Petit" id="basic-nav-dropdown">
                            {pdfItems.map(pdfItem => 
                                <NavDropdown.Item
                                    key={pdfItem.id}
                                    href={`/bds-de-jpp/${pdfItem.relativePath}`} >
                                    {pdfItem.minTitle ? pdfItem.minTitle : pdfItem.title}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                        <NavDropdown title="Jeux" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/jeux/reviser-ses-tables" >
                                Réviser ses tables
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
export default Header;