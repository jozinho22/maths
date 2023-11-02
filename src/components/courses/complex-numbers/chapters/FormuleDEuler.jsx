import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const FormulesDEuler = () => {

    var cosEuler = "\\( cos(x) =  \\frac{e^{i x} + e^{-i x}}{2} \\)";
    var sinEuler = "\\( sin(x) =  \\frac{e^{i x} - e^{-i x}}{2i} \\)";

    var cospx = "\\( cos(px) =  \\frac{e^{i.p x} + e^{-i.p x}}{2} \\)";
    var sinpx = "\\( sin(px) =  \\frac{e^{i.p x} - e^{-i.p x}}{2i} \\)"

    var cospxEulerDemo = "\\( e^{i.px} = cos(px) + i .sin(px) \\)";
    var cospxEulerDemo2 = "\\( e^{-i.p x} = cos(px) - i .sin(px) \\)";
    var cospxEulerDemo3 = "\\( 2.cos(px) = e^{i . px} + e^{-i .px} \\)";

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
            </>
    )
}

export default FormulesDEuler;