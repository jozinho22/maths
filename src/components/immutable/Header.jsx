import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from '../home/Home';
import ProgrammationBasics from '../courses/prog-basics/ProgrammationBasics';
import Shapes from '../courses/shapes/Shapes';
import UsualFunctions from '../usual-functions/UsualFunctions';

import TablesTest from '../tables-test/TablesTest';
import PDFViewerPage from '../pdf-viewer/PDFViewerPage';

import './Nav.css';
import './Header.css';

const Header = ({ pdfItems, setComponent }) => {

    const [showToggle, setShowToggle] = React.useState(false);
    var pdfCoursesItems = []
    var pdfAlbumsItems = []

    for(var k = 0; k < pdfItems.length; k++) {
        if(pdfItems[k].type === 'courses') {
            pdfCoursesItems.push(pdfItems[k]);
        } else if(pdfItems[k].type === 'albums') {
            pdfAlbumsItems.push(pdfItems[k]);
        }
    }

    const findPdfItemById = (id) => {
        return pdfItems[id];
    }

    const goTo = (component) => {
        setShowToggle(false);
        setComponent(component);
    }

    function css_text(x) { return x.cssText; }
    var file = document.getElementById('css');
    console.log(file)
    var content = Array.prototype.map.call(file.sheet.cssRules, css_text).join('\n');
    console.log(content)

    return (
            <Navbar 
                className="CustomNav CustomHeader" 
                fixed="top" 
                expanded={showToggle}
                onToggle={() => {
                    setShowToggle(!showToggle);
                }}
                variant="dark" 
                expand="lg">
                <Navbar.Brand 
                    className="Clickable"
                    onClick={() => setComponent(<Home />)}>
                    Maths pour tous
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav>
                        {/* <NavDropdown title="Cours/exercices" id="basic-nav-dropdown">
                             <NavDropdown.Item 
                                onClick={() => {
                                    goTo(<ProgrammationBasics />);
                                }} >
                                Bases de la programmation
                            </NavDropdown.Item> 
                            <NavDropdown.Item 
                                onClick={() => {
                                    goTo(<Shapes />);
                                }} >
                                Les formes
                            </NavDropdown.Item> 
                            <NavDropdown.Item 
                                onClick={() => {
                                    goTo(<UsualFunctions />);
                                }} >
                                Fonctions usuelles
                            </NavDropdown.Item>

                        </NavDropdown> */}
                        <NavDropdown title="BDs de Jean-Pierre Petit" id="basic-nav-dropdown">
                            {pdfAlbumsItems.map(pdfItem => 
                                <NavDropdown.Item 
                                    key= {pdfItem.id}
                                    onClick={() => {
                                        goTo(
                                            <PDFViewerPage 
                                            pdfItem={findPdfItemById(pdfItem.id)} />
                                        );
                                    }} >
                                    {pdfItem.title}
                                </NavDropdown.Item>
                                )}
                        </NavDropdown>
                        <NavDropdown title="Jeux" id="basic-nav-dropdown">
                            <NavDropdown.Item 
                                onClick={() =>{
                                    goTo(<TablesTest />);
                                }} >
                                Réviser ses tables
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
export default Header;