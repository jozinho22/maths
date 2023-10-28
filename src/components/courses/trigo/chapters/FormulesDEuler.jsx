import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const FormulesDEuler = () => {

    var cosEuler = "\\( cos(x) =  \\frac{e^{i x} + e^{-i x}}{2} \\)";
    var sinEuler = "\\( sin(x) =  \\frac{e^{i x} - e^{-i x}}{2i} \\)";

    var cospx = "\\( cos(px) =  \\frac{e^{i.p x} + e^{-i.p x}}{2} \\)";
    var sinpx = "\\( sin(px) =  \\frac{e^{i.p x} - e^{-i.p x}}{2i} \\)"

    var cospxEulerDemo = "\\( e^{i.px} = cos(px) + i .sin(px) \\)";
    var cospxEulerDemo2 = "\\( e^{-i.p x} = cos(px) - i .sin(px) \\)";
    var cospxEulerDemo3 = "\\( 2.cos(px) = e^{i . px} + e^{-i .px} \\)";

    var cosCarreEuler = "\\( cos^2(x) = \\frac{1 + cos(2 x)}{2} \\)";
    var sinCarreEuler = "\\( sin^2(x) = \\frac{1 - cos(2 x)}{2} \\)";

    var cosCarreEulerDemo = "\\( cos^2(x) = \\left(\\frac{e^{i x} + e^{-i x}}{2} \\right)^2\\)";
    var cosCarreEulerDemo1 = "\\( cos^2(x) = \\frac{e^{2i x} + 2.e^{i x}e^{-i x} + e^{-2i x}}{4} \\)";
    var cosCarreEulerDemo2 = "\\( cos^2(x) = \\frac{e^{2i x} + e^{-2i x} + 2}{4} \\)";
    var cosCarreEulerDemo3 = "\\( cos^2(x) = \\frac{2 cos(2x) + 2}{4} \\)";
    var cosCarreEulerDemo4 = "\\( cos^2(x) = \\frac{1 + cos(2x)}{2} \\)";

    return (
            <>      
                <Container className="Focus">
                    <MathJaxDisplay toShow={cosEuler} />
                </Container>

                <Container className="Focus">
                    <MathJaxDisplay toShow={sinEuler} />
                </Container>

                <Title1 title={"Généralisation"} />

                 <Container className="Focus">
                    <MathJaxDisplay toShow={cospx} />
                     <MathJaxDisplay toShow={sinpx} />
                </Container>

                <Title1 title={"Démonstration"} />
                <p>Avec les formes complexes exponentielles, on a :</p>
                <MathJaxDisplay toShow={cospxEulerDemo} demo />
                <MathJaxDisplay toShow={cospxEulerDemo2} demo />
                <p>On ajoute membre à membre.</p>
                <MathJaxDisplay toShow={cospxEulerDemo3} demo />
                <p>Idem pour <MathJaxInline toShow={"$ sin(px) $"}/>.  </p>

                <Title1 title={"Conséquences"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={cosCarreEuler} />
                </Container>

                <Container className="Focus">
                    <MathJaxDisplay toShow={sinCarreEuler} />
                </Container>

                <Title2 title={"Démonstration"} />
                <MathJaxDisplay toShow={cosCarreEulerDemo} demo />
                <MathJaxDisplay toShow={cosCarreEulerDemo1} demo />
                <MathJaxDisplay toShow={cosCarreEulerDemo2} demo />
                <MathJaxDisplay toShow={cosCarreEulerDemo3} demo />
                <MathJaxDisplay toShow={cosCarreEulerDemo4} demo />
                <p>Idem pour <MathJaxInline toShow={"$ sin^2(x) $"}/>.</p>

            </>
    )
}

export default FormulesDEuler;