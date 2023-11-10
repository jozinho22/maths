import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const EDL1CoefficientConstantExempleEquHomogene = () => {

    var EDL1 = "\\( y'(x) + 2y(x) = x^2 - 3 cos(x) -1 \\)";

    var edlHF1X = "\\( y'(x) + 2.y(x) = 0 \\)";

    var edl1F1X = "\\( y'(x) + 2.y(x) = x^2 \\)";
    var edl1F2X = "\\( y'(x) + 2.y(x) = cos(x) \\)";
    var edl1F3X = "\\( y'(x) + 2.y(x) = 1 \\)";

    var EDL1H = "\\( y'(x) +2 y(x) = 0 \\)";
    var EDL1HDemo = "\\( y'(x) = -2.y(x) \\)";
    var EDL1HDemo2 = "\\( \\frac{y'(x)}{y(x)} = - 2 \\)";
    var EDL1HDemo3 = "\\( \\int^x \\frac{y'(t)}{y(t)} dt = \\int^x -2. dt \\)";
    var EDL1HDemo4 = "\\( ln|y(x)| = -2x + C , \\enspace (avec \\enspace C \\in \\mathbb{R}) \\)";

    var EDL1HDemo5 = "\\( y(x) = K. e^{-2x}\\)";
    var EDL1HDemo6 = "\\( y_h(x) = K. e^{-2x} \\)";

    return  <>
                <p>Dans cette partie, nous allons résoudre une équation différentielle linéaire d'ordre 1, mais cette fois-ci avec un coefficient constant.</p>
                <p>Cet exemple comprendra aussi l'application du <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_DIFF_LIN_ORDRE_1}/principe-de-superposition`} external>principe de superposition</Link>.</p>
                
                <p>Tentons de résoudre l'équation <MathJaxInline toShow={"$ (\\tilde{E}) $"} /> ci-dessous :</p>
                <MathJaxDisplay toShow={EDL1} fRef={"\\tilde{E}"} demo />
                <p>On aura alors une série de quatre équations à résoudre :</p>

                <MathJaxDisplay toShow={edlHF1X} fRef={"H"} demo />
                <MathJaxDisplay toShow={edl1F1X} fRef={"\\tilde{E_1}"} demo />
                <MathJaxDisplay toShow={edl1F2X} fRef={"\\tilde{E_2}"} demo />
                <MathJaxDisplay toShow={edl1F3X} fRef={"\\tilde{E_3}"} demo />

                <Title1 title={"1) Résolution de l'équation homogène (H)"} />
                <MathJaxDisplay toShow={EDL1H} fRef={"H"} demo />
                <p>Soit en arrangeant l'expression, il vient :</p>
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
                <p>Nous allons par la suite résoudre une à une les trois équations <MathJaxInline toShow={"$ (\\tilde{E_1}), (\\tilde{E_2}), (\\tilde{E_3}) $"} />.</p>
            </>
}

export default EDL1CoefficientConstantExempleEquHomogene;