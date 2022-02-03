import React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Container } from 'react-bootstrap';

import './MathJaxDisplay.css';
const MathJaxDisplay = ({toShow, color}) => {

    return (
        <Container className={`MathJaxDisplay ${color}MathJaxText`}>      
            <MathJaxContext>
                <MathJax dynamic hideUntilTypeset={ "every" } >
                    {toShow}
                </MathJax>
            </MathJaxContext>
        </Container>
    );
}

export default MathJaxDisplay;