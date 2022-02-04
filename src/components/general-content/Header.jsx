import { Navbar, Nav, DropdownButton, Dropdown, NavDropdown } from 'react-bootstrap';

import './Header.css';

const Header = ({pdfCoursesInfos, pdfAlbumsInfos}) => {

    return (
          <Navbar className="CustomNav" fixed="top" collapseOnSelect variant="dark" expand="lg">

            <Navbar.Brand href="/">Maths pour tous</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>

                <Nav.Link href="/tables-test">Réviser ses tables</Nav.Link>
                <Nav.Link href="/charts">Fonctions usuelles</Nav.Link>

 {/*                <NavDropdown title="Cours/exercices en PDF" id="basic-nav-dropdown">
                   {pdfCoursesInfos.map(pdfInfo => 
                        <NavDropdown.Item 
                          key= {pdfInfo.id}
                          href={`/pdf-viewer/${pdfInfo.relativePath}`}>{pdfInfo.title}
                        </NavDropdown.Item>
                    )}
                </NavDropdown> */}
                <NavDropdown title="BD de Jean-Pierre Petit" id="basic-nav-dropdown">
                   {pdfAlbumsInfos.map(pdfInfo => 
                        <NavDropdown.Item 
                          key= {pdfInfo.id}
                          href={`/pdf-viewer/${pdfInfo.relativePath}`}>{pdfInfo.title}
                        </NavDropdown.Item>
                    )}
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
    
export default Header;