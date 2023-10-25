import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const AutresFormulesGenerales = () => {

    var approxPhi1Begin =  "\\( \\phi^2 = \\phi + 1  \\)";
    var approxPhi11 =  "\\( \\sqrt{\\phi^2} = \\sqrt{\\phi + 1} \\)";
    var approxPhi12 =  "\\( \\phi = \\sqrt{\\phi + 1}  \\)";
    var approxPhi13 =  "\\( \\phi = \\sqrt{\\sqrt{\\phi + 1} + 1}  \\)";
    var approxPhi14 =  "\\( \\phi = \\sqrt{\\sqrt{\\sqrt{\\phi + 1} + 1} + 1}  \\)";
    var approxPhi15 =  "\\( \\phi = \\sqrt{\\sqrt{\\sqrt{\\sqrt{\\phi + 1} + 1} + 1} + 1}  \\)";
    var approxPhi1End = "\\( \\phi = lim_{n \\to +\\infty} \\enspace \\underbrace{ \\sqrt{1 + \\sqrt{1 + \\sqrt{1 + \\sqrt{1 + \\sqrt{...{\\sqrt{1 + \\phi }}  } }}}} } _\\text{n racines} \\)"

    var approxPhi2Begin =  "\\( \\phi^{-1} = \\phi - 1 \\)";
    var approxPhi2Begin2 =  "\\( 1 + \\phi^{-1} = \\phi \\)";
    var approxPhi21 =  "\\( \\phi = 1 + \\phi^{-1}  \\)";
    var approxPhi22 =  "\\( \\phi = 1 + \\frac{1}{\\phi}  \\)";
    var approxPhi23 =  "\\( \\phi = 1 + \\frac{1}{1 + \\phi^{-1}}  \\)";
    var approxPhi24 =  "\\( \\phi = 1 + \\frac{1}{1 + \\frac{1}{\\phi} }  \\)";
    var approxPhi25 =  "\\( \\phi = 1 + \\frac{1}{1 + \\frac{1}{1 + \\phi^{-1} } }  \\)";
    var approxPhi26 =  "\\( \\phi = 1 + \\frac{1}{1 + \\frac{1}{1 + \\frac{1}{\\phi} } }  \\)";
    var approxPhi2End = "\\( \\phi =  1 + \\frac{1}{ 1 + \\frac{1}{ 1 + \\frac{1}{1 + \\frac{1}{1 + {\\frac{1}{1 + \\frac{...}{1 + \\phi}} } }}}}  _\\text{n fractions} \\)"

    return (
            <>
                <Title1 title={"a) Formule de la racine infinie"} />
                <p>À partir de la formule : </p>
                <MathJaxDisplay toShow={approxPhi1Begin} demo/>
                <p>En mettant chaque terme sous la racine carrée, on a :</p>
                <MathJaxDisplay toShow={approxPhi11} demo />
                <MathJaxDisplay toShow={approxPhi12} demo />
                <p>On remplace <MathJaxInline toShow={"$ \\phi$"}/> par son expression :</p>
                <MathJaxDisplay toShow={approxPhi13} demo />
                <p>En ainsi de suite...</p>
                <MathJaxDisplay toShow={approxPhi14} demo />    
                <MathJaxDisplay toShow={approxPhi15} demo />
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPhi1End} />
                </Container>

                <Title1 title={"b) Formule du quotient infini"} />
                <p>À partir de la formule :</p>
                <MathJaxDisplay toShow={approxPhi2Begin} demo/>
                <p> qu'on arrange en :</p>
                <MathJaxDisplay toShow={approxPhi2Begin2} demo/>
                <p>On a :</p>
                <MathJaxDisplay toShow={approxPhi21} demo/>
                <MathJaxDisplay toShow={approxPhi22} demo/>
                <p>On remplace <MathJaxInline toShow={"$ \\phi$"}/> par son expression</p>
                <MathJaxDisplay toShow={approxPhi23} demo/>
                <MathJaxDisplay toShow={approxPhi24} demo/>
                <p>En ainsi de suite...</p>
                <MathJaxDisplay toShow={approxPhi25} demo infiniteFrac />
                <MathJaxDisplay toShow={approxPhi26} demo infiniteFrac />
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPhi2End} infiniteFrac />
                </Container>
            </>
    );
}

export default AutresFormulesGenerales;