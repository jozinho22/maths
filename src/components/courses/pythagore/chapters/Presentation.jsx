import React from 'react';
import { Container } from 'react-bootstrap';
import ImageZoom from '../../ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import pythagore from '../assets/pythagore.png';

const Presentation = () => {

    var pyth = "\\(a^2 + b^2 = c^2\\)";
    var pyth2 = "\\(\\sqrt{c^2} = \\sqrt{a^2 + b^2} \\)";
    var pyth3 = "\\(c = \\sqrt{a^2 + b^2} \\)";

    return (
        <>
            <p>Le théorème de Pythagore implique les côtés et les angles d'un triangle rectangle.</p>
            <p>Pour rappel, un triangle rectangle est un triangle avec un angle droit (<MathJaxInline toShow={"$\\frac{\\pi}{2} \\;rad \\; ou \\; 90° $"} /> ).</p>
            <p>Si un triangle est rectangle tel que la figure ci-dessous :</p>
            <ImageZoom src={pythagore} name="Le théorème de Pythagore" n={1} />
            <p>Alors, on a :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pyth} fRef={1} />
            </Container>
            <p>De même, on a la réciproque du théorème.
                {"\n"}Alors, si :
            </p>
            <MathJaxDisplay toShow={pyth} />
            <p>Cela veut dire que le triangle est rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$$b$"} />. </p>
            <p>Cela implique alors que : </p>
            <MathJaxDisplay toShow={pyth2} />
            <p>Soit</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pyth3} />
            </Container>
        </>
    );
}

export default Presentation;