import React from 'react';
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
/* import { NavLink } from 'react-router-dom';
import { Envelope } from 'react-bootstrap-icons'; */
import AppContext from '../../context/AppContext'

import Themes from '../styles/Themes';
import pathBuilder from '../../helpers/pathBuilder';
import PagesConstants from './PagesConstants'; 
import { NavLink } from 'react-router-dom';

import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import './Nav.css';
import './Footer.css';

const Footer = ( {pdfItems} ) => {

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

    const {playMode, theme, updateTheme} = React.useContext(AppContext);

    function switchView() {
        updateTheme(theme === Themes.BRAZIL ? Themes.DARCULA : Themes.BRAZIL);
    }

    return (
            <Navbar 
                className={`CustomFooter CustomNav  ${playMode ? "Hidden" : ''}`}
                fixed="bottom"  
                expanded={showToggle}
                onToggle={() => {
                    setShowToggle(!showToggle);
                }}
                variant="dark" 
                expand="lg">   

                <Container className="SwitchButton">
                    <BootstrapSwitchButton 
                        size="lg" 
                        onlabel={`Switch to dark`}
                        onstyle='primary'
                        offlabel={`Switch to normal`}
                        offstyle='warning'
                        style={'w-50 mx-3'}
                        onChange={() => switchView()} />  
                </Container>
                <Navbar.Toggle aria-controls="basic-nav-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav /* onSelect={handleSelect} */>
                        <NavDropdown 
                            drop="up"
                            title="BDs scientifiques" 
                            id="scrollable">
                            {pdfItems.map(pdfItem => 
                                <NavDropdown.Item key={`pdf-${pdfItem.id}`} eventkey={pdfItem.id} as={NavLink} to={pathBuilder(`${PagesConstants.BDS_DE_JPP}${pdfItem.relativePath}`)} onClick={() => {retractToggleOnMobile()}} >
                                    {pdfItem.title}
                                </NavDropdown.Item>
                            )}
                            < hr/>
                            <NavDropdown.Item key={"pdf-home"} as={NavLink} to={pathBuilder(`${PagesConstants.BDS_DE_JPP}`)} onClick={() => {retractToggleOnMobile()}} >
                                Toutes les BDs
                            </NavDropdown.Item>                     
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default Footer;