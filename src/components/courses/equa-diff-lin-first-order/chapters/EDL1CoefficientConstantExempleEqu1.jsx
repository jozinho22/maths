import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const EDL1CoefficientConstantExempleEqu1 = () => {

    var EDL1 = "\\( y'(x) + 2y(x) = x^2 - 3 cos(x) -1 \\)";

    var edl1F1X = "\\( y_1'(x) + 2.y_1(x) = x^2 \\)";
    var edl1F2X = "\\( y_1'(x) + 2.y_1(x) = cos(x) \\)";
    var edl1F3X = "\\( y_1'(x) + 2.y_1(x) = 1 \\)";

    var yt = "\\( y_t = y_1 -3y_2 - y_3 \\)";

    var EDL1Yh = "\\( y(x) = K(x) .e^{-2x} \\)";

    var EDL1EyPrim = "\\( y'(x) = K'(x) e^{-2x} -2 K(x).e^{-2x} \\)";
    var EDL1EInj = "\\( y'(x) -2y(x) = K'(x) .e^{-2x}  -2 K(x).e^{-2x} +2.K(x) .e^{-2x}  \\)";
    var EDL1EInj2 = "\\( y'(x) -2 y(x) = K'(x). e^{-2x}  \\)";

    var EDL1E2 = "\\( x^2 = K'(x). e^{-2x}  \\)";
    var EDL1E2bis = "\\( K'(x) = x^2 . e^{2x}  \\)";

    var EDL1EK = "\\(  K(x) = \\int^x x^2. e^{2x}.dt \\)";
    
    var EDL1EKintParPart = "\\(  \\Biggl \\{ \\begin{gather*} u'(t) = e^{at} \\\\ v(t) = f(t) \\end{gather*}  \\)";
    var EDL1EKintParPart2 = "\\(  \\Biggl \\{ \\begin{gather*} u'(t) = e^{2t} \\\\ v(t) = x^2 \\end{gather*}  \\)";

    var EDL1EK2 = "\\( K(x) = \\frac{1}{2}\\left[t^2.e{2t}\\right]^x - \\frac{1}{2}\\int^x 2t. e^{2t}.dt \\)";
    var EDL1EK3 = "\\( K(x) = \\frac{1}{2}\\left[t^2.e{2t}\\right]^x - \\left(\\left[t.e{2t}\\right]^x -\\frac{1}{2}\\int^x e^{2t}.dt \\right) \\)";
    var EDL1EK4 = "\\( K(x) = \\frac{1}{2}\\left(x^2.e^{2x}\\right) - \\left(\\frac{1}{2} x.e^{2x} - \\frac{1}{4}e^{2x} \\right)  \\)";
    var EDL1EK5 = "\\( K(x) = \\frac{1}{2}x^2.e^{2x} - \\frac{1}{2} x.e^{2x} +\\frac{1}{4}e^{2x}  \\)";
    var EDL1EK6 = "\\( K(x) = e^{2x} \\left( \\frac{1}{2} \\left( x^2 - x + \\frac{1}{2} \\right) \\right) \\)";

    var EDL1EY1 = "\\(  y_1(x) = e^{2x} \\left( \\frac{1}{2} \\left( x^2 - x + \\frac{1}{2} \\right) \\right) .e^{-2x} \\)";
    var EDL1EY1bis = "\\(  y_1(x) =  \\frac{1}{2} \\left( x^2 - x + \\frac{1}{2} \\right) \\)";

    return  <>
                <p>À présent, tentons de résoudre l'équation générale <MathJaxInline toShow={"$ (\\tilde{E}) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1} fRef={"\\tilde{E}"} demo />
                <p>La résolution de <MathJaxInline toShow={"$ (\\tilde{E}) $"} /> se fera par les résolutions successives des trois équations <MathJaxInline toShow={"$ \\tilde{E_1}, \\tilde{E_2}, \\tilde{E_3} $"} /> : </p>
                <MathJaxDisplay toShow={edl1F1X} fRef={"\\tilde{E_1}"} demo />
                <MathJaxDisplay toShow={edl1F2X} fRef={"\\tilde{E_2}"} demo />
                <MathJaxDisplay toShow={edl1F3X} fRef={"\\tilde{E_3}"} demo />

                <p>Par le <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_DIFF_LIN_ORDRE_1}/principe-de-superposition`} external>principe de superposition</Link>, la solution particulière totale sera la combinaison linéaire suivante :</p>

                <MathJaxDisplay toShow={yt} demo />

                <Title1 title={"2) Résolution de l'équation 1 "} />
                
                <Title2 title={"2-a) Méthode de Lagrange"} />
                <p>On démarre de l'équation :</p>
                <MathJaxDisplay toShow={EDL1Yh} fRef={1} demo />
                <p>On calcule l'expression de <MathJaxInline toShow={"$ y' $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EyPrim} demo />

                <MathJaxDisplay toShow={EDL1EInj} demo />
                <MathJaxDisplay toShow={EDL1EInj2} fRef={2} demo />

                <p>Nous repartirons de cette équation <MathJaxInline toShow={"$ (2) $"} /> pour la résolution de <MathJaxInline toShow={"$ \\tilde{E_2}, \\tilde{E_3} $"} />.</p>

                <p>Réunissons à présent les membres de droite de <MathJaxInline toShow={"$ (2) $"} /> et <MathJaxInline toShow={"$ (\\tilde{E_1}) $"} /> : </p>
                <MathJaxDisplay toShow={EDL1E2} demo />
                <p>Soit en arrangeant :</p>
                <MathJaxDisplay toShow={EDL1E2bis} demo />

                <Title2 title={"2-b) Intégration pour déterminer K(x)"} />
                <p>Intégrons maintenant les deux membres de cette équation, et ainsi déterminer une expression de la fonction <MathJaxInline toShow={"$ K(x) $"} />.</p>
                <MathJaxDisplay toShow={EDL1EK} demo />
                <p>Dans le cas d'une fonction de type <MathJaxInline toShow={"$ x \\longmapsto f(x).e^{ax} $"} />, on choisira une <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_DIFF_LIN_ORDRE_1}/integration-par-parties`} external>intégration par parties</Link> en posant : </p>
                <MathJaxDisplay toShow={EDL1EKintParPart} demo />
                <p>Car il est plus facile de trouver une primitive de <MathJaxInline toShow={"$ x \\longmapsto e^{ax} $"} /> que la plupart des fonctions.</p>
                <p>Soit ici, </p>
                <MathJaxDisplay toShow={EDL1EKintParPart2} demo />
                <MathJaxDisplay toShow={EDL1EK} demo />
                <MathJaxDisplay toShow={EDL1EK2} demo />
                <MathJaxDisplay toShow={EDL1EK3} demo />
                <MathJaxDisplay toShow={EDL1EK4} demo />
                <MathJaxDisplay toShow={EDL1EK5} demo />
                <MathJaxDisplay toShow={EDL1EK6} demo />

                <Title2 title={"2-c) Solution particulière"} />
                <p>Ayant trouvé une valeur pour <MathJaxInline toShow={"$ K(x) $"} />, nous pouvons l'injecter dans l'équation <MathJaxInline toShow={"$ (1) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1Yh} fRef={1} demo />
                <p>Soit une première solution particulière <MathJaxInline toShow={"$ y_1 $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EY1} demo />
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={EDL1EY1bis} />
                </Container>

                <p>Résolvons maintenant l'équation suivante <MathJaxInline toShow={"$ (\\tilde{E_2}) $"} />. </p>
            </>
}

export default EDL1CoefficientConstantExempleEqu1;