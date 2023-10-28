import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Title1 from '../../helpers/Title1';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Aside from '../../helpers/Aside';

const FormulesDAddition = () => {

    var cosAplusB = "\\(cos(\\alpha + \\beta) = cos(\\alpha) cos(\\beta) - sin(\\alpha) sin(\\beta) \\)";
    var cosAminusB = "\\(cos(\\alpha - \\beta) = cos(\\alpha) cos(\\beta) + sin(\\alpha) sin(\\beta) \\)";
    var sinAplusB = "\\(sin(\\alpha + \\beta) = sin(\\alpha) cos(\\beta) + sin(\\beta) cos(\\alpha) \\)";
    var sinAminusB = "\\(sin(\\alpha - \\beta) = sin(\\alpha) cos(\\beta) - sin(\\beta) cos(\\alpha) \\)";

    var eiThetaAPlusBgen = "\\( e^{i(\\alpha + \\beta)} = cos(\\alpha + \\beta)  + i.sin(\\alpha + \\beta)  \\)";
    var eiThetaAPlusB = "\\( e^{i(\\alpha + \\beta)} = e^{i\\alpha}e^{i\\beta}  \\)";
    var eiThetaAPlusB2 = "\\( e^{i(\\alpha + \\beta)} = \\bigl(cos(\\alpha) + i.sin(\\alpha)\\bigr) \\bigl(cos(\\beta) + i.sin(\\beta)\\bigr) \\)";
    var eiThetaAPlusB3 = "\\( e^{i(\\alpha + \\beta)} = cos(\\alpha).cos(\\beta) + i.cos(\\alpha).sin(\\beta) + i.cos(\\beta).sin(\\alpha) - sin(\\alpha).sin(\\beta) \\)";
    var eiThetaAPlusB4 = "\\( e^{i(\\alpha + \\beta)} = \\underbrace{ \\bigl(cos(\\alpha).cos(\\beta) - sin(\\alpha).sin(\\beta)\\bigl) } _\\text{partie réelle}  + i.\\underbrace{\\bigl(sin(\\alpha).cos(\\beta) + sin(\\beta).cos(\\alpha)\\bigl) } _\\text{ partie imaginaire } \\)";

    return (
        <>      
            <Container className="Focus">
                <MathJaxDisplay toShow={sinAplusB} />
                <MathJaxDisplay toShow={sinAminusB} />
            </Container> 

            <Container className="Focus">
                <MathJaxDisplay toShow={cosAplusB} />
                <MathJaxDisplay toShow={cosAminusB} />
            </Container> 

            <Title1 title="Démonstration" />
            <p>En écrivant le complexe d'argument <MathJaxInline toShow={"$ \\alpha + \\beta$"}/> sous sa forme complexe exponentielle, on obtient : </p>
            <MathJaxDisplay toShow={eiThetaAPlusBgen} demo />
            
            <Aside>
                <p>Mais</p>
                <MathJaxDisplay toShow={eiThetaAPlusB} demo />
                <MathJaxDisplay toShow={eiThetaAPlusB2} demo />
                <MathJaxDisplay toShow={eiThetaAPlusB3} demo />
                <MathJaxDisplay toShow={eiThetaAPlusB4} demo />
            </Aside>
            
            <p>- <MathJaxInline toShow={"$cos(\\alpha).cos(\\beta) - sin(\\alpha).sin(\\beta)$"}/> est la partie réelle de <MathJaxInline toShow={"$e^{i(\\alpha + \\beta)}$"}/>.</p>
            <p>- <MathJaxInline toShow={"$sin(\\alpha).cos(\\beta) + sin(\\beta).cos(\\alpha)$"}/> est sa partie imaginaire.</p>
            <p>Soit en identifiant les parties correspondantes entre elles on a : </p>
            <MathJaxDisplay toShow={cosAplusB} demo />
            <MathJaxDisplay toShow={sinAplusB} demo />

            <p>On peut de même effectuer la même chose sur le complexe d'argument <MathJaxInline toShow={"$ \\alpha - \\beta$"}/>.</p>
        
        </>
    )
}

export default FormulesDAddition;