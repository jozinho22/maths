import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import pathBuilder from '../../helpers/pathBuilder';
import PagesConstants from './PagesConstants';
import './Nav.css';
import './Header.css';

const Header = ( {courseItems, pdfItems, gameItems} ) => {

    const {playMode} = React.useContext(AppContext);

    const [showToggle, setShowToggle] = React.useState(false);

    var width = document.body.offsetWidth;

    React.useEffect(() => {
        setShowToggle(false);
    }, []);

    const retractToggleOnMobile = () => {
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
                <Navbar.Brand className="Clickable" onClick={() => {retractToggleOnMobile()}}>
                    <NavLink to={pathBuilder("/")}>
                        Accueil
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav /* onSelect={handleSelect} */>
                        <NavDropdown title="Cours" >
                            {courseItems.map(courseItem => 
                                <NavDropdown.Item key={courseItem.id} eventKey={courseItem.id} onClick={() => {retractToggleOnMobile()}} >
                                    <NavLink key={courseItem.id} to={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}`)}>
                                        {courseItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown> 
                        <NavDropdown title="BDs de Jean-Pierre Petit">
                            {pdfItems.map(pdfItem => 
                                <NavDropdown.Item key={pdfItem.id} onClick={() => {retractToggleOnMobile()}} >
                                    <NavLink key={pdfItem.id} to={pathBuilder(`${PagesConstants.BDS_DE_JPP}${pdfItem.relativePath}`)}>
                                        {pdfItem.minTitle ? pdfItem.minTitle : pdfItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                        <NavDropdown title="Jeux">
                            {gameItems.map(gameItem => 
                                <NavDropdown.Item key={gameItem.id} onClick={() => {retractToggleOnMobile()}} >
                                    <NavLink to={pathBuilder(`${PagesConstants.JEUX}${gameItem.relativePath}`)} >
                                        {gameItem.title}
                                    </NavLink>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown> 
                        <Nav.Item title="Liens" id="nav-item-liens" onClick={() => {retractToggleOnMobile()}} >
                            <NavLink to={pathBuilder(PagesConstants.LIENS)} >
                                Liens
                            </NavLink>  
                        </Nav.Item>
                        <Nav.Item title="Cours à domicile" id="nav-item-contact" onClick={() => {retractToggleOnMobile()}} >
                            <NavLink to={pathBuilder(PagesConstants.CONTACT)} >
                                Cours à domicile
                            </NavLink>  
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
export default Header;