import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const LienEntreFormeAlgebriqueEtTrigonometrique = () => {

    var zGenRelation = "\\( z = x + i y = |z| . \\left[cos(\\theta) + i sin(\\theta ) \\right] \\)"; 
    var xy = "\\( \\Biggl\\{ \\begin{gather*} x = |z| . cos(\\theta) \\\\  y = |z| . sin(\\theta) \\end{gather*} \\)"; 
    var cosThetaSinTheta = "\\( \\Biggl\\{ \\begin{gather*}  cos(\\theta) = \\frac{x}{|z|} \\\\  sin(\\theta) = \\frac{y}{|z|} \\end{gather*} \\)"; 
    var cosThetaSinTheta2 = "\\( \\Biggl\\{ \\begin{gather*}  cos(\\theta) = \\frac{x}{\\sqrt{x^2 + y^2}} \\\\  sin(\\theta) = \\frac{y}{\\sqrt{x^2 + y^2}} \\end{gather*} \\)"; 

    return  <>
                <p>Soit un nombre complexe <MathJaxInline toShow={"$  z = |z| . \\left[cos(\\theta) + i sin(\\theta ) \\right]  $"} />.</p>
                <p>On l'a vu, on peut maintenant définir un nombre complexe sous sa forme trigonométrique avec des coordonnées polaires.</p>

                <Title1 title={"Liens entre la forme algébrique à la forme trigonométrique"} />
                <p>On a comme relation entre les deux formes : </p>
                <MathJaxDisplay toShow={zGenRelation} demo />
                <MathJaxDisplay toShow={xy} demo />
                <MathJaxDisplay toShow={cosThetaSinTheta} demo />
                <Container className="Focus">
                    <MathJaxDisplay toShow={cosThetaSinTheta2} />
                </Container>
            </>
}

export default LienEntreFormeAlgebriqueEtTrigonometrique;