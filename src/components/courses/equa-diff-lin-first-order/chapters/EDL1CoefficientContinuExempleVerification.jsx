import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const EDL1CoefficientContinuExempleVerification = () => {

    var EDL1 = "\\( y'(x) -5x. y(x) = e^{x^2} \\)";

    var EDL1EYg = "\\(  y_g(x) =  K_h. e^{\\frac{5}{2}x^2} + \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}} . erf \\left(\\frac{\\sqrt{3}}{\\sqrt{2}}x \\right) e^{\\frac{5}{2}x^2}  \\)";

    var EDL1EYgPrim = "\\(  y_g'(x) = 5x.K_h. e^{\\frac{5}{2}x^2} + \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}5x.e^{\\frac{5}{2}x^2} .erf(\\frac{\\sqrt{3}}{\\sqrt{2}}x) + \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}.e^{\\frac{5}{2}x^2} . \\Biggl(erf(\\frac{\\sqrt{3}}{\\sqrt{2}}x) \\Biggr)' \\)";

    var EDL1EVerif = "\\(  y_g'(x) -5x.y_g(x)  = 5x.K_h. e^{\\frac{5}{2}x^2} + \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}5x.e^{\\frac{5}{2}x^2} .erf \\left(\\frac{\\sqrt{3}}{\\sqrt{2}}x \\right) + \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}.e^{\\frac{5}{2}x^2} . \\Biggl(erf(\\frac{\\sqrt{3}}{\\sqrt{2}}x) \\Biggr)' -5x.\\Biggl(K_h. e^{\\frac{5}{2}x^2} + \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}} .erf \\left(\\frac{\\sqrt{3}}{\\sqrt{2}}x \\right). e^{\\frac{5}{2}x^2} \\Biggr) \\)";
    var EDL1EVerif2 = "\\(  y_g'(x) -5x.y_g(x)  = \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}.e^{\\frac{5}{2}x^2} . \\Biggl(erf \\left(\\frac{\\sqrt{3}}{\\sqrt{2}}x \\right) \\Biggr)' \\)";
    var EDL1EVerif3 = "\\(  y_g'(x) -5x.y_g(x)  = \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}.e^{\\frac{5}{2}x^2} . \\Biggl( \\frac{2}{\\sqrt{\\pi}} \\int_0^{\\frac{\\sqrt{3}}{\\sqrt{2}}x} e^{-t^2} dt \\Biggr)' \\)";
    var EDL1EVerif3bis = "\\(  y_g'(x) -5x.y_g(x)  = \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}.\\frac{\\sqrt{2}\\sqrt{2}}{\\sqrt{\\pi}} .e^{\\frac{5}{2}x^2} . \\Biggl( \\int_0^{\\frac{\\sqrt{3}}{\\sqrt{2}}x} e^{-t^2} dt \\Biggr)' \\)";

    var leibniz = "\\( \\Biggl( \\int_{a(x)}^{b(x)} f(x, t)dt \\Biggr)' = f(x, b(x)).b'(x) - f(x, a(x)).a'(x) + \\int_{a(x)}^{b(x)} \\frac{\\partial f(x, t).dt}{\\partial x} \\)";
    var leibniz2 = "\\( \\Biggl( \\int_{0}^{\\frac{\\sqrt{3}}{\\sqrt{2}}x} e^{-t^2} dt \\Biggr)' = f \\left(x, \\frac{\\sqrt{3}}{\\sqrt{2}}x \\right).\\frac{\\sqrt{3}}{\\sqrt{2}} - \\underbrace { f(x, 0) \\times 0  } _\\text{=0} +  \\underbrace { \\int_{0}^{\\frac{\\sqrt{3}}{\\sqrt{2}}x} \\frac{\\partial f(x, t)}{\\partial x} dt } _\\text {=0} \\)";
    var leibniz3 = "\\( \\Biggl( \\int_{0}^{\\frac{\\sqrt{3}}{\\sqrt{2}}x} e^{-t^2} dt \\Biggr)' = \\frac{\\sqrt{3}}{\\sqrt{2}} e^{-\\frac{3}{2}x^2 } \\)";

    var EDL1EVerif4 = "\\(  y_g'(x) -5x.y_g(x)  = \\frac{\\sqrt{\\pi}}{\\sqrt{3}\\sqrt{2}}.\\frac{\\sqrt{2}\\sqrt{2}}{\\sqrt{\\pi}}.e^{\\frac{5}{2}x^2} . \\frac{\\sqrt{3}}{\\sqrt{2}} e^{-\\frac{3}{2}x^2} \\)";
    var EDL1EVerif5 = "\\(  y_g'(x) -5x.y_g(x)  = e^{x^2}  \\)";

    return  <>
                <p>Au chapitre précédent, nous avions à resoudre :</p>
                <MathJaxDisplay toShow={EDL1} fRef={"(E)"} demo />
                <p>Et nous avons trouvé comme solution : </p>
                <MathJaxDisplay toShow={EDL1EYg} demo />
                <p>La vérification va consister à calculer <MathJaxInline toShow={"$ y_g'(x) $"} /> et injecter les deux fonctions dans <MathJaxInline toShow={"$ (E) $"} />.</p>

                <Title1 title={"Calcul de y'"} />
                <MathJaxDisplay toShow={EDL1EYgPrim} demo />

                <Title1 title={"Calcul de y' + a(x)y"} />
                <MathJaxDisplay toShow={EDL1EVerif} demo />
                <MathJaxDisplay toShow={EDL1EVerif2} demo />
                <MathJaxDisplay toShow={EDL1EVerif3} demo />
                <MathJaxDisplay toShow={EDL1EVerif3bis} fRef={1} demo />

                <p>Grâce la formule de Leibniz ci-dessous, qui fait un lien entre l'intégration et la dérivation, on va pouvoir calculer la grande dérivée de l'équation <MathJaxInline toShow={"$ (1) $"} /> :</p>
                <Title2 title={"Formule de Leibniz"} />
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={leibniz}  />
                </Container>
                <p>Cette formule nous dit que lorsque l'on a une fonction qui dépend de deux variables <MathJaxInline toShow={"$ (x, t) $"} />, on peut calculer la dérivée de son intégration sur <MathJaxInline toShow={"$ t $"} /> entres deux bornes, elles-mêmes fonctions de <MathJaxInline toShow={"$ x $"} />. </p>
                <p>Dans notre cas, notre formule ne dépend que de <MathJaxInline toShow={"$ t $"} />,  donc le troisième terme calcule l'intégrale d'une constante, soit <MathJaxInline toShow={"$ 0 $"} />. </p>
                <MathJaxDisplay toShow={leibniz2} demo />
                <MathJaxDisplay toShow={leibniz3} demo />

                <Title2 title={"Réinjection du résultat"} />
                <p>Soit en réinjectant dans <MathJaxInline toShow={"$ (1) $"} /> ce résultat :</p>
                <MathJaxDisplay toShow={EDL1EVerif4} demo />
                <MathJaxDisplay toShow={EDL1EVerif5} demo />
                <p>Nous avons bien vérifié que l'équation : </p>
                <MathJaxDisplay toShow={EDL1EYg} demo />
                <p>était solution de <MathJaxInline toShow={"$ (E) $"} />. </p>
            </>
}

export default EDL1CoefficientContinuExempleVerification;