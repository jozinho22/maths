import React from 'react';
import { useLocation } from 'react-router-dom';
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
                        Ma Thématique
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav /* onSelect={handleSelect} */>
                        <NavDropdown id="scrollable" title="Cours de maths">
                            {courseItems.map(courseItem => 
                                <NavDropdown.Item key={courseItem.id} eventkey={courseItem.id} as={NavLink} to={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}`)} onClick={() => {retractToggleOnMobile()}} >
                                    {courseItem.title}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown> 
                        <NavDropdown id="scrollable" title="BDs de Jean-Pierre Petit">
                            {pdfItems.map(pdfItem => 
                                <NavDropdown.Item key={pdfItem.id} eventkey={pdfItem.id} as={NavLink} to={pathBuilder(`${PagesConstants.BDS_DE_JPP}${pdfItem.relativePath}`)} onClick={() => {retractToggleOnMobile()}} >
                                    {pdfItem.title}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                        <NavDropdown title="Jeux">
                            {gameItems.map(gameItem => 
                                <NavDropdown.Item key={gameItem.id} eventkey={gameItem.id} as={NavLink} to={pathBuilder(`${PagesConstants.JEUX}${gameItem.relativePath}`)} onClick={() => {retractToggleOnMobile()}} >
                                    {gameItem.title}
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