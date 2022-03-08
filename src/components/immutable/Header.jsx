import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import MathJaxInline from '../mathjax-display/MathJaxInline';
import Home from '../home/Home';
import LeNombrePi from '../courses/pi/LeNombrePi';
import Shapes from '../courses/shapes/LesFormes';
import UsualFunctions from '../usual-functions/UsualFunctions';
import LeProduitEnCroix from '../courses/cross-product/LeProduitEnCroix';

import TablesTest from '../tables-test/TablesTest';
import PDFViewerPage from '../pdf-viewer/PDFViewerPage';
import CurriculumVitae from '../cv/CurriculumVitae';
import AppContext from '../context/AppContext'

import './Nav.css';
import './Header.css';

const Header = ({ pdfItems }) => {

    const {updateComponent, playMode} = React.useContext(AppContext);

    const [showToggle, setShowToggle] = React.useState(false);

    const findPdfItemById = (id) => {
        return pdfItems[id];
    }

    const goTo = (component) => {
        setShowToggle(false);
        updateComponent(component);
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
                <Navbar.Brand 
                    className="Clickable"
                    onClick={() => goTo(<Home />)}>
                    Maths pour tous
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav>
                        <NavDropdown title="Cours/exercices" id="basic-nav-dropdown">
                            <NavDropdown.Item 
                                onClick={() => {
                                    goTo(<LeNombrePi />);
                                }} >
                                Le nombre <MathJaxInline toShow={"$ \\pi $"} />
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
                            <NavDropdown.Item 
                                onClick={() => {
                                    goTo(<LeProduitEnCroix />);
                                }} >
                                Règle de 3
                            </NavDropdown.Item>
                        </NavDropdown> 
                        <NavDropdown title="BDs de Jean-Pierre Petit" id="basic-nav-dropdown">
                            {pdfItems.map(pdfItem => 
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
                    <Nav>
                        <Nav.Link 
                            onClick={() => goTo(<CurriculumVitae />)}>
                                Who am I ?
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
export default Header;