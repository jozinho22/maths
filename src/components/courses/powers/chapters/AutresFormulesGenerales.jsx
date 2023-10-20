import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Title1 from '../../helpers/Title1';

const AutresFormulesGenerales = () => {

    var xTimesYPowA = "\\( (x \\times y)^{a} = x^a \\times y^a \\)";
    var xTimesYPowADemo = "\\( (x \\times y)^{a} = \\underbrace{ (x \\times y) \\times (x \\times y) \\times (x \\times y) ...}_\\text{a fois} \\)";
    var xTimesYPowADemo2 = "\\( (x \\times y)^{a} = \\underbrace{ (x  \\times x  \\times x ...) }_\\text{a fois} \\underbrace{ (y  \\times y  \\times y ...) }_\\text{a fois} \\)";

    var xOnYPowA = "\\( \\Big(\\frac{x}{y}\\Big)^{a} = \\frac{x^a}{y^a}  \\)";
    var yDiff0 = "\\( avec \\;  y \\neq 0 \\)"
    var xOnYPowADemo = "\\( \\Big(\\frac{x}{y}\\Big)^{a} = \\underbrace{ \\frac{x}{y} \\times \\frac{x}{y} \\times \\frac{x}{y} ...}_\\text{a fois} \\)";
    var xOnYPowADemo2 = "\\( \\Big(\\frac{x}{y}\\Big)^{a} =  \\frac{ \\overbrace{x  \\times x  \\times x ... }^\\text{a fois} }  { \\underbrace{ y  \\times y  \\times y ... }_\\text{a fois} }  \\)";

    return (
            <>
                <Title1 title={"Puissance de produit"} />
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xTimesYPowA}/>
                </Container>
                <p>Car </p>
                <MathJaxDisplay toShow={xTimesYPowADemo} demo />
                <MathJaxDisplay toShow={xTimesYPowADemo2} demo />
                <MathJaxDisplay toShow={xTimesYPowA} demo />

                <Title1 title={"Puissance de quotient"} />
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xOnYPowA}/>
                    <MathJaxDisplay toShow={yDiff0} />
                </Container>
                <p>Idem que pour précédemment : </p>
                <MathJaxDisplay toShow={xOnYPowADemo} demo />
                <MathJaxDisplay toShow={xOnYPowADemo2} demo />
                <MathJaxDisplay toShow={xOnYPowA} demo />
                
            </>
    );
}

export default AutresFormulesGenerales;