import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const ALapuissanceZero = () => {
    
    var xPow0 = "\\( x^n  \\times x^0 = x^{n+0} \\)";
    var xPow02 = "\\( x^n  \\times x^0 = x^{n} \\)";
    var xPow03 = "\\( x^0  = 1 \\)";

    return (
            <>
                <p className="Title1">À La puissance zéro</p>
                <p>Avec la formule <MathJaxInline toShow={"$(1)$"} />, on peut dire que : </p>
                <MathJaxDisplay toShow={xPow0} demo />
                <p>Soit </p>
                <MathJaxDisplay toShow={xPow02} demo />
                <p>On en conclue que dans tous les cas : </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xPow03} fRef={2} />
                </Container>
            </>
    );
}

export default ALapuissanceZero;