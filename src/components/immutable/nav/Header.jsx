import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context/AppContext'

import './Nav.css';
import './Header.css';

const Header = ( {courseItems, pdfItems, gameItems} ) => {

    const {playMode} = React.useContext(AppContext);

    const [showToggle, setShowToggle] = React.useState(false);
    var width = document.body.offsetWidth;

    var monCv = "https://josselin-douineau-developer.netlify.app";

    React.useEffect(() => {
        setShowToggle(false);
    }, []);

    const retractDropdownOnMobile = () => {
        console.log(showToggle)
        if(width < 450) {
            setShowToggle(false);
        } 
    }

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
                <Navbar.Brand className="Clickable" onClick={() => {retractDropdownOnMobile()}}>
                    <NavLink to={`/`}>
                        Accueil
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav>
                        <NavDropdown title="Cours">
                            {courseItems.map(courseItem => 
                                <NavDropdown.Item key={courseItem.id} eventKey={courseItem.id} onClick={() => {retractDropdownOnMobile()}} >
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
                        <NavDropdown title="BDs de Jean-Pierre Petit">
                            {pdfItems.map(pdfItem => 
                                <NavDropdown.Item key={pdfItem.id} onClick={() => {retractDropdownOnMobile()}} >
                                    <NavLink to={`/bds-de-jpp/${pdfItem.relativePath}`}>
                                        {pdfItem.minTitle ? pdfItem.minTitle : pdfItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                        <NavDropdown title="Jeux">
                            {gameItems.map(gameItem => 
                                <NavDropdown.Item key={gameItem.id} onClick={() => {retractDropdownOnMobile()}} >
                                    <NavLink to={`/jeux/${gameItem.relativePath}`} >
                                        {gameItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown> 
                        <Nav.Item title="Liens" id="nav-item-liens" onClick={() => {retractDropdownOnMobile()}} >
                            <NavLink to={"/liens"} >
                                Liens
                            </NavLink>  
                        </Nav.Item>
                        <Nav.Item title="Cours à domicile" id="nav-item-contact" onClick={() => {retractDropdownOnMobile()}} >
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