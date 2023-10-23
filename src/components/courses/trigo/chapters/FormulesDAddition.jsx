import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Title1 from '../../helpers/Title1';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const FormulesDAddition = () => {

    var cosAplusB = "\\(cos(\\alpha + \\beta) = cos(\\alpha) cos(\\beta) - sin(\\alpha) sin(\\beta) \\)";
    var cosAminusB = "\\(cos(\\alpha - \\beta) = cos(\\alpha) cos(\\beta) + sin(\\alpha) sin(\\beta) \\)";
    var sinAplusB = "\\(sin(\\alpha + \\beta) = sin(\\alpha) cos(\\beta) + sin(\\beta) cos(\\alpha) \\)";
    var sinAminusB = "\\(sin(\\alpha - \\beta) = sin(\\alpha) cos(\\beta) - sin(\\beta) cos(\\alpha) \\)";

    var eiThetaAPlusBgen = "\\( e^{i(\\alpha + \\beta)} = cos(\\alpha + \\beta)  + isin(\\alpha + \\beta)  \\)";
    var eiThetaAPlusB = "\\( e^{i(\\alpha + \\beta)} = e^{i\\alpha}e^{i\\beta}  \\)";
    var eiThetaAPlusB2 = "\\( \\Longleftrightarrow \\bigl(cos(\\alpha) + isin(\\alpha)\\bigr) \\bigl(cos(\\beta) + isin(\\beta)\\bigr) \\)";
    var eiThetaAPlusB3 = "\\( \\Longleftrightarrow cos(\\alpha).cos(\\beta) + icos(\\alpha).sin(\\beta) + icos(\\beta).sin(\\alpha) - sin(\\alpha).sin(\\beta) \\)";
    var eiThetaAPlusB4 = "\\( \\Longleftrightarrow \\bigl(cos(\\alpha).cos(\\beta) - sin(\\alpha).sin(\\beta)\\bigl)  + i\\bigl(sin(\\alpha).cos(\\beta) + sin(\\beta).cos(\\alpha)\\bigl) \\)";

    return (
        <>      
            <Container className="Focus">
                <MathJaxDisplay toShow={sinAplusB} />
                <MathJaxDisplay toShow={sinAminusB} />
                <MathJaxDisplay toShow={cosAplusB} />
                <MathJaxDisplay toShow={cosAminusB} />
            </Container> 

            <Title1 title="Démonstration" />
            <p>En écrivant la première formule sous sa forme complexe, on obtient : </p>
            <MathJaxDisplay toShow={eiThetaAPlusBgen} demo />
            <p>Mais</p>
            <MathJaxDisplay toShow={eiThetaAPlusB} demo />
            <MathJaxDisplay toShow={eiThetaAPlusB2} demo />
            <MathJaxDisplay toShow={eiThetaAPlusB3} demo />
            <MathJaxDisplay toShow={eiThetaAPlusB4} demo />
            <p><MathJaxInline toShow={"$cos(\\alpha).cos(\\beta) - sin(\\alpha).sin(\\beta)$"}/> est la partie réelle de <MathJaxInline toShow={"$e^{i(\\alpha + \\beta)}$"}/>.</p>
            <p><MathJaxInline toShow={"$sin(\\alpha).cos(\\beta) + sin(\\beta).cos(\\alpha)$"}/> est sa partie imaginaire.</p>
            <p>Soit en identifiant les parties correspondantes entre elles on a : </p>
            <MathJaxDisplay toShow={cosAplusB} demo />
            <MathJaxDisplay toShow={sinAplusB} demo />
        </>
    )
}

export default FormulesDAddition;