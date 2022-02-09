import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { RiMailSendLine } from 'react-icons/ri';
import Contact from '../contact/Contact';
import './Footer.css';

const Footer = ( { setComponent } ) => {
  
  return (
    <Navbar className="CustomFooter" fixed="bottom" collapseOnSelect expand="lg">            
            <small className="CopyRight" > 
                Copyright &copy; Jozinho {(new Date().getFullYear())}
            </small>
            <RiMailSendLine 
              className="Contact"
              onClick={() => setComponent(<Contact />)} />
    </Navbar>
  );
}

export default Footer;