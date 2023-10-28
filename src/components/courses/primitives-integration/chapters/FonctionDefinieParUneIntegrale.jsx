import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const FonctionDefinieParUneIntegrale = () => {

    var F = "\\(  F(x) = \\int_a^x f(t)dt  \\)";
    var intf = "\\(   F(x) = \\int_a^x f(t)dt = \\Bigl[G(t)\\Bigr]_a^x \\)";
    var intf2 = "\\(  F(x) = \\int_a^x f(t)dt = G(x) - G(a) \\)";
    var intf3 = "\\(  F'(x) = \\int_a^x f(t)dt = G'(x) - \\underbrace { G'(a) } _\\text{= 0}  \\)";
    var intfPrim = "\\( \\Biggl\\{\\begin{gather*}  \\enspace F'(x)= G'(x) \\\\ F'(x)= f(x) \\end{gather*}  \\)";
    var FPrimAndFa = "\\( \\Biggl\\{\\begin{gather*} \\enspace \\enspace \\enspace  F'(x)= f(x) \\\\ F(a)= 0 \\end{gather*} \\)";

    var int1overT = "\\(  \\int_1^x \\frac{dt}{t} = ln(x)  \\)";

     var Fsup = "\\(  F(x) = \\int^x f(t)dt  \\)";


    return  <>
                <p>Soit <MathJaxInline toShow={"$ f $"} /> une fonction continue sur un intervalle <MathJaxInline toShow={"$ I $"} />.</p>
                <p><MathJaxInline toShow={"$ a $"} /> est constant, <MathJaxInline toShow={"$ x $"} /> une variable et <MathJaxInline toShow={"$ a, x \\in I $"} />.</p>
                <p>On définie une fonction <MathJaxInline toShow={"$ F $"} /> telle que : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={F} />  
                </Container>
          
                <p>Soit <MathJaxInline toShow={"$ G $"} /> la primitive de <MathJaxInline toShow={"$ f $"} /> sur <MathJaxInline toShow={"$ I $"} />. </p>
                <MathJaxDisplay toShow={intf} demo />  
                <MathJaxDisplay toShow={intf2} demo />  
                <MathJaxDisplay toShow={intf3} demo />
                <MathJaxDisplay toShow={intfPrim} demo /> 
                <p><MathJaxInline toShow={"$ F $"} /> est donc une primitive de  <MathJaxInline toShow={"$ f $"} />.</p> 
                <p>Mais,</p>
                <MathJaxDisplay toShow={F} demo />
                <p>Alors <MathJaxInline toShow={"$ F $"} /> est la primitive de <MathJaxInline toShow={"$ f $"} /> qui s'annule en <MathJaxInline toShow={"$ a $"} />, c'est-à-dire : </p>
                <MathJaxDisplay toShow={FPrimAndFa} demo />

                <Title1 title="Exemple" />
                <Container className="Focus">
                     <MathJaxDisplay toShow={int1overT} />  
                </Container>

                <Title1 title="Notation générale d'une primitive" />
                <p>De manière plus générale, on sera amené à écrire une primitive unqiuement en fonction de sa borne supérieure.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={Fsup} />  
                </Container>
            </>
}

export default FonctionDefinieParUneIntegrale;