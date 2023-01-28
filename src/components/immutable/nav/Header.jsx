import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context/AppContext'

import './Nav.css';
import './Header.css';

const Header = ( {courseItems, pdfItems, gameItems} ) => {

    const {playMode} = React.useContext(AppContext);

    const [showToggle, setShowToggle] = React.useState(false);

    var monCv = "https://josselin-douineau-developer.netlify.app";

    React.useEffect(() => {
        setShowToggle(false);
    }, [])

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
                                <NavDropdown.Item key={courseItem.id} onClick={() => {setShowToggle(!showToggle); }} >
                                    <NavLink to={`/cours/${courseItem.relativePath}`}>
                                        {courseItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                            <NavDropdown.Item>                              
                                <NavLink to={`/cours/les-fonctions-usuelles`} >
                                    Les fonctions usuelles
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown> 
                        <NavDropdown title="BDs de Jean-Pierre Petit" id="basic-nav-dropdown">
                            {pdfItems.map(pdfItem => 
                                <NavDropdown.Item key={pdfItem.id} onClick={() => {setShowToggle(!showToggle); }} >
                                    <NavLink to={`/bds-de-jpp/${pdfItem.relativePath}`}>
                                        {pdfItem.minTitle ? pdfItem.minTitle : pdfItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                        <NavDropdown title="Jeux" id="basic-nav-dropdown">
                            {gameItems.map(gameItem => 
                                <NavDropdown.Item key={gameItem.id} onClick={() => {setShowToggle(!showToggle); }}>
                                    <NavLink to={`/jeux/${gameItem.relativePath}`} >
                                        {gameItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown> 
                        <Nav.Item title="Liens" id="basic-nav-item" onClick={() => {setShowToggle(!showToggle); }}>
                            <NavLink to={"/liens"} >
                                Liens
                            </NavLink>  
                        </Nav.Item>
                        <Nav.Item title="Cours à domicile" id="basic-nav-item" onClick={() => {setShowToggle(!showToggle); }}>
                            <NavLink to={"/contact"} >
                                Cours à domicile
                            </NavLink>  
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
export default Header;