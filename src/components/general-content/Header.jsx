import React from 'react';
import { Navbar, Nav, DropdownButton, Dropdown, NavDropdown, Row, Col } from 'react-bootstrap';
import TablesTest from '../tables/TablesTest';
import UsualFunctions from '../usual-functions/UsualFunctions';
import PDFViewerPage from '../pdf-viewer/PDFViewerPage';

import './Nav.css';
import './Header.css';

const Header = ({ pdfItems, setComponent }) => {

    var pdfCoursesItems = []
    var pdfAlbumsItems = []

    for(var k = 0; k < pdfItems.length; k++) {
        if(pdfItems[k].type === 'courses') {
            pdfCoursesItems.push(pdfItems[k]);
        } else if(pdfItems[k].type === 'albums') {
            pdfAlbumsItems.push(pdfItems[k]);
        }
    }

    const unCollapse = () => {

        const navToggle = document.getElementById('responsive-navbar-nav');
        const navLinks = document.querySelectorAll('.dropdown-item')

        navLinks.forEach((l) => {
          l.addEventListener('click', () => { navToggle.classList.remove('show'); })
        });
    }

    const findPdfItemById = (id) => {
      console.log(id)
      console.log(pdfItems[id])

      return pdfItems[id];
    }

    return (
          <Navbar className="CustomHeader CustomNav" fixed="top" collapseOnSelect variant="dark" expand="lg">

              <Navbar.Brand href="/">Maths pour tous</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav>
                      <NavDropdown title="Cours/exercices en PDF" id="basic-nav-dropdown">
                          {pdfCoursesItems.map(pdfItem => 
                              <NavDropdown.Item 
                                  key= {pdfItem.id}
                                  onClick={() => {
                                      unCollapse();
                                      setComponent(
                                        <PDFViewerPage 
                                          pdfItem={findPdfItemById(pdfItem.id)} />
                                      );
                                  }} >
                                  {pdfItem.title}
                              </NavDropdown.Item>
                            )}
                      </NavDropdown>
                      <NavDropdown title="BDs de Jean-Pierre Petit" id="basic-nav-dropdown">
                          {pdfAlbumsItems.map(pdfItem => 
                              <NavDropdown.Item 
                                  key= {pdfItem.id}
                                  onClick={() => {
                                      unCollapse();
                                      setComponent(
                                        <PDFViewerPage 
                                          pdfItem={findPdfItemById(pdfItem.id)} />
                                      );
                                  }} >
                                  {pdfItem.title}
                              </NavDropdown.Item>
                            )}
                      </NavDropdown>
                      <NavDropdown title="Divers" id="basic-nav-dropdown">
                          <NavDropdown.Item 
                              onClick={() =>{
                                unCollapse();
                                setComponent(<TablesTest />);
                              }} >
                                Réviser ses tables
                          </NavDropdown.Item>
                          <NavDropdown.Item 
                              onClick={() => {
                                unCollapse();
                                setComponent(<UsualFunctions />);
                              }} >
                                Fonctions usuelles
                          </NavDropdown.Item>
                          <NavDropdown.Item 
                              onClick={() => {
                                unCollapse();
                                setComponent(<UsualFunctions />);
                              }} >
                                Formes
                          </NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        );
    }
    
export default Header;