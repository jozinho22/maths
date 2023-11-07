import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const Presentation = () => {

    var edl1 = "\\( y(x)' + a(x) y(x) = f(x)  \\)";
    var edl1H = "\\( y(x)' + a(x) y(x) = 0 \\)";

    var yhy0 = "\\( \\Biggl\\{ \\begin{gather*} y_h \\enspace solution \\enspace de \\enspace (H) \\\\  \\enspace \\enspace  \\enspace \\enspace y_0 \\enspace solution \\enspace particuli\\overset{`}{e}re \\enspace de \\enspace (E) \\end{gather*} \\Longrightarrow (y_g = y_h + y_0) \\enspace solution \\enspace g\\acute{e}n\\acute{e}rale \\enspace de  \\enspace (E)\\)";


    var yhPlusy0 = "\\( y_g = y_h + y_0 \\)";

    return  <>
                <p>Avant d'entamer ce chapitre, il est conseillé de connaître les chapitres sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}`} external> la dérivation</Link> et <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PRIMITIVES_INTEGRATION}`} external> l'intégration</Link>.</p>
                
                <Title1 title={"Équations différentielles linéaires d'ordre 1"} />
                <p>Soit <MathJaxInline toShow={"$ y(x) $"} />, une fonction et <MathJaxInline toShow={"$ y'(x) $"} /> sa dérivée.</p>
                <p><MathJaxInline toShow={"$ a(x) $"} /> et <MathJaxInline toShow={"$  f(x) $"} /> deux fonctions.</p>                
                <p>On se propose de résoudre une équation de la forme :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={edl1} fRef={"E"} />
                </Container>
                
                <p>On verra alors le cas général où <MathJaxInline toShow={"$ a(x) $"} /> est une fonction, et par la suite le cas particulier où <MathJaxInline toShow={"$ a(x) $"} /> est une constante, c'est-à-dire <MathJaxInline toShow={"$ a(x)=a, \\enspace avec \\enspace a \\in \\mathbb{K} $"} />.</p>
            
                <Title1 title={"Solution générale d'une EDL1"} />
                <p>Lors de la résolution d'une EDL1, nous déterminerons tout d'abord une solution <MathJaxInline toShow={"$ y_h $"} /> de l'équation homogène <MathJaxInline toShow={"$ (H) $"} /> :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={edl1H} fRef={"H"} />
                </Container>
                <p>Puis nous déterminerons une solution particulière <MathJaxInline toShow={"$ y_0 $"} /> de <MathJaxInline toShow={"$ (E) $"} />.</p>
                
                <p>De par <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_DIFF_LIN_ORDRE_1}/principe-de-superposition`} external>le principe de superposition</Link>, la solution générale sera alors à la somme des deux.</p>
                <MathJaxDisplay toShow={yhy0} demo />
                <Container className="Focus">
                    <MathJaxDisplay toShow={yhPlusy0} />
                </Container>
                <p>Toujours avec ce même principe, nous allons voir que la solution particulière <MathJaxInline toShow={"$ y_0 $"} /> peut aussi être la somme de plusieurs solutions superposées. </p>
            </>
}

export default Presentation;