import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { RiMailSendLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  
  return (
    <Navbar className="CustomFooter" fixed="bottom" collapseOnSelect expand="lg">            
            <small className="CopyRight" > 
                Copyright &copy; Jozinho {(new Date().getFullYear())}
            </small>
            <Link to="/contact">
                <RiMailSendLine className="Contact" />
            </Link>
    </Navbar>
  );
}

export default Footer;