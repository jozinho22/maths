import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
/* import { NavLink } from 'react-router-dom';
import { Envelope } from 'react-bootstrap-icons'; */
import AppContext from '../../context/AppContext'

import Themes from '../../../styles/Themes';

import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import PagesConstants from './PagesConstants';
import { NavLink } from 'react-router-dom';
import pathBuilder from '../../helpers/pathBuilder';

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
                        offlabel={`Switch to dark`}
                        onlabel={`Switch to normal`}
                        onstyle='primary'
                        offstyle='warning'
                        style={'w-50 mx-3'}
                        onChange={() => switchView()} />  
                </Container>
                <div className="LawLinks">
                    <NavLink to={pathBuilder(PagesConstants.COOKIES_POLITICS)}>
                        Politique de cookies
                    </NavLink>
                    <NavLink to={pathBuilder(PagesConstants.MENTIONS_LEGALES)}>
                        Mentions légales
                    </NavLink>
                </div>
            </Navbar>
    );
}

export default Footer;