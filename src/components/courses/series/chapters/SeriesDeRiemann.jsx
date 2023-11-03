import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const SeriesDeRiemann = () => {

    var riemannSeries = "\\( \\sum_{n=1}^{+\\infty} \\frac{1}{n^{\\alpha}}, \\enspace (avec \\enspace \\alpha \\in \\mathbb{R}) \\)";

    var conv = "\\( \\sum_{n=0}^{+\\infty}(u_n) = lim_{n \\to +\\infty} (S_n) = lim_{n \\to +\\infty} \\left( \\sum_{k=0}^n uk \\right) \\)";
   
    return  <>
                <p>On définit une série de Riemann de la manière suivante :</p>   
                <Container className="Focus">
                     <MathJaxDisplay toShow={riemannSeries} />  
                </Container>
                
            </>
}

export default SeriesDeRiemann;