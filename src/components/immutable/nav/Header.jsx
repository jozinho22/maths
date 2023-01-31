import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context/AppContext'

import './Nav.css';
import './Header.css';

const Header = ( {courseItems, pdfItems, gameItems} ) => {

    const {playMode} = React.useContext(AppContext);

    const [showToggle, setShowToggle] = React.useState(false);
    const [showDropdown, setShowDropdown] = React.useState(false);

    var width = document.body.offsetWidth;

    var monCv = "https://josselin-douineau-developer.netlify.app";

    React.useEffect(() => {
        setShowToggle(false);
    }, []);

    const retractToggleOnMobile = () => {
        console.log("cocou")
/*         if(width < 450) {
            setShowToggle(false);
        } */ 
        setShowToggle(false);
    }

/*     const retractDropdownOnScreen = () => {
        console.log()
        if(width >= 450) {
            setShowDropdown(false);
        } 
    } */

    /* const handleSelect = (eventKey) => alert(`selected ${eventKey}`); */

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
                <Navbar.Brand className="Clickable">
                    <NavLink to={`/`}>
                        Accueil
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav /* onSelect={handleSelect} */>
                        <NavDropdown title="Cours" >
                            {courseItems.map(courseItem => 
                                <NavDropdown.ItemText key={courseItem.id} eventKey={courseItem.id} onClick={() => {retractToggleOnMobile()}} >
                                    <NavLink key={courseItem.id} className="dropdown-item" to={`/cours/${courseItem.relativePath}`}>
                                        {courseItem.title}
                                    </NavLink>
                                </NavDropdown.ItemText>
                            )}
                            <NavDropdown.Divider />
                            <NavDropdown.Item>                              
                                <NavLink to={`/cours/les-fonctions-usuelles`} >
                                    Les fonctions usuelles
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown> 
                        <NavDropdown title="BDs de Jean-Pierre Petit">
                            {pdfItems.map(pdfItem => 
                                <NavDropdown.Item key={pdfItem.id} onClick={() => {retractToggleOnMobile()}} >
                                    <NavLink to={`/bds-de-jpp/${pdfItem.relativePath}`}>
                                        {pdfItem.minTitle ? pdfItem.minTitle : pdfItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                        <NavDropdown title="Jeux">
                            {gameItems.map(gameItem => 
                                <NavDropdown.Item key={gameItem.id} onClick={() => {retractToggleOnMobile()}} >
                                    <NavLink to={`/jeux/${gameItem.relativePath}`} >
                                        {gameItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown> 
                        <Nav.Item title="Liens" id="nav-item-liens" onClick={() => {retractToggleOnMobile()}} >
                            <NavLink to={"/liens"} >
                                Liens
                            </NavLink>  
                        </Nav.Item>
                        <Nav.Item title="Cours à domicile" id="nav-item-contact" onClick={() => {retractToggleOnMobile()}} >
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