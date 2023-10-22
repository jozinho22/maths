import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

const ALapuissanceZero = () => {
    
    var xPow0 = "\\( x^n  \\times x^0 = x^{n+0} \\)";
    var xPow02 = "\\( x^n  \\times x^0 = x^{n} \\)";
    var xPow03 = "\\( x^0  = 1 \\)";

    return (
            <>
                <p>Avec <Link url={`${PagesConstants.COURS}${CoursesConstants.PUISSANCES}/multiplication-de-puissances`}> cette formule </Link>, on peut dire que : </p>
                <MathJaxDisplay toShow={xPow0} demo />
                <p>Soit </p>
                <MathJaxDisplay toShow={xPow02} demo />
                <p>On en conclue que dans tous les cas : </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xPow03} />
                </Container>
            </>
    );
}

export default ALapuissanceZero;