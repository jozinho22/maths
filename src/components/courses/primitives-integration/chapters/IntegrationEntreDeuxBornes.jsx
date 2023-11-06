import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const IntegrationEntreDeuxBornes = () => {

    var intAB = "\\(  \\int_a^b f(t)dt = F(b) - F(a) \\)";
    var intExample = "\\(  \\int_0^1 f(t)dt = \\int_0^1 (2t+3)dt \\)";
    var fFExample = "\\( \\Biggl\\{ \\begin{gather*} \\enspace \\enspace f(t) = 2t +3 \\\\  \\enspace  F(t) = t^2 + 3t + K \\end{gather*} \\)";
    var intExample2 = "\\(  \\int_0^1 f(t)dt  = [t^2 + 3t]_0^1 \\)";
    var intExample3 = "\\(  \\int_0^1 f(t)dt  = F(1)  - F(0) \\)";
    var intExample4 = "\\(  \\int_0^1 f(t)dt  = 1 + 3 + K - (0 + 0 + K) \\)";
    var intExample5 = "\\(  \\int_0^1 f(t)dt  = 4 \\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ f $"} /> une fonction continue sur un intervalle <MathJaxInline toShow={"$ I = [a, b] \\subset \\mathbb{R}$"} /> et <MathJaxInline toShow={"$ (a, b) \\in I $"} /> deux réels tels que <MathJaxInline toShow={"$ a < b $"} />.</p>
                <p>On note l'intégrale de <MathJaxInline toShow={"$ a $"} /> vers <MathJaxInline toShow={"$ b $"} /> : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intAB} />  
                </Container>
                <p><MathJaxInline toShow={"$ a $"} /> est la borne inférieure et <MathJaxInline toShow={"$ b $"} /> la borne supérieure.</p>
                <p><MathJaxInline toShow={"$ dt $"} /> indique que la variable d'intégration est <MathJaxInline toShow={"$ t $"} />.</p>
      
                <Title1 title={"Exemple"} />
                <p>Calculons</p>
                <MathJaxDisplay toShow={intExample} demo />  
                <p>On pose :</p>
                <MathJaxDisplay toShow={fFExample} demo />  
                <p>Alors : </p>
                <MathJaxDisplay toShow={intExample2} demo /> 
                <p>On ne note pas la constante <MathJaxInline toShow={"$ a $"} />, car elle va s'annuler par la suite en faisant la différence.</p> 
                <MathJaxDisplay toShow={intExample3} demo />  
                <MathJaxDisplay toShow={intExample4} demo />  
                <MathJaxDisplay toShow={intExample5} demo />  
                <p>Selon les vecteurs unitaires du repère, on dira que l'aire sous la courbe de cette fonction est égale à 4 unités d'aire (u.a.).</p>
            </>
}

export default IntegrationEntreDeuxBornes;