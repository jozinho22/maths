import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import Link from '../../../immutable/nav/Link';

const EDL1CoefficientContinuExemple = () => {

    var EDL1 = "\\( y'(x) -5x. y(x) = e^{x^2} \\)";

    var EDL1H = "\\( y'(x) -5x. y(x) = 0 \\)";
    var EDL1HDemo = "\\( y'(x) = 5x.y(x) \\)";
    var EDL1HDemo2 = "\\( \\frac{y'(x)}{y(x)} = 5x  \\)";
    var EDL1HDemo3 = "\\( \\int^x \\frac{y'(t)}{y(t)} dt = \\int^x 5t. dt \\)";
    var EDL1HDemo4 = "\\( ln|y(x)| = \\frac{5}{2}x^2 + C , \\enspace (avec \\enspace C \\in \\mathbb{R}) \\)";

    var EDL1HDemo5 = "\\( y(x) = K. e^{- A(x)}\\)";
    var EDL1HDemo6 = "\\( y_h(x) = K. e^{\\frac{5}{2}x^2} \\)";
    
    var EDL1Yh = "\\( y(x) = K(x) .e^{\\frac{5}{2}x^2} \\)";

    var EDL1EyPrim = "\\( y'(x) = K'(x) e^{\\frac{5}{2}x^2} + 5x. K(x).e^{\\frac{5}{2}x^2} \\)";
    var EDL1EInj = "\\( y'(x) -5x. y(x) = K'(x) .e^{\\frac{5}{2}x^2}  + 5x. K(x).e^{\\frac{5}{2}x^2} -5x.K(x) .e^{\\frac{5}{2}x^2}  \\)";
    var EDL1EInj2 = "\\( y'(x) -5x. y(x) = K'(x). e^{\\frac{5}{2}x^2}  \\)";

    var EDL1E2 = "\\( f(x) = K'(x). e^{\\frac{5}{2}x^2}  \\)";
    var EDL1E2bis = "\\( K'(x) = f(x). e^{-\\frac{5}{2}x^2}  \\)";
    var EDL1E2bis2 = "\\( K'(x) = e^{x^2}. e^{-\\frac{5}{2}x^2}  \\)";
    var EDL1E2bis3 = "\\( K'(x) = e^{-\\frac{3}{2}x^2}  \\)";

    var EDL1EK = "\\(  K(x) = \\int^x f(t) e^{-\\frac{3}{2}t^2}dt \\)";
    var EDL1EK2 = "\\(  K(x) = \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}. erf(\\frac{\\sqrt{3}}{\\sqrt{2}}x) \\)";
    
    var erf = "\\(  erf(x) = \\frac{2}{\\pi} \\int_0^x e^{-t^2} dt \\)";

    var EDL1EY0 = "\\(  y_0(x) = \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}} . erf(\\frac{\\sqrt{3}}{\\sqrt{2}}x) .e^{\\frac{5}{2}x^2} \\)";

    var EDL1EYg = "\\(  y_g(x) = y_h(x) + y_0(x) \\)";
    var EDL1EYg2 = "\\(  y_g(x) = K_h. e^{\\frac{5}{2}x^2} + \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}} .erf(\\frac{\\sqrt{3}}{\\sqrt{2}}x) e^{\\frac{5}{2}x^2}  \\)";

    return  <>
                <p>Tentons de résoudre l'équation <MathJaxInline toShow={"$ (E) $"} /> ci-dessous :</p>
                <MathJaxDisplay toShow={EDL1} fRef={"E"} demo />

                <Title1 title={"1) Résolution de l'équation homogène (H)"} />
                <MathJaxDisplay toShow={EDL1H} fRef={"H"} demo />
                <p>Soit en arrangeant l'expression :</p>
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

                <Title1 title={"2) Résolution de l'équation (E)"} />
                
                <Title2 title={"2-a) Méthode de Lagrange"} />
                <p>On démarre de l'équation :</p>
                <MathJaxDisplay toShow={EDL1Yh} fRef={1} demo />
                <MathJaxDisplay toShow={EDL1EyPrim} demo />

                <MathJaxDisplay toShow={EDL1EInj} demo />
                <MathJaxDisplay toShow={EDL1EInj2} demo />

                <p>Soit en réunissant <MathJaxInline toShow={"$ (H) $"} /> et <MathJaxInline toShow={"$ (E) $"} /> : </p>
                <MathJaxDisplay toShow={EDL1E2} demo />
                <MathJaxDisplay toShow={EDL1E2bis} demo />
                <MathJaxDisplay toShow={EDL1E2bis2} demo />
                <MathJaxDisplay toShow={EDL1E2bis3} demo />

                <Title2 title={"2-b) Intégration pour déterminer K(x)"} />
                <p>Intégrons maintenant les deux membres de cette équation, et ainsi déterminer une expression de la fonction <MathJaxInline toShow={"$ K(x) $"} />.</p>
                <MathJaxDisplay toShow={EDL1EK} demo />
                <MathJaxDisplay toShow={EDL1EK2} demo />
                <p>Ici, <MathJaxInline toShow={"$ erf(x) $"} /> est <Link url={"https://en.wikipedia.org/wiki/Error_function"} external>la fonction erreur</Link> définie par : </p>
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={erf} />
                </Container>
                <p>En réinjectant <MathJaxInline toShow={"$ K(x) $"} /> dans l'équation <MathJaxInline toShow={"$ (1) $"} />, on a pour la solution particulière <MathJaxInline toShow={"$ y_0 $"} /></p>
                <MathJaxDisplay toShow={EDL1EY0} demo />


                <Title1 title={"3) Solution générale"} />
                <p>Nous avons comme solution générale, la somme de la solution de l'équation homogène <MathJaxInline toShow={"$ (H) $"} /> et de la solution particulière de <MathJaxInline toShow={"$ (E) $"} />, soit :</p>
                <MathJaxDisplay toShow={EDL1EYg} demo />
                <MathJaxDisplay toShow={EDL1EYg2} demo />

                <p>Tentons de vérifier si la solution trouvée convient bien.</p>
            </>
}

export default EDL1CoefficientContinuExemple;