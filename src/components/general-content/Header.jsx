import { Navbar, Nav, DropdownButton, Dropdown, NavDropdown } from 'react-bootstrap';

import './Header.css';

const Header = () => {

  var pdfItems = [];

  var pdfNbOr = {
    path: '/pdf-viewer/nbOr',
    title: 'Le nombre d\'or'
  }
  var pdf2 = {
    path: '/pdf-viewer/2',
    title: 'Le nombre d\'or'
  }

  pdfItems.push(pdfNbOr, pdf2);

    return (
          <Navbar className="CustomNav" fixed="top" collapseOnSelect variant="dark" expand="lg">

            <Navbar.Brand href="/">Maths pour tous</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>

                <Nav.Link href="/tables-test">Réviser ses tables</Nav.Link>

                <NavDropdown title="Cours/exercices en PDF" id="basic-nav-dropdown">
                   {pdfItems.map(item => 
                        <NavDropdown.Item href={item.path}>{item.title}</NavDropdown.Item>
                    )}
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
    
export default Header;