import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const AutresFormulesGenerales = () => {

    var approxPi1 = "\\( \\frac{\\pi}{4} = \\frac{1}{ 1 + \\frac{1^2}{ 3 + \\frac{2^2}{5 + \\frac{3^2}{7 + {...} }}}} \\)"

    var approxPi2 = "\\( \\frac{\\pi^2}{6} = \\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{3^2} + \\frac{1}{4^2} + {...} \\)"

    var approxPi3 = "\\( \\pi = \\int_{-1}^1 \\frac{dx}{\\sqrt{1 - x^2}} \\)"

    return (
            <>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPi1} infiniteFrac />  
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPi2} />  
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPi3} />  
                </Container>
            </>
    );
}

export default AutresFormulesGenerales;