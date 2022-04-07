import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const FormulesDeDuplication = () => {

    var cos2a = "\\(cos(2\\alpha) = cos^2(\\alpha) - sin^2(\\alpha)  \\)";
    var cos2aBis = "\\(cos(2\\alpha) = 2cos^2(\\alpha) - 1  \\)";
    var cos2aTer = "\\(cos(2\\alpha) = 1 - 2sin^2(\\alpha) \\)";
    var sin2a =  "\\(sin(2\\alpha) = 2 sin(\\alpha)cos(\\alpha) \\)";

    return (
        <>      
            <Container className="Focus">
                <MathJaxDisplay toShow={cos2a} />
                <MathJaxDisplay toShow={cos2aBis} />
                <MathJaxDisplay toShow={cos2aTer} />
            </Container>
            <Container className="Focus">
                <MathJaxDisplay toShow={sin2a} />
            </Container>
        </>
    )
}

export default FormulesDeDuplication;