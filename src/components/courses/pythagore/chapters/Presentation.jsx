import React from 'react';
import { Container } from 'react-bootstrap';
import ImageZoom from '../../helpers/ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Title1 from '../../helpers/Title1';
import pythagore from '../assets/pythagore.png';

const Presentation = () => {

    var pyth = "\\(a^2 + b^2 = c^2\\)";

    var pythRecip =  "\\( a \\perp b \\)";
    var pyth2 = "\\(\\sqrt{c^2} = \\sqrt{a^2 + b^2} \\)";
    var pyth3 = "\\(c = \\sqrt{a^2 + b^2} \\)";

    return (
        <>
            <Title1 title={"Le théorème"} />
            <p>Le théorème de Pythagore implique les côtés et les angles d'un triangle rectangle.</p>
            <p>Pour rappel, un triangle rectangle est un triangle avec un angle droit (<MathJaxInline toShow={"$\\frac{\\pi}{2} \\;rad \\; ou \\; 90° $"} /> ).</p>
            <p>Si un triangle est rectangle tel que la figure ci-dessous :</p>
            <ImageZoom src={pythagore} name="Le théorème de Pythagore" n={1} />
            <p>Alors, on a :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pyth} fRef={1} />
            </Container>

            <p>Cela implique alors aussi que : </p>
            <MathJaxDisplay toShow={pyth2} demo />
            <p>Soit</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pyth3} />
            </Container>

            <Title1 title={"La réciproque du théorème"} />
            <p>Si :</p>
            <MathJaxDisplay toShow={pyth} demo />
            <p>Cela signifie : que le triangle est rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />. </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pythRecip} />
            </Container>
            <p>Où <MathJaxInline toShow={"$ \\perp $"} /> signifie "est perpendiculaire à".</p>
        </>
    );
}

export default Presentation;