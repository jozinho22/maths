import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
  
  return (
    <Navbar className="CustomFooter" fixed="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">            
            <small className="CopyRight" > 
                Copyright &copy; Jozinho {(new Date().getFullYear())}
            </small>
    </Navbar>
  );
}

export default Footer;