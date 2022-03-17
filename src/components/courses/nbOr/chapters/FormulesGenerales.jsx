import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';


const FormulesGenerales = () => {

    var approxPhi1Begin =  "$\\phi^2 = \\phi + 1  $";
    var approxPhi1 = "\\( \\phi = \\sqrt{1 + \\sqrt{1 + \\sqrt{1 + \\sqrt{1 + {...} }}}} \\)"

    var approxPhi2Begin =  "$ \\phi^{-1} = \\phi - 1 $";
    var approxPhi2Begin2 =  "$ 1 + \\phi^{-1} = \\phi $";
    var approxPhi2 = "\\( \\phi = 1 + \\frac{1}{ 1 + \\frac{1}{ 1 + \\frac{1}{1 + \\frac{1}{1 + {...} }}}} \\)"
    
    var approxPhi3 = "\\( \\phi = 4 \\sum_{k =0}^{+\\infty} \\enspace \\frac{-1}{2k + 1} \\big( \\big( \\phi^{-1} \\big)^{2k+1} + \\big( \\phi^{-3} \\big)^{2k+1}   \\big) \\)"

    return (
            <>
                <p className="Title1">Autres formules générales</p>
                <p className="Title2">Formule de la racine</p>
                <p>À partir de la formule <MathJaxInline toShow={approxPhi1Begin}/>, on a :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPhi1} />
                </Container>
                <p>{"\n"}{"\n"}Vérifions maintenant la seconde formule :</p>
                <p className="Title2">Formule du quotient</p>
                <p>À partir de la formule <MathJaxInline toShow={approxPhi2Begin}/>, qu'on arrange en <MathJaxInline toShow={approxPhi2Begin2}/> on a :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPhi2} infiniteFrac />
                </Container>
                <p className="Title2">Formule de la somme</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPhi3} />
                </Container>
            </>
    );
}

export default FormulesGenerales;