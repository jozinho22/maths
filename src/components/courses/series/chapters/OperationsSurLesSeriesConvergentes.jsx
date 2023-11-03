import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const OperationsSurLesSeriesConvergentes = () => {

    var unPlusvn = "\\( \\sum_{n=0}^{+\\infty} (u_n + v_n) = \\sum_{n=0}^{+\\infty} u_n + \\sum_{n=0}^{+\\infty} v_n  \\)";

    var lambdaUn = "\\( \\sum_{n=0}^{+\\infty} (\\lambda u_n) = \\lambda  \\sum_{n=0}^{+\\infty} (u_n) \\)";
   
    return  <>
                <p>On considère deux séries numériques <MathJaxInline toShow={"$ \\sum u_n$"} /> et <MathJaxInline toShow={"$ \\sum v_n$"} />, <MathJaxInline toShow={"$ \\lambda \\in \\mathbb{R} $"} /> un réel et <MathJaxInline toShow={"$ n_0 \\in \\mathbb{N} $"} /> un entier positif.</p>
                
                <Title1 title={"Propriétés"} />

                <Title2 title={"Propriété 1"} />
                <p>Si <MathJaxInline toShow={"$ \\sum u_n$"} /> converge, alors il existe un entier <MathJaxInline toShow={"$ n_0$"} /> tel que <MathJaxInline toShow={"$ \\underset{n \\geqslant n_0}{ \\sum u_n } $"} /> converge.</p>
                
                <Title2 title={"Propriété 2-a"} />
                <p>Si <MathJaxInline toShow={"$ \\sum u_n$"} /> et <MathJaxInline toShow={"$ \\sum v_n$"} /> convergent, alors <MathJaxInline toShow={"$ \\sum (u_n + v_n) $"} /> converge et :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={unPlusvn} />  
                </Container>

                <Title2 title={"Propriété 2-b"} />
                <p>Si <MathJaxInline toShow={"$ \\sum u_n$"} /> converge et <MathJaxInline toShow={"$ \\sum v_n$"} /> diverge, alors <MathJaxInline toShow={"$ \\sum (u_n + v_n) $"} /> diverge.</p>
       
                <Title2 title={"Propriété 3"} />
                <p>Si <MathJaxInline toShow={"$ \\sum u_n$"} /> converge, alors <MathJaxInline toShow={"$ \\lambda \\sum u_n$"} /> converge et :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={lambdaUn} />  
                </Container>
            </>
}

export default OperationsSurLesSeriesConvergentes;