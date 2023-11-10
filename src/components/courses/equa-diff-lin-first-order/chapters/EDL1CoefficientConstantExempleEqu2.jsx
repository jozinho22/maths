import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const EDL1CoefficientConstantExempleEqu2 = () => {

    var EDL1 = "\\( y'(x) + 2y(x) = x^2 - 3 cos(x) -1 \\)";

    var edl1F2X = "\\( y'(x) + 2.y(x) = cos(x) \\)";

    var EDL1Yh = "\\( y(x) = K(x) .e^{-2x} \\)";

    var EDL1EInj2 = "\\( y'(x) -2 y(x) = K'(x). e^{-2x}  \\)";

    var EDL1E2 = "\\( cos(x) = K'(x). e^{-2x}  \\)";
    var EDL1E2bis = "\\( K'(x) = cos(x) . e^{2x}  \\)";

    var EDL1EK = "\\(  K(x) = \\int^x cos(t). e^{2t}.dt \\)";
    
    var EDL1EKintParPart = "\\(  \\Biggl \\{ \\begin{gather*} u'(t) = e^{2t} \\\\ v(t) = cos(x) \\end{gather*}  \\)";

    var EDL1EK2 = "\\( K(x) = \\frac{1}{2}\\left[cos(t).e^{2t}\\right]^x + \\frac{1}{2}\\int^x sin(t).e^{2t}.dt \\)";
    var EDL1EK3 = "\\( K(x) = \\frac{1}{2} \\left[cos(t).e^{2t} \\right]^x +  \\frac{1}{2} \\left(  \\frac{1}{2} \\left[sin(t).e^{2t}\\right]^x -\\frac{1}{2}\\int^x cos(t)e^{2t}.dt \\right) \\)";
    var EDL1EK4 = "\\( \\int^x cos(t). e^{2t}.dt = \\frac{1}{2}  cos(x).e^{2x}  + \\frac{1}{4} sin(x).e^{2x} - \\frac{1}{4} \\int^x cos(t). e^{2t}.dt  \\)";
    var EDL1EK5 = "\\( \\frac{5}{4}\\int^x cos(t). e^{2t}.dt =  \\frac{1}{2}  cos(x).e^{2x} +  \\frac{1}{4} sin(x).e^{2x} \\)";
    var EDL1EK6 = "\\( \\int^x cos(t). e^{2t}.dt =  \\frac{2}{5} cos(x).e^{2x}+  \\frac{1}{5} sin(x).e^{2x}\\)";
    var EDL1EK7 = "\\( \\int^x cos(t). e^{2t}.dt =  e^{2x} \\left ( \\frac{2}{5} cos(x).e^{2x}+  \\frac{1}{5} sin(x) \\right) \\)";
    var EDL1EK8 = "\\( K(x) =  e^{2x} \\left ( \\frac{2}{5} cos(x).e^{2x}+  \\frac{1}{5} sin(x) \\right) \\)";

    var EDL1EY2 = "\\(  y_2(x) = e^{-2x} e^{2x} \\left ( \\frac{2}{5} cos(x)+  \\frac{1}{5} sin(x) \\right) \\)";
    var EDL1EY2bis = "\\(  y_2(x) =   \\frac{2}{5} cos(x)+  \\frac{1}{5} sin(x) \\)";

    return  <>
                <p>Nous sommes toujours dans la résolution de l'équation générale <MathJaxInline toShow={"$ (\\tilde{E}) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1} fRef={"\\tilde{E}"} demo />
                <p>Nous résolvons à présent la deuxième équation <MathJaxInline toShow={"$ (\\tilde{E_2}) $"} /> : </p>
                <MathJaxDisplay toShow={edl1F2X} fRef={"\\tilde{E_2}"} demo />

                <Title1 title={"2) Résolution de l'équation 2 "} />
      
                <p>Nous repartons de l'équation <MathJaxInline toShow={"$ (2) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EInj2} fRef={"2"} demo />
                <p>Soit :</p>
                <MathJaxDisplay toShow={EDL1E2} demo />
                <MathJaxDisplay toShow={EDL1E2bis} demo />
                
                <Title2 title={"2-a) Intégration pour déterminer K(x)"} />
                <p>Intégrons maintenant les deux membres de cette équation, et ainsi déterminer une expression de la fonction <MathJaxInline toShow={"$ K(x) $"} />.</p>
                <MathJaxDisplay toShow={EDL1EK} demo />
                <p>Nous choisissons les fonctions suivantes pour <MathJaxInline toShow={"$ u' $"} /> et <MathJaxInline toShow={"$ v $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EKintParPart} demo />
                
                <p>Soit, </p>
                <MathJaxDisplay toShow={EDL1EK} demo />
                <MathJaxDisplay toShow={EDL1EK2} demo />
                <MathJaxDisplay toShow={EDL1EK3} demo />
                <MathJaxDisplay toShow={EDL1EK4} demo />
                <MathJaxDisplay toShow={EDL1EK5} demo />
                <MathJaxDisplay toShow={EDL1EK6} demo />
                <MathJaxDisplay toShow={EDL1EK7} demo />
                <p>Soit pour <MathJaxInline toShow={"$ K(x) $"} />,</p>
                <MathJaxDisplay toShow={EDL1EK8} demo />

                <Title2 title={"2-b) Solution particulière y2"} />
                <p>Ayant trouvé une valeur pour <MathJaxInline toShow={"$ K(x) $"} />, nous pouvons l'injecter dans l'équation <MathJaxInline toShow={"$ (1) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1Yh} fRef={1} demo />
                <p>Soit une seconde solution particulière <MathJaxInline toShow={"$ y_2 $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EY2} demo />
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={EDL1EY2bis} />
                </Container>

                <p>Résolvons maintenant la dernière équation <MathJaxInline toShow={"$ (\\tilde{E_3}) $"} />. </p>
            </>
}

export default EDL1CoefficientConstantExempleEqu2;