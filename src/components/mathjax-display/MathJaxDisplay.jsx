import React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Container } from 'react-bootstrap';

import './MathJaxDisplay.css';
const MathJaxDisplay = ({toShow}) => {

    return (
        <Container className="MathJaxDisplay">      
            <MathJaxContext>
                <MathJax dynamic hideUntilTypeset={ "every" } >
                    {toShow}
                </MathJax>
            </MathJaxContext>
        </Container>
    );
}

export default MathJaxDisplay;