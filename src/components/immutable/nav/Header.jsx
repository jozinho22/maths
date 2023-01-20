import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AppContext from '../../context/AppContext'

import './Nav.css';
import './Header.css';

const Header = ( {courseItems, pdfItems, gameItems} ) => {

    const {playMode} = React.useContext(AppContext);

    const [showToggle, setShowToggle] = React.useState(false);

    var monCv = "https://josselin-douineau-developer.netlify.app";

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
                    Accueil
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav>
                        <NavDropdown title="Cours" id="basic-nav-dropdown">
                            {courseItems.map(courseItem => 
                                <NavDropdown.Item
                                    key={courseItem.id}
                                    href={`/cours/${courseItem.relativePath}`} >
                                    {courseItem.title}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown> 
                        <Nav.Link title="Les fonctions usuelles" href="/les-fonctions-usuelles" >
                            Les fonctions usuelles
                        </Nav.Link>
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
                            {gameItems.map(gameItem => 
                                <NavDropdown.Item
                                    key={gameItem.id}
                                    href={`/jeux/${gameItem.relativePath}`} >
                                    {gameItem.title}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown> 
                        <Nav.Link title="Liens" href="/liens" >
                            Liens
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
export default Header;