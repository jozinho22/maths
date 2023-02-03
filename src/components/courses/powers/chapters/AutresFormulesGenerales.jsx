import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const AutresFormulesGenerales = () => {

    var xTimesYPowA = "\\( (x \\times y)^{a} = x^a \\times y^a \\)";
    var xTimesYPowADemo = "\\( (x \\times y)^{a} = \\underbrace{ (x \\times y) \\times (x \\times y) \\times (x \\times y) ...}_\\text{a fois} \\)";
    var xTimesYPowADemo2 = "\\( (x \\times y)^{a} = \\underbrace{ (x  \\times x  \\times x ...) }_\\text{a fois} \\underbrace{ (y  \\times y  \\times y ...) }_\\text{a fois} \\)";

    var xOnYPowA = "\\( \\Big(\\frac{x}{y}\\Big)^{a} = \\frac{x^a}{y^a}  \\)";
    var yDiff0 = "\\( avec \\;  y \\neq 0\\)"
    var xOnYPowADemo = "\\( \\Big(\\frac{x}{y}\\Big)^{a} = \\underbrace{ \\frac{x}{y} \\times \\frac{x}{y} \\times \\frac{x}{y} ...}_\\text{a fois} \\)";
    var xOnYPowADemo2 = "\\( \\Big(\\frac{x}{y}\\Big)^{a} =  \\frac{ \\overbrace{x  \\times x  \\times x ... }^\\text{a fois} }  { \\underbrace{ y  \\times y  \\times y ... }_\\text{a fois} }  \\)";

    var xPowAOnXPowB = "\\( \\frac{x^a}{x^b} = x^{a - b} \\)";
    var xDiff0 = "\\( avec \\; x \\neq 0\\)"
    var xPowAOnXPowBDemo = "\\( \\frac{x^a}{x^b} = x^a x^{-b} \\)";
    var xPowAOnXPowBDemo2 = "\\( \\frac{x^a}{x^b} = x^{a + (- b)} \\)";
    var xPowAOnXPowBDemo3 = "\\( \\frac{x^a}{x^b} = x^{a - b} \\)";

    return (
            <>
                <p className="Title2">Puissance de produit</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xTimesYPowA}/>
                </Container>
                <p>Car </p>
                <MathJaxDisplay toShow={xTimesYPowADemo} demo />
                <MathJaxDisplay toShow={xTimesYPowADemo2} demo />
                <MathJaxDisplay toShow={xTimesYPowA} demo />

                <p className="Title2">Puissance de quotient</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xOnYPowA}/>
                    <MathJaxInline toShow={yDiff0} />
                </Container>
                <p>Idem que pour précédemment : </p>
                <MathJaxDisplay toShow={xOnYPowADemo} demo />
                <MathJaxDisplay toShow={xOnYPowADemo2} demo />
                <MathJaxDisplay toShow={xOnYPowA} demo />

                <p className="Title2">Quotient de puissance</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xPowAOnXPowB}/>
                    <MathJaxInline toShow={xDiff0} />
                </Container>
                <p>Car avec <MathJaxInline toShow={"$(4)$"} /> on a vu que :</p>
                <MathJaxDisplay toShow={xPowAOnXPowBDemo} demo />
                <p>et avec <MathJaxInline toShow={"$(1)$"} /> on a :</p>
                <MathJaxDisplay toShow={xPowAOnXPowBDemo2} demo/>
                <MathJaxDisplay toShow={xPowAOnXPowBDemo3} demo/>
            </>
    );
}

export default AutresFormulesGenerales;