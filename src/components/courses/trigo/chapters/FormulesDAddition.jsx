import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const FormulesDAddition = () => {

    var cosAplusB = "\\(cos(\\alpha + \\beta) = cos(\\alpha) cos(\\beta) - sin(\\alpha) sin(\\beta) \\)";
    var cosAminusB = "\\(cos(\\alpha - \\beta) = cos(\\alpha) cos(\\beta) + sin(\\alpha) sin(\\beta) \\)";
    var sinAplusB = "\\(sin(\\alpha + \\beta) = sin(\\alpha) cos(\\beta) + sin(\\beta) cos(\\alpha) \\)";
    var sinAminusB = "\\(sin(\\alpha - \\beta) = sin(\\alpha) cos(\\beta) - sin(\\beta) cos(\\alpha) \\)";

    return (
        <>      
            <Container className="Focus">
                <MathJaxDisplay toShow={sinAplusB} fRef={2} />
                <MathJaxDisplay toShow={sinAminusB} />
                <MathJaxDisplay toShow={cosAplusB} fRef={3} />
                <MathJaxDisplay toShow={cosAminusB} />
            </Container> 
        </>
    )
}

export default FormulesDAddition;