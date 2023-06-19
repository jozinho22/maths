import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title2 from '../../helpers/Title2';

const DeriveeDeRacineDeX = () => {
    
    var fSqr = "\\( \\forall x \\in \\mathbb{R_+^*}, f(x)=  \\sqrt{x}\\)";
    var fSqrTauxVar = "\\( a = \\frac{ \\sqrt{x + h} - \\sqrt{x } }{h} \\)";
    var fSqrTauxVar2 = "\\( a =  \\frac{ \\left( \\sqrt{x + h} - \\sqrt{x } \\right).\\left( \\sqrt{x + h} + \\sqrt{x } \\right) } {h. \\left(\\sqrt{x + h} + \\sqrt{x} \\right)} \\)";
    var fSqrTauxVar3 = "\\( a =  \\frac{ x + h - x } {h. \\left(\\sqrt{x + h} + \\sqrt{x} \\right)} \\)";
    var fSqrTauxVar4 = "\\( a = \\frac{h}{h.\\left( \\sqrt{x + h} + \\sqrt{x } \\right)} \\)";
    var fSqrTauxVar5 = "\\( a = \\frac{1}{ \\sqrt{x + h} + \\sqrt{x }} \\)";
    
    var limFSqrTauxVar = "\\( (\\sqrt{x})' =  lim_{ h \\to 0} \\enspace \\frac{1}{ \\left( \\sqrt{x + h} + \\sqrt{x } \\right)} \\)";
    var limFSqrTauxVar2 = "\\( (\\sqrt{x})' =  \\frac{1}{2. \\sqrt{x }} \\)";

    return  <>
                <p>
                    La fonction racine carrée est définie de la manière suivante :
                </p>
                <MathJaxDisplay toShow={fSqr} demo />  
                <p>
                   Calculons sa dérivée en procédant de la même manière que plus haut :
                </p>

                <Title2 title={"Calcul de la pente"} />
                <MathJaxDisplay toShow={fSqrTauxVar} demo /> 
                <p>Pour traiter avec les racines, il est souvent utile de faire appel à son conjugué : </p>
                <MathJaxDisplay toShow={fSqrTauxVar2} demo /> 
                <MathJaxDisplay toShow={fSqrTauxVar3} demo /> 
                <MathJaxDisplay toShow={fSqrTauxVar4} demo /> 
                <p>On simplifie les <MathJaxInline toShow={"$ h $"} /> : </p>
                <MathJaxDisplay toShow={fSqrTauxVar5} demo /> 

                <Title2 title={"Calcul de la limite"} />
                <MathJaxDisplay toShow={limFSqrTauxVar} demo /> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={limFSqrTauxVar2} />  
                </Container>

            </>
}

export default DeriveeDeRacineDeX;