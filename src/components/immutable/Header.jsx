import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from '../home/Home';
import ProgrammationBasics from '../prog-basics/ProgrammationBasics';
import { setDimensionsOnToggle } from './navbarProcesses';

import TablesTest from '../tables-test/TablesTest';
import UsualFunctions from '../usual-functions/UsualFunctions';
import PDFViewerPage from '../pdf-viewer/PDFViewerPage';

import './Nav.css';
import './Header.css';

const Header = ({ pdfItems, setComponent, setDimensions }) => {

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

    return (
            <Navbar 
                className="CustomNav CustomHeader" 
                fixed="top" 
                expanded={showToggle}
                onToggle={() => {
                    setShowToggle(!showToggle);
                    setDimensions(setDimensionsOnToggle());
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
                        {/*<NavDropdown title="Cours/exercices" id="basic-nav-dropdown">
                             <NavDropdown.Item 
                                onClick={() => {
                                    setShowToggle(false);
                                    setComponent(<ProgrammationBasics />);
                                }} >
                                Bases de la programmation
                            </NavDropdown.Item> 

                        </NavDropdown>*/}
                        <NavDropdown title="BDs de Jean-Pierre Petit" id="basic-nav-dropdown">
                            {pdfAlbumsItems.map(pdfItem => 
                                <NavDropdown.Item 
                                    key= {pdfItem.id}
                                    onClick={() => {
                                        setShowToggle(false);
                                        setComponent(
                                            <PDFViewerPage 
                                            pdfItem={findPdfItemById(pdfItem.id)} />
                                        );
                                    }} >
                                    {pdfItem.title}
                                </NavDropdown.Item>
                                )}
                        </NavDropdown>
                        <NavDropdown title="Modules" id="basic-nav-dropdown">
                            <NavDropdown.Item 
                                onClick={() =>{
                                    setShowToggle(false);
                                    setComponent(<TablesTest />);
                                }} >
                                Réviser ses tables
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                onClick={() => {
                                    setShowToggle(false);
                                    setComponent(<UsualFunctions />);
                                }} >
                                Fonctions usuelles
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item 
                                onClick={() => {
                                    setShowToggle(false);
                                    setComponent(<Shapes />);
                                }} >
                                Formes
                            </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
export default Header;