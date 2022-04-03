import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import MathJaxInline from '../../mathjax-display/MathJaxInline';
import AppContext from '../../context/AppContext'

import './Nav.css';
import './Header.css';

const Header = ({ pdfItems}) => {

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
                        <NavDropdown title="Cours/exercices" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/cours/le-produit-en-croix" >
                                Le produit en croix
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/cours/les-puissances" >
                                Puissances
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/cours/le-nombre-pi" >
                                Nombre <MathJaxInline toShow={"$ \\pi $"} />
                            </NavDropdown.Item>  
                            <NavDropdown.Item href="/cours/le-nombre-d-or" >
                                Nombre d'or (<MathJaxInline toShow={"$ \\phi $"} />)
                            </NavDropdown.Item> 
                            <NavDropdown.Item href="/cours/la-trigonometrie" >
                                Trigo
                            </NavDropdown.Item>  
                            <NavDropdown.Item href="/cours/les-formes" >
                                Formes
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/cours/les-fonctions-usuelles" >
                                Fonctions usuelles
                            </NavDropdown.Item>
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