import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const ResteDUneSerieConvergente = () => {
   
    var serie = "\\(  S_n = \\sum_{k=0}^n u_k \\)";

    var SerieInf = "\\( \\sum u_n =  \\sum_{n=0}^{+\\infty} u_n \\)"; 

    var seriesGenShort = "\\(  \\forall n \\in \\mathbb{N}, \\enspace \\sum u_n = S_n + R_n \\)";

    var seriesGen = "\\(  \\sum_{n=0}^{+\\infty} u_n =  \\sum_{k=0}^{n} u_k  +  \\sum_{k=n+1}^{+\\infty} u_k \\)";

    return  <>
                <p>Nous avons définie plus tôt une série comme, </p>
                <MathJaxDisplay toShow={serie} demo />  
                <p>or lors de l'étude de la convergence, on voit apparaître la série snumérique sous la forme :</p>
                <MathJaxDisplay toShow={SerieInf} demo />  
                <p>Donnons un sens à cette différence et considérons un reste <MathJaxInline toShow={"$R_n$"} /> de la série convergente <MathJaxInline toShow={"$\\sum u_n$"} />.</p>
  
                <MathJaxDisplay toShow={seriesGenShort} demo />  
                <p>Soit :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={seriesGen} />  
                </Container>
                <p>On considère que </p>
    
            </>
}

export default ResteDUneSerieConvergente;