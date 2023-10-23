import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const FormulesDeLinearisation = () => {

    var cosAcosB = "\\(cos(\\alpha) cos(\\beta) = \\frac{1}{2} \\left(cos(\\alpha - \\beta) + cos(\\alpha + \\beta)\\right) \\)";
    var sinAsinB = "\\(sin(\\alpha) sin(\\beta) = \\frac{1}{2} \\left(cos(\\alpha - \\beta) - cos(\\alpha + \\beta)\\right) \\)";
    var sinAcosB = "\\(sin(\\alpha) cos(\\beta) = \\frac{1}{2} \\left(sin(\\alpha + \\beta) + sin(\\alpha - \\beta)\\right) \\)";

    return (
            <>      
                <Container className="Focus">
                    <MathJaxDisplay toShow={sinAsinB} />
                    <MathJaxDisplay toShow={sinAcosB} />
                    <MathJaxDisplay toShow={cosAcosB} />
                </Container>
            </>
    )
}

export default FormulesDeLinearisation;