import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const DeriveeDeRacineDeX = () => {
    
    var fSqr = "\\( \\forall x \\in \\mathbb{R_+^*}, \\enspace f(x)=  \\sqrt{x}\\)";
    var fSqrPrim = "\\( (\\sqrt{x})' = lim_{ h \\to 0} \\enspace  \\frac{ \\sqrt{x + h} - \\sqrt{x } }{h} \\)";
    var fSqrPrim2 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace  \\frac{ \\left( \\sqrt{x + h} - \\sqrt{x } \\right).\\left( \\sqrt{x + h} + \\sqrt{x } \\right) } {h. \\left(\\sqrt{x + h} + \\sqrt{x} \\right)} \\)";
    var fSqrPrim3 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace  \\frac{ x + h - x } {h. \\left(\\sqrt{x + h} + \\sqrt{x} \\right)} \\)";
    var fSqrPrim4 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace  \\frac{h}{h.\\left( \\sqrt{x + h} + \\sqrt{x } \\right)} \\)";
    var fSqrPrim5 = "\\( \\Longleftrightarrow  lim_{ h \\to 0} \\enspace  \\frac{1}{ \\sqrt{x + h} + \\sqrt{x }} \\)";
    
    var fSqrPrim6 = "\\( \\Longleftrightarrow  lim_{ h \\to 0} \\enspace \\frac{1}{ \\left( \\sqrt{x + h} + \\sqrt{x } \\right)} \\)";
    var fSqrPrim7 = "\\( (\\sqrt{x})' =  \\frac{1}{2. \\sqrt{x }} \\)";

    return  <>
                <p>
                    La fonction racine carrée est définie de la manière suivante :
                </p>
                <MathJaxDisplay toShow={fSqr} demo /> 
                <p>Elle admet pour dérivée :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={fSqrPrim7} />  
                </Container> 

                <Title1 title={"Démonstration"} />
                <MathJaxDisplay toShow={fSqrPrim} demo /> 
                <p>Pour traiter avec les racines, il est souvent utile de faire appel à son conjugué : </p>
                <MathJaxDisplay toShow={fSqrPrim2} demo /> 
                <MathJaxDisplay toShow={fSqrPrim3} demo /> 
                <MathJaxDisplay toShow={fSqrPrim4} demo /> 
                <p>On simplifie les <MathJaxInline toShow={"$ h $"} /> : </p>
                <MathJaxDisplay toShow={fSqrPrim5} demo /> 

                <MathJaxDisplay toShow={fSqrPrim6} demo /> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={fSqrPrim7} />  
                </Container>

            </>
}

export default DeriveeDeRacineDeX;