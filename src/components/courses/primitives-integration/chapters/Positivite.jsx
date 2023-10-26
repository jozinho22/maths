import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import ImageZoom from '../../helpers/ImageZoom';
import integrationPositivite from '../assets/integration-positivite.png';

const Positivite = () => {

    var n = 0;

    var intABpos = "\\( f \\enspace continue \\enspace et \\enspace positive \\enspace  sur \\enspace [a, b] \\Longrightarrow \\int_a^b f(t)dt \\geqslant 0 \\)";
    var FPrim = "\\(F'(t) = f(t) \\)";
    var FaFb = "\\(  F(a) \\leqslant F(b)  \\)";
    var FaFb2 = "\\(  F(b) - F(a) \\geqslant 0  \\)";
    var FaFb3 = "\\(  \\Longleftrightarrow \\int_a^b f(t)dt \\geqslant 0  \\)";

    var intABneg = "\\( f \\enspace continue \\enspace et \\enspace n \\acute{e} gative \\enspace  sur \\enspace [a, b] \\Longrightarrow \\int_a^b f(t)dt \\leqslant 0 \\)";

    var aPlusB = "\\(  A_{totale} = A  + B  \\)";
    var aPlusBInt = "\\(  A_{totale} = \\underbrace { \\int_0^b f(t)dt  } _\\text{partie positive} - \\underbrace {  \\int_a^0 f(t)dt } _\\text{partie négative} \\)";
    var aPlusBInt2 = "\\(  A_{totale} =  \\int_0^b f(t)dt + \\int_0^a f(t)dt  \\)";

    return  <>
                <p>Si <MathJaxInline toShow={"$ f $"} /> est une fonction continue et positive sur un intervalle <MathJaxInline toShow={"$ I = [a, b] $"} /> et <MathJaxInline toShow={"$ a, b $"} /> deux réels tels que  <MathJaxInline toShow={"$ a < b $"} />,</p>
                <p>alors <MathJaxInline toShow={"$ \\int_a^b f(t)dt $"} /> est positive.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intABpos} />  
                </Container>

                <Title1 title={"Démonstration"} />
                <p><MathJaxInline toShow={"$ f $"} /> continue et <MathJaxInline toShow={"$ \\forall t \\in [a,b], \\enspace f(t) \\geqslant 0 $"} />.</p>
                <p>Si <MathJaxInline toShow={"$ F $"} /> est une primitive de <MathJaxInline toShow={"$ f $"} /> sur <MathJaxInline toShow={"$ [a,b] $"} />, alors :</p>
                <p><MathJaxInline toShow={"$ \\forall t \\in [a, b] $"} />,</p>
                <MathJaxDisplay toShow={FPrim} demo/> 
                <p>Donc <MathJaxInline toShow={"$ F $"} /> est croissante sur <MathJaxInline toShow={"$ [a, b] $"} />.</p>
                <p>Dans ce cas, on a : </p>
                <MathJaxDisplay toShow={FaFb} demo/>  
                <p>Et </p>
                <MathJaxDisplay toShow={FaFb2} demo/> 
                <MathJaxDisplay toShow={FaFb3} demo /> 
                <p>On a bien : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intABpos} />  
                </Container>

                <p>Attention, si on connait le signe de <MathJaxInline toShow={"$ \\int_a^b f(x)dx $"} />, on ne peut pas en déduire le signe de <MathJaxInline toShow={"$ f(x) $"} />. </p>

                <Title1 title={"Cas d'une fonction négative sur un intervalle"} />
                <p>Suivant la même logique, </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intABneg} />  
                </Container>

                <Title1 title={"Calcul d'une aire d'une fonction à valeurs positives et négatives"} />
               <p>Nous l'avons dit, le signe d'une intégrale va suivre le signe de la fonction sur l'intervalle d'étude.</p>
               <p>Par conséquent, si l'on veut calculer une aire totale sur une fonction à la fois négative et positive sur son intervalle d'étude, il nous faut changer le signe de la partie négative.</p>
               <p>Une aire négative ne peut pas avoir de sens dans la réalité.</p>
               <ImageZoom src={integrationPositivite} name="Calcul d'intégrale sur une fonction à valeurs négatives et positives" n={++n} />
               <p>Appellons <MathJaxInline toShow={"$ A_{totale} $"} /> la somme des deux aires <MathJaxInline toShow={"$ A $"} /> et <MathJaxInline toShow={"$ B $"} /> ci-dessus.</p>
               <MathJaxDisplay toShow={aPlusB} demo/> 
               <MathJaxDisplay toShow={aPlusBInt} demo/> 
               <Container className="Focus">
                     <MathJaxDisplay toShow={aPlusBInt2} />  
                </Container>
            </>
}

export default Positivite;