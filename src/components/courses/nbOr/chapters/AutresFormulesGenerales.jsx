import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const AutresFormulesGenerales = () => {

    var approxPhi1Begin =  "\\( \\phi^2 = \\phi + 1  \\)";
    var approxPhi11 =  "\\( \\sqrt{\\phi^2} = \\sqrt{\\phi + 1} \\)";
    var approxPhi12 =  "\\( \\phi = \\sqrt{\\phi + 1}  \\)";
    var approxPhi13 =  "\\( \\phi = \\sqrt{\\sqrt{\\phi + 1} + 1}  \\)";
    var approxPhi14 =  "\\( \\phi = \\sqrt{\\sqrt{\\sqrt{\\phi + 1} + 1} + 1}  \\)";
    var approxPhi15 =  "\\( \\phi = \\sqrt{\\sqrt{\\sqrt{\\sqrt{\\phi + 1} + 1} + 1} + 1}  \\)";
    var approxPhi1End = "\\( \\phi = \\sqrt{1 + \\sqrt{1 + \\sqrt{1 + \\sqrt{1 + {...} }}}} \\)"

    var approxPhi2Begin =  "\\( \\phi^{-1} = \\phi - 1 \\)";
    var approxPhi2Begin2 =  "\\( 1 + \\phi^{-1} = \\phi \\)";
    var approxPhi21 =  "\\( \\phi = 1 + \\phi^{-1}  \\)";
    var approxPhi22 =  "\\( \\phi = 1 + \\frac{1}{\\phi}  \\)";
    var approxPhi23 =  "\\( \\phi = 1 + \\frac{1}{1 + \\phi^{-1}}  \\)";
    var approxPhi24 =  "\\( \\phi = 1 + \\frac{1}{1 + \\frac{1}{\\phi} }  \\)";
    var approxPhi25 =  "\\( \\phi = 1 + \\frac{1}{1 + \\frac{1}{1 + \\phi^{-1} } }  \\)";
    var approxPhi26 =  "\\( \\phi = 1 + \\frac{1}{1 + \\frac{1}{1 + \\frac{1}{\\phi} } }  \\)";
    var approxPhi2End = "\\( \\phi = 1 + \\frac{1}{ 1 + \\frac{1}{ 1 + \\frac{1}{1 + \\frac{1}{1 + {...} }}}} \\)"
    
/*     var approxPhi3 = "\\( \\phi = 4 \\sum_{k =0}^{+\\infty} \\enspace \\frac{-1}{2k + 1} \\big( \\big( \\phi^{-1} \\big)^{2k+1} + \\big( \\phi^{-3} \\big)^{2k+1}   \\big) \\)"
 */
    return (
            <>
                <p className="Title2">a - Formule de la racine</p>
                <p>À partir de la formule : </p>
                <MathJaxDisplay toShow={approxPhi1Begin}/>
                <p>En mettant chaque terme sous la racine carrée, on a :</p>
                <MathJaxDisplay toShow={approxPhi11} demo />
                <MathJaxDisplay toShow={approxPhi12} demo />
                <p>On remplace <MathJaxInline toShow={"$ \\phi$"}/> par son expression</p>
                <MathJaxDisplay toShow={approxPhi13} demo />
                <p>En ainsi de suite...</p>
                <MathJaxDisplay toShow={approxPhi14} demo />    
                <MathJaxDisplay toShow={approxPhi15} demo />
                <Container className="Focus FocusHuge">
                    <MathJaxDisplay toShow={approxPhi1End} />
                </Container>

                <p className="Title2">b - Formule du quotient</p>
                <p>À partir de la formule </p>
                <MathJaxDisplay toShow={approxPhi2Begin}/>
                <p> qu'on arrange en </p>
                <MathJaxDisplay toShow={approxPhi2Begin2}/>
                <p>On a :</p>
                <MathJaxDisplay toShow={approxPhi21}/>
                <MathJaxDisplay toShow={approxPhi22}/>
                <p>On remplace <MathJaxInline toShow={"$ \\phi$"}/> par son expression</p>
                <MathJaxDisplay toShow={approxPhi23}/>
                <MathJaxDisplay toShow={approxPhi24}/>
                <p>En ainsi de suite...</p>
                <MathJaxDisplay toShow={approxPhi25}/>
                <MathJaxDisplay toShow={approxPhi26}/>
                <Container className="Focus FocusHuge">
                    <MathJaxDisplay toShow={approxPhi2End} infiniteFrac />
                </Container>

{/*                 <p className="Title2"> c - Formule de la somme</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPhi3} />
                </Container> */}
            </>
    );
}

export default AutresFormulesGenerales;