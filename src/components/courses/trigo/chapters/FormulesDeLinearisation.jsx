import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const FormulesDeLinearisation = () => {

    var cosAcosB = "\\(cos(\\alpha)cos(\\beta) = \\frac{1}{2} \\left(cos(\\alpha - \\beta) + cos(\\alpha + \\beta)\\right) \\)";
    var sinAsinB = "\\(sin(\\alpha)sin(\\beta) = \\frac{1}{2} \\left(cos(\\alpha - \\beta) - cos(\\alpha + \\beta)\\right) \\)";
    var sinAcosB = "\\(sin(\\alpha)cos(\\beta) = \\frac{1}{2} \\left(sin(\\alpha + \\beta) + sin(\\alpha - \\beta)\\right) \\)";
    var cos22a = "\\(cos(2\\alpha) = \\frac{1 + cos(2\\alpha)}{2} \\)";
    var sin22a = "\\(sin(2\\alpha) = \\frac{1 - cos(2\\alpha)}{2} \\)";

    return (
            <>      
                <Container className="Focus">
                    <MathJaxDisplay toShow={sinAsinB} />
                    <MathJaxDisplay toShow={sinAcosB} />
                    <MathJaxDisplay toShow={cosAcosB} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={sin22a} />
                    <MathJaxDisplay toShow={cos22a} />
                </Container>
            </>
    )
}

export default FormulesDeLinearisation;