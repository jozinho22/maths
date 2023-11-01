import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
/* import { NavLink } from 'react-router-dom';
import { Envelope } from 'react-bootstrap-icons'; */
import AppContext from '../../context/AppContext'

import Themes from '../styles/Themes';

import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import './Nav.css';
import './Footer.css';

const Footer = () => {

    const {playMode, theme, updateTheme} = React.useContext(AppContext);

    function switchView() {
        updateTheme(theme === Themes.BRAZIL ? Themes.DARCULA : Themes.BRAZIL);
    }

    return (
            <Navbar 
                className={`CustomFooter CustomNav ${playMode ? "Hidden" : ''}`}
                fixed="bottom"  
                variant="dark" 
                expand="lg">   
                <Container className="SwitchButton">
                    <BootstrapSwitchButton 
                        size="lg" 
                        onlabel={`Switch to normal`}
                        onstyle='primary'
                        offlabel={`Switch to dark`}
                        offstyle='warning'
                        style={'w-50 mx-3'}
                        onChange={() => switchView()} />  
                </Container>
            </Navbar>
    );
}

export default Footer;