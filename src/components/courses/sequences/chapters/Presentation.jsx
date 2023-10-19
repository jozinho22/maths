import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const Presentation = () => {

    var sequencesGen = "\\( \\forall n \\in \\mathbb{N}, \\enspace (u_n = f(n))\\)";
    var sequencesExample = "\\( \\forall n \\in \\mathbb{N}, \\enspace avec \\enspace n \\geq 0, \\enspace (u_n = 3n+ 2) \\)";

    return  <>
                <p>
                    Les suites numériques sont une suite de résultats, relatifs un indice <MathJaxInline toShow={"$ n $"} /> (<MathJaxInline toShow={"$ n $"} /> étant un nombre entier).
                </p>
                <p>
                   Elles sont exprimées sous la forme :
                </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={sequencesGen} />  
                </Container>
                <p>Au minimum, <MathJaxInline toShow={"$ n $"} /> commence à <MathJaxInline toShow={"$ 0 $"} />, mais il peut commencer à tout indice supérieur ou égal à <MathJaxInline toShow={"$ 0 $"} />.</p>
                <p>
                    Alors, pour une suite exprimée sous la forme : 
                </p>
                <MathJaxDisplay toShow={sequencesExample} /> 
                <p>On a les premiers termes de la suite suivants : </p>
                <p><MathJaxInline toShow={"$ u_0 = 2 $"} />, <MathJaxInline toShow={"$ u_1 = 5 $"} />, <MathJaxInline toShow={"$ u_2 = 8 $"} />...etc.</p>
                {/* <ImageZoom src={derivativeFirstApprox} name="Présentation de la dérivée" n={++n} /> */}
                <p>Tout comme les suites, on remplace l'indice <MathJaxInline toShow={"$ n $"} /> dans l'expression générale de la suite.</p>
            </>
}

export default Presentation;