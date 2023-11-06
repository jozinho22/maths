import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const EDL1CoefficientContinuExempleEquHomogene = () => {

    var EDL1 = "\\( y'(x) -5x. y(x) = e^{x^2} \\)";

    var EDL1H = "\\( y'(x) -5x. y(x) = 0 \\)";
    var EDL1HDemo = "\\( y'(x) = 5x.y(x) \\)";
    var EDL1HDemo2 = "\\( \\frac{y'(x)}{y(x)} = 5x  \\)";
    var EDL1HDemo3 = "\\( \\int^x \\frac{y'(t)}{y(t)} dt = \\int^x 5t. dt \\)";
    var EDL1HDemo4 = "\\( ln|y(x)| = \\frac{5}{2}x^2 + C , \\enspace (avec \\enspace C \\in \\mathbb{R}) \\)";

    var EDL1HDemo5 = "\\( y(x) = K. e^{\\frac{5}{2}x^2}\\)";
    var EDL1HDemo6 = "\\( y_h(x) = K. e^{\\frac{5}{2}x^2} \\)";

    return  <>
                <p>Tentons de résoudre l'équation <MathJaxInline toShow={"$ (E) $"} /> ci-dessous :</p>
                <MathJaxDisplay toShow={EDL1} fRef={"E"} demo />

                <Title1 title={"1) Résolution de l'équation homogène (H)"} />
                <MathJaxDisplay toShow={EDL1H} fRef={"H"} demo />
                <p>Soit en arrangeant l'expression, il vient :</p>
                <MathJaxDisplay toShow={EDL1HDemo} demo />
                <MathJaxDisplay toShow={EDL1HDemo2} demo />
                <p>On intègre des deux côtés :</p>
                <MathJaxDisplay toShow={EDL1HDemo3} demo />
                <MathJaxDisplay toShow={EDL1HDemo4} demo />
                <MathJaxDisplay toShow={EDL1HDemo5} demo />
                <p>Soit une expression pour <MathJaxInline toShow={"$ y_h $"} /> :</p>
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={EDL1HDemo6} />
                </Container>
            </>
}

export default EDL1CoefficientContinuExempleEquHomogene;