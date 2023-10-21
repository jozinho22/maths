import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';


const Positivite = () => {

    var intABpos = "\\( f \\enspace continue \\enspace et \\enspace positive \\enspace  sur \\enspace I \\Longrightarrow \\int_a^b f(t)dt \\geq 0 \\)";
    var FaFb = "\\(  F(a) \\leq F(b)  \\)";
    var FaFb2 = "\\(  F(a) - F(b) \\leq 0  \\)";
    var FaFb3 = "\\(  \\Longleftrightarrow \\int_a^b f(t)dt \\leq 0  \\)";

    var intABneg = "\\( f \\enspace continue \\enspace et \\enspace n \\acute{e} gative \\enspace  sur \\enspace I \\Longrightarrow \\int_a^b f(t)dt \\leq 0 \\)";


    return  <>
                <p>Si <MathJaxInline toShow={"$ f $"} /> est une fonction continue et positive sur un intervalle <MathJaxInline toShow={"$ I = [a, b] $"} /> et <MathJaxInline toShow={"$ a, b $"} /> deux réels tels que  <MathJaxInline toShow={"$ a < b $"} />,</p>
                <p>alors <MathJaxInline toShow={"$ \\int_a^b f(t)dt $"} /> est positive.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intABpos} />  
                </Container>

                <Title1 title={"Démonstration"} />
                <p><MathJaxInline toShow={"$ f $"} /> continue et <MathJaxInline toShow={"$ \\forall t \\in [a,b], \\enspace f(t) \\geq 0 $"} />.</p>
                <p>Si <MathJaxInline toShow={"$ F $"} /> est une primitive de <MathJaxInline toShow={"$ f $"} /> sur <MathJaxInline toShow={"$ [a,b] $"} />,</p>
                <p>alors <MathJaxInline toShow={"$ \\forall t \\in [a, b], \\enspace F'(t) = f(t) $"} />.</p>
                <p>Donc <MathJaxInline toShow={"$ F $"} /> est croissante sur <MathJaxInline toShow={"$ [a, b] $"} />.</p>
                <p>Dans ce cas, on a : </p>
                <MathJaxDisplay toShow={FaFb} />  
                <p>Et </p>
                <MathJaxDisplay toShow={FaFb2} /> 
                <MathJaxDisplay toShow={FaFb3} /> 
                <p>On a bien : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intABpos} />  
                </Container>

                <p>Attention, si on connait le signe de <MathJaxInline toShow={"$ \\int_a^b f(x)dx $"} />, on ne peut pas en déduire le signe de <MathJaxInline toShow={"$ f(x) $"} />. </p>

                <Title1 title={"Cas d'une fonction négative sur I"} />
                <p>Suivant la même logique, </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intABneg} />  
                </Container>
            </>
}

export default Positivite;