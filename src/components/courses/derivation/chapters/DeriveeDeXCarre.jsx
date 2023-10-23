import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const DeriveeDeXCarre = () => {

    var fCarree = "\\( \\forall x \\in \\mathbb{R}, f(x)= x^2\\)";
    var fCarreePrim = "\\((x^2)' = lim_{ h \\to 0} \\enspace \\frac{f(x+h) - f(x)}{h }\\)";
    var fCarreePrim2 = "\\(\\Longleftrightarrow  lim_{ h \\to 0} \\enspace \\frac{(x+h)^2 - (x)^2}{h }\\)";
    var fCarreePrim3 = "\\(\\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{x^2 + 2xh + h^2 - x^2}{h }\\)";
    var fCarreePrim4 = "\\(\\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{2xh + h^2}{h }\\)";
    var fCarreePrim5 = "\\(\\Longleftrightarrow lim_{ h \\to 0} \\enspace h. \\frac{(2x + h)}{h }\\)";
    var fCarreePrim6 = "\\(\\Longleftrightarrow lim_{ h \\to 0} \\enspace 2x + h\\)";

    var fCarreePrim8 = "\\( (x^2)' = 2x\\)";

    return  <>
                <p>
                    La fonction carrée est définie de la manière suivante :
                </p>
                <MathJaxDisplay toShow={fCarree} demo /> 
                <p>Elle admet pour dérivée :</p> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={fCarreePrim8} />  
                </Container>

                <Title1 title={"Démonstration"} />
                <p>Avec la formule suivante vue plus haut, on a :</p>
                <MathJaxDisplay toShow={fCarreePrim} demo />  
                <MathJaxDisplay toShow={fCarreePrim2} demo />  
                <MathJaxDisplay toShow={fCarreePrim3} demo />  
                <MathJaxDisplay toShow={fCarreePrim4} demo /> 
                <p>On factorise par <MathJaxInline toShow={"$ h $"} /> :</p> 
                <MathJaxDisplay toShow={fCarreePrim5} demo /> 
                <MathJaxDisplay toShow={fCarreePrim6} demo /> 

                <p>Soit :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={fCarreePrim8} />  
                </Container>
            </>
}

export default DeriveeDeXCarre;