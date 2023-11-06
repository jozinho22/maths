import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import Link from '../../../immutable/nav/Link';

const EDL1CoefficientContinuExempleEquGenerale = () => {

    var EDL1 = "\\( y'(x) -5x. y(x) = e^{x^2} \\)";

    var EDL1Yh = "\\( y(x) = K(x) .e^{\\frac{5}{2}x^2} \\)";

    var EDL1EyPrim = "\\( y'(x) = K'(x) e^{\\frac{5}{2}x^2} + 5x. K(x).e^{\\frac{5}{2}x^2} \\)";
    var EDL1EInj = "\\( y'(x) -5x. y(x) = K'(x) .e^{\\frac{5}{2}x^2}  + 5x. K(x).e^{\\frac{5}{2}x^2} -5x.K(x) .e^{\\frac{5}{2}x^2}  \\)";
    var EDL1EInj2 = "\\( y'(x) -5x. y(x) = K'(x). e^{\\frac{5}{2}x^2}  \\)";

    var EDL1E2 = "\\( f(x) = K'(x). e^{\\frac{5}{2}x^2}  \\)";
    var EDL1E2bis = "\\( K'(x) = f(x). e^{-\\frac{5}{2}x^2}  \\)";
    var EDL1E2bis2 = "\\( K'(x) = e^{x^2}. e^{-\\frac{5}{2}x^2}  \\)";
    var EDL1E2bis3 = "\\( K'(x) = e^{-\\frac{3}{2}x^2}  \\)";

    var EDL1EK = "\\(  K(x) = \\int^x f(t) e^{-\\frac{3}{2}t^2}dt \\)";
    var EDL1EK2 = "\\(  K(x) = \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}. erf \\left (\\frac{\\sqrt{3}}{\\sqrt{2}}x \\right) \\)";
    
    var erf = "\\(  erf(x) = \\frac{2}{\\pi} \\int_0^x e^{-t^2} dt \\)";

    var EDL1EY0 = "\\(  y_0(x) = \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}} . erf \\left (\\frac{\\sqrt{3}}{\\sqrt{2}}x \\right) .e^{\\frac{5}{2}x^2} \\)";

    var EDL1EYg = "\\(  y_g(x) = y_h(x) + y_0(x) \\)";
    var EDL1EYg2 = "\\(  y_g(x) = K_h. e^{\\frac{5}{2}x^2} + \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}} .erf \\left(\\frac{\\sqrt{3}}{\\sqrt{2}}x \\right) e^{\\frac{5}{2}x^2}  \\)";

    return  <>
                <p>À présent, tentons de résoudre l'équation générale <MathJaxInline toShow={"$ (E) $"} />.</p>
                <MathJaxDisplay toShow={EDL1} fRef={"E"} demo />

                <Title1 title={"2) Résolution de l'équation (E)"} />
                
                <Title2 title={"2-a) Méthode de Lagrange"} />
                <p>On démarre de l'équation :</p>
                <MathJaxDisplay toShow={EDL1Yh} fRef={1} demo />
                <p>On calcule l'expression de <MathJaxInline toShow={"$ y' $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EyPrim} demo />

                <MathJaxDisplay toShow={EDL1EInj} demo />
                <MathJaxDisplay toShow={EDL1EInj2} fRef={2} demo />

                <p>Soit en réunissant  les membres de droite de <MathJaxInline toShow={"$ (2) $"} /> et <MathJaxInline toShow={"$ (E) $"} /> : </p>
                <MathJaxDisplay toShow={EDL1E2} demo />
                <p>Soit en arrangeant :</p>
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
                <p>En réinjectant <MathJaxInline toShow={"$ K(x) $"} /> dans l'équation <MathJaxInline toShow={"$ (1) $"} />, on a pour la solution particulière <MathJaxInline toShow={"$ y_0 $"} /> : </p>
                <MathJaxDisplay toShow={EDL1EY0} demo />


                <Title1 title={"3) Solution générale"} />
                <p>Nous avons comme solution générale, la somme de la solution de l'équation homogène <MathJaxInline toShow={"$ (H) $"} /> et de la solution particulière de <MathJaxInline toShow={"$ (E) $"} />, soit :</p>
                <MathJaxDisplay toShow={EDL1EYg} demo />
                <MathJaxDisplay toShow={EDL1EYg2} demo />

                <p>Tentons de vérifier si la solution trouvée convient bien.</p>
            </>
}

export default EDL1CoefficientContinuExempleEquGenerale;