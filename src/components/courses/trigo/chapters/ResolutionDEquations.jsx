import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Title1 from '../../helpers/Title1';

const ResolutionDEquations = () => {

    var cos = "\\(cos(x) = cos(a) \\Longrightarrow \\Biggl\\{ \\begin{gather*} x = a + 2k \\pi \\\\ ou \\\\ x = -a + 2k \\pi \\end{gather*} \\)";
    var sin = "\\(sin(x) = sin(a) \\Longrightarrow \\Biggl\\{ \\begin{gather*} x = a + 2k \\pi   \\\\ ou \\\\  x = (\\pi-a) + 2k \\pi \\end{gather*} \\)";
    var tan = "\\(tan(x) = tan(a) \\Longrightarrow \\Biggl\\{ \\begin{gather*} x = a + k \\pi  \\\\ ou \\\\  x = -a + k \\pi  \\end{gather*} \\)";

    return (
            <>
                <Title1 title ={"Résolution"} />
                <p>Grâce aux différentes formules de trigonométrie, une fois arrivé à une équation simplifiée, on résoud, avec <MathJaxInline toShow={"$ k \\in \\mathbb{Z}$"}  /> :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={cos}  />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={sin}  />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={tan}  />
                </Container>

                
            </>
    )

}

export default ResolutionDEquations;