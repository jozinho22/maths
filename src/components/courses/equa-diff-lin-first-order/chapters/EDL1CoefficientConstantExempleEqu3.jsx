import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const EDL1CoefficientConstantExempleEqu3 = () => {

    var EDL1 = "\\( y'(x) + 2y(x) = x^2 - 3 cos(x) -1 \\)";

    var edl1F3X = "\\( y'(x) + 2.y(x) = 1 \\)";

    var EDL1Yh = "\\( y(x) = K(x) .e^{-2x} \\)";

    var EDL1EInj2 = "\\( y'(x) -2 y(x) = K'(x). e^{-2x}  \\)";

    var EDL1E3 = "\\( 1 = K'(x). e^{-2x}  \\)";
    var EDL1E3bis = "\\( K'(x) = e^{2x}  \\)";

    var EDL1EK = "\\(  K(x) = \\int^x e^{2t}.dt \\)";
    
    var EDL1EKintParPart = "\\(  \\Biggl \\{ \\begin{gather*} u'(t) = e^{2t} \\\\ v(t) = 1 \\end{gather*}  \\)";

    var EDL1EK2 = "\\( K(x) = \\frac{1}{2} e^{2x} \\)";


    var EDL1EY3 = "\\(  y_3(x) = e^{-2x} \\frac{1}{2} e^{2x} \\)";
    var EDL1EY3bis = "\\(  y_3(x) =   \\frac{1}{2} \\)";

    var yt = "\\( y_t = y_1 - 3y_2 - y_3 \\)";
    var yt2 = "\\( y_t = \\frac{1}{2} \\left( x^2 - x + \\frac{1}{2} \\right) - 3 \\left( \\frac{2}{5} cos(x)+  \\frac{1}{5} sin(x) \\right) - \\frac{1}{2} \\)";
    var yg = "\\( y_g = y_h + y_g \\)";
    var yg2 = "\\( y_g = K. e^{-2x} + \\frac{1}{2} \\left( x^2 - x + \\frac{1}{2} \\right) - 3 \\left( \\frac{2}{5} cos(x)+  \\frac{1}{5} sin(x) \\right) - \\frac{1}{2} \\)";
    var yg3 = "\\( y_g = K. e^{-2x} + \\frac{1}{2} \\left( x^2 - x + \\frac{1}{2} \\right) -  \\frac{6}{5} cos(x) - \\frac{3}{5} sin(x) - \\frac{1}{2} \\)";

    return  <>
                <p>Nous sommes toujours dans la résolution de l'équation générale <MathJaxInline toShow={"$ (\\tilde{E}) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1} fRef={"\\tilde{E}"} demo />
                <p>Nous résolvons à présent la troisième et dernière équation <MathJaxInline toShow={"$ (\\tilde{E_3}) $"} /> : </p>
                <MathJaxDisplay toShow={edl1F3X} fRef={"\\tilde{E_3}"} demo />

                <Title1 title={"2) Résolution de l'équation 3 "} />
      
                <p>Nous repartons de l'équation <MathJaxInline toShow={"$ (2) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EInj2} fRef={"2"} demo />
                <p>Soit :</p>
                <MathJaxDisplay toShow={EDL1E3} demo />
                <MathJaxDisplay toShow={EDL1E3bis} demo />
                
                <Title2 title={"2-a) Intégration pour déterminer K(x)"} />
                <p>Intégrons maintenant les deux membres de cette équation, et ainsi déterminer une expression de la fonction <MathJaxInline toShow={"$ K(x) $"} />.</p>
                <MathJaxDisplay toShow={EDL1EK} demo />
                <p>Nous choisissons les fonctions suivantes pour <MathJaxInline toShow={"$ u' $"} /> et <MathJaxInline toShow={"$ v $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EKintParPart} demo />
                
                <p>Soit, </p>
                <MathJaxDisplay toShow={EDL1EK} demo />
                <MathJaxDisplay toShow={EDL1EK2} demo />

                <Title2 title={"2-b) Solution particulière y3"} />
                <p>Ayant trouvé une valeur pour <MathJaxInline toShow={"$ K(x) $"} />, nous pouvons l'injecter dans l'équation <MathJaxInline toShow={"$ (1) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1Yh} fRef={1} demo />
                <p>Soit une seconde solution particulière <MathJaxInline toShow={"$ y_3 $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EY3} demo />
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={EDL1EY3bis} />
                </Container>

                <Title2 title={"2-c) Solution particulière générale yt"} />
                <p>Nous disposons maintenant des trois solutions particulières <MathJaxInline toShow={"$  y_1,  y_2, y_3 $"} /> des trois équations <MathJaxInline toShow={"$ (\\tilde{E_1}), (\\tilde{E_2}),(\\tilde{E_3}) $"} /></p>
                <p>De par le <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_DIFF_LIN_ORDRE_1}/principe-de-superposition`} external>principe de superposition</Link>, la solution particulière générale est alors la combinaison linéaire : </p>
                <MathJaxDisplay toShow={yt} demo />
                <p>Soit : </p>
                <MathJaxDisplay toShow={yt2} demo />

                <Title2 title={"2-d) Solution générale yg"} />
                <p>Toujours par le <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_DIFF_LIN_ORDRE_1}/principe-de-superposition`} external>principe de superposition</Link>, la solution générale de <MathJaxInline toShow={"$ (E) $"} /> est la somme de la solution <MathJaxInline toShow={"$ y_h $"} /> de l'équation homogène <MathJaxInline toShow={"$ (H) $"} /> et <MathJaxInline toShow={"$ y_g$"} />, solution de l'équation <MathJaxInline toShow={"$ (\\tilde{E}) $"} /> : </p>
                <MathJaxDisplay toShow={yg} demo />
                 <MathJaxDisplay toShow={yg2} demo />
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={yg3} />
                </Container>

                <p>À présent, vérifions que cette solution convient bien.</p>
            </>
}

export default EDL1CoefficientConstantExempleEqu3;