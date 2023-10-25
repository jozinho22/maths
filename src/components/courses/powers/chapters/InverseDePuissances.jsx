import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

const InverseDePuissances = () => {

    var xPow03 = "\\( x^0  = 1 \\)";

    var xTimesInvX = "\\( x \\times {1 \\over x} = 1 \\)";
    var xTimesInvX2 = "\\( x \\times {1 \\over x} = x^0 \\)";
    var xTimesInvX3 = "\\( x^1 \\times x^n = x^0 \\)";
    var xTimesInvX4 = "\\( x^{1 +n} = x^0 \\)";
    var xTimesInvX5 = "\\( 1 + n = 0 \\Leftrightarrow  n = -1 \\)";
    var xTimesInvX7 = "\\(  {1 \\over x} = x ^{-1}  \\)";

    return (
            <>
                <p>La multiplication d'un nombre par son inverse donne toujours l'identité, à savoir <MathJaxInline toShow={"$1$"} />.</p>
                <MathJaxDisplay toShow={xTimesInvX} demo />
                <p>Mais on sait, grâce à <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PUISSANCES}/a-la-puissance-zero`} external>cette formule</Link> que :</p>
                <MathJaxDisplay toShow={xPow03} demo />
                <p>Soit alors :</p>
                <MathJaxDisplay toShow={xTimesInvX2} demo />
                <p>
                    Cherchons à savoir pour quelle puissance de <MathJaxInline toShow={"$x$"} /> correspond <MathJaxInline toShow={"$ 1 \\over x $ "} />.
                    {"\n"}Cet exposant sera appelé <MathJaxInline toShow={"$n$"} /> .
                </p>
                <MathJaxDisplay toShow={xTimesInvX3} demo />
                <p>Avec <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PUISSANCES}/multiplication-de-puissances-de-x`} external>la formule de multiplication de puissances</Link>, cela nous donne tout simplement</p>
                <MathJaxDisplay toShow={xTimesInvX4} demo />
                <p>Soit l'équation suivante :</p>
                <MathJaxDisplay toShow={xTimesInvX5} demo />
                <p>on en conclue que :</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xTimesInvX7}/>
                </Container>
            </>
    );
}

export default InverseDePuissances;