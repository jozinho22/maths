import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const TheoremeFondamentalDeLAnalyse = () => {

    var F = "\\( F(x) = \\int_a^x f(t)dt \\)";
    var FPrim = "\\( \\forall x \\in ]a, b [, \\enspace F'(x) = f(x) \\)";

    var intAb = "\\( \\int_a^b f(t)dt = \\Bigl[ F(t) \\Bigr]_a^b =  F(b) - F(a) \\)";
    var intf = "\\( \\int_a^b f(t)dt  \\)";

    return  <>
                <Title1 title="Premier théorème" />
                <p>
                   Soit <MathJaxInline toShow={"$ f $"} /> une fonction continue sur un intervalle  <MathJaxInline toShow={"$ I = [a, b],  \\enspace I \\in \\mathbb{R} $"} />.
                </p>
                <p>Alors la fonction</p>
                <MathJaxDisplay toShow={F} demo />   
                <p>est dérivable sur <MathJaxInline toShow={"$]a, b [$"} /> telle que : </p> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={FPrim} />  
                </Container>

                <Title1 title="Second théorème" />
                <p>
                   Soit <MathJaxInline toShow={"$ f $"} /> une fonction continue sur un intervalle <MathJaxInline toShow={"$ I = [a, b], I \\in \\mathbb{R} $"} /> ayant une primitive <MathJaxInline toShow={"$ F $"} /> sur <MathJaxInline toShow={"$ I $"} />.
                </p>
                <p>Si <MathJaxInline toShow={"$ f $"} /> est intégrable sur <MathJaxInline toShow={"$ I $"} />, alors : </p>
               <Container className="Focus">
                     <MathJaxDisplay toShow={intAb} />  
                </Container> 

                <Title1 title="Aire sous la courbe" />
                <p>Dans le second théorème l'expression</p>
                <MathJaxDisplay toShow={intf} demo />   
                <p>sera égale à l'aire située entre la courbe représentative de la fonction <MathJaxInline toShow={"$ f $"} /> et l'axe des abscisses.</p>
            </>
}

export default TheoremeFondamentalDeLAnalyse;