import React from 'react';
import { Container } from 'react-bootstrap';

import './general-content/styles/Basic.css';
import './general-content/styles/Canevas.css';
import './general-content/alert/Alert.css';

const AppManager = ({component, setComponent}) => {

    return (
        <Container 
            className="RelativeContainer" >
            {component}
        </Container>
    );
}

export default AppManager;