import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const FormulesDeLinearisation = () => {

    var cosAcosB =  "\\(cos(\\alpha)cos(\\beta) = \\frac{1}{2} (cos(\\alpha - \\beta) + cos(\\alpha + \\beta)) \\)";
    var sinAsinB =  "\\(sin(\\alpha)sin(\\beta) = \\frac{1}{2} (cos(\\alpha - \\beta) - cos(\\alpha + \\beta)) \\)";
    var sinAcosB =  "\\(sin(\\alpha)cos(\\beta) = \\frac{1}{2} (sin(\\alpha + \\beta) + sin(\\alpha - \\beta)) \\)";
    var cos22a =  "\\(cos(2\\alpha) = \\frac{1 + cos(2\\alpha)}{2} \\)";
    var sin22a =  "\\(sin(2\\alpha) = \\frac{1 - cos(2\\alpha)}{2} \\)";

    return (
            <>      
                <Container className="Focus">
                    <MathJaxDisplay toShow={cosAcosB} />
                    <MathJaxDisplay toShow={sinAsinB} />
                    <MathJaxDisplay toShow={sinAcosB} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={cos22a} />
                    <MathJaxDisplay toShow={sin22a} />
                </Container>
            </>
    )
}

export default FormulesDeLinearisation;