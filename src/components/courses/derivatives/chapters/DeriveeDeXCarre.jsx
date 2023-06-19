import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title2 from '../../helpers/Title2';

const DeriveeDeXCarre = () => {

    var fCarree = "\\( \\forall x \\in \\mathbb{R}, f(x)= x^2\\)";
    var fCarreeTauxVar = "\\(a = \\frac{f(x+h) - f(x)}{h }\\)";
    var fCarreeTauxVar2 = "\\(a = \\frac{(x+h)^2 - (x)^2}{h }\\)";
    var fCarreeTauxVar3 = "\\(a = \\frac{x^2 + 2xh + h^2 - x^2}{h }\\)";
    var fCarreeTauxVar4 = "\\(a = \\frac{2xh + h^2}{h }\\)";
    var fCarreeTauxVar5 = "\\(a = h. \\frac{(2x + h)}{h }\\)";
    var fCarreeTauxVar6 = "\\(a = 2x + h\\)";

    var limFCarreeTauxVar = "\\( (x^2)' = lim_{ h \\to 0} \\enspace (2x + h)\\)";
    var limFCarreeTauxVar2 = "\\( (x^2)' = 2x\\)";

    return  <>
                <p>
                    La fonction carrée est définie de la manière suivante :
                </p>
                <MathJaxDisplay toShow={fCarree} demo />  
                <p>
                   Calculons sa dérivée :
                </p>

                <Title2 title={"Calcul de la pente"} />
                <p>On calcule la pente, puis on cherchera la limite quand <MathJaxInline toShow={"$ h \\to 0 $"} /> ( h tend vers 0 ).</p>
                <p>Avec la formule suivante vue plus haut, on a :</p>
                <MathJaxDisplay toShow={fCarreeTauxVar} demo />  
                <MathJaxDisplay toShow={fCarreeTauxVar2} demo />  
                <MathJaxDisplay toShow={fCarreeTauxVar3} demo />  
                <MathJaxDisplay toShow={fCarreeTauxVar4} demo /> 
                <p>On factorise par <MathJaxInline toShow={"$ h $"} /> :</p> 
                <MathJaxDisplay toShow={fCarreeTauxVar5} demo /> 
                <MathJaxDisplay toShow={fCarreeTauxVar6} demo /> 

                <Title2 title={"Calcul de la limite"} />
                <p>Calculons à présent la limite de ce qu’on vient de trouver :</p>
                <MathJaxDisplay toShow={limFCarreeTauxVar} demo /> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={limFCarreeTauxVar2} />  
                </Container>
            </>
}

export default DeriveeDeXCarre;