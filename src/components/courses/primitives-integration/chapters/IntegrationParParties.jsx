import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

const IntegrationParParties = () => {

    var intParParties = "\\( \\int_a^b (uv')dt = \\Bigl[uv\\Bigr]_a^b - \\int_a^b (u'v)dt \\)";
    
    var intParPartiesDemo = "\\( (uv)' = u'v + v'u \\)";
    var intParPartiesDemo2 = "\\( uv' = (uv)' -  u'v \\)";
    var intParPartiesDemo3 = "\\( \\int_a^b (uv')dt = \\int_a^b (uv)'dt -  \\int_a^b (u'v) dt \\)";

    var intSinX = "\\( \\int_0^{\\frac{\\pi}{2}} t.sin(t)dt \\)";
    var intSinXuvPrim = "\\( \\Biggl\\{\\begin{gather*} u = t \\\\ \\enspace \\enspace \\enspace v' = sin(t) \\end{gather*}  \\)";
    var intSinXfPrimg = "\\( \\Biggl\\{\\begin{gather*} u' = 1 \\\\ \\enspace \\enspace \\enspace v = -cos(t) \\end{gather*}  \\)";
    var intSinX2 = "\\( \\int_0^{\\frac{\\pi}{2}} t.sin(t)dt = \\Bigl[-t.cos(t)\\Bigr]_a^b - \\int_a^b -cos(t)dt   \\)";
    var intSinX3 = "\\( \\int_0^{\\frac{\\pi}{2}} t.sin(t)dt = \\Bigl[-t.cos(t)\\Bigr]_a^b + [sin(t)]_a^b   \\)";
    var intSinX4 = "\\( \\int_0^{\\frac{\\pi}{2}} t.sin(t)dt = \\Bigl[-t.cos(t) + sin(t)\\Bigr]_a^b = 1   \\)";
    
    var intLnX = "\\( \\int_1^e ln(t)dt \\)";
    var intLnXuvPrim = "\\( \\Biggl\\{\\begin{gather*} \\enspace \\enspace u = ln(t) \\\\ v' = 1 \\end{gather*}  \\)";
    var intLnXfPrimg = "\\( \\Biggl\\{\\begin{gather*} \\enspace \\enspace u' = \\frac{1}{t} \\\\ v = t \\end{gather*}  \\)";
    var intLnX2 = "\\( \\int_0^{\\frac{\\pi}{2}} t.ln(t)dt = \\Bigl[t.ln(t)\\Bigr]_1^e - \\int_1^e dt  = 1  \\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ u, v $"} /> deux fonctions continues et dérivables sur un intervalle <MathJaxInline toShow={"$ I = [a, b] $"} />, <MathJaxInline toShow={"$ a $"} /> et <MathJaxInline toShow={"$ b $"} /> deux réels et leur dérivée respective <MathJaxInline toShow={"$ u', v' $"} /> de même continue sur <MathJaxInline toShow={"$ I$"} />. </p>
                <p>On a alors l'égalité : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intParParties} />  
                </Container>
                <p>Cette formule est utile pour calculer diverses intégrales, en choisissant judicieusement <MathJaxInline toShow={"$ f $"} /> et <MathJaxInline toShow={"$ g' $"} />.</p>

                <Title1 title="Démonstration" />
                <p>Par <Link url={`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/derivee-d-un-produit-de-fonctions`} external>la dérivée d'un produit</Link>, on a :</p>
                <MathJaxDisplay toShow={intParPartiesDemo} demo />  
                <MathJaxDisplay toShow={intParPartiesDemo2} demo />  
                <p>Grâce à la linéarité,</p>
                <MathJaxDisplay toShow={intParPartiesDemo3} demo />  
                <Container className="Focus">
                     <MathJaxDisplay toShow={intParParties} />  
                </Container>

                <Title1 title="Exemple" />
                <p>Calculer :</p>
                <MathJaxDisplay toShow={intSinX} demo />  
                <p>On prend <MathJaxInline toShow={"$ f $"} /> et <MathJaxInline toShow={"$ g' $"} /> tels que : </p>
                <MathJaxDisplay toShow={intSinXuvPrim} demo />  
                <MathJaxDisplay toShow={intSinXfPrimg} demo /> 
                <MathJaxDisplay toShow={intSinX2} demo />  
                <MathJaxDisplay toShow={intSinX3} demo />   
                <MathJaxDisplay toShow={intSinX4} demo />  

                <Title1 title="Autre exemple" />
                <MathJaxDisplay toShow={intLnX} demo />  
                <MathJaxDisplay toShow={intLnXuvPrim} demo /> 
                <MathJaxDisplay toShow={intLnXfPrimg} demo /> 
                <MathJaxDisplay toShow={intLnX2} demo /> 
            </>
}

export default IntegrationParParties;