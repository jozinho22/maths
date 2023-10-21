import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';


const Linearite = () => {

    var intfgAB = "\\(  \\int_a^b \\Bigl(f(t) + g(t)\\Bigr) dt = \\int_a^b f(t) dt + \\int_a^b g(t) dt \\)";
    var intfgABDemo = "\\(  \\int_a^b \\Bigl(f(t) + g(t)\\Bigr) dt = [F(t) + G(t)]_a^b \\)";
    var intfgABDemo2 = "\\(  \\int_a^b \\Bigl(f(t) + g(t)\\Bigr) dt = F(b) + G(b) - (F(a) + G(a)) \\)";
    var intfgABDemo3 = "\\(  \\int_a^b \\Bigl(f(t) + g(t)\\Bigr) dt = - F(a) + G(b) - G(a) \\)";
    
    var intfgABGen = "\\( \\int_a^b \\Bigl(\\lambda .f(t) + \\mu. g(t)\\Bigr) dt = \\lambda \\int_a^b f(t) dt + \\mu \\int_a^b g(t) dt \\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ F, G $"} /> deux primitives respectives de deux fonctions <MathJaxInline toShow={"$ f, g $"} /> sur un intervalle <MathJaxInline toShow={"$ I $"} />, <MathJaxInline toShow={"$ a, b $"} /> deux réels.</p>
                
                <Container className="Focus">
                     <MathJaxDisplay toShow={intfgAB} />  
                </Container>

                <p>La primitive d'une somme est la somme des primitives.</p>

                <Title1 title="Démonstration" />
                <MathJaxDisplay toShow={intfgABDemo} /> 
                <MathJaxDisplay toShow={intfgABDemo2} /> 
                <MathJaxDisplay toShow={intfgABDemo3} /> 
                <MathJaxDisplay toShow={intfgAB} />

                <p>Et de manière plus générale, avec <MathJaxInline toShow={"$ \\lambda, \\mu \\in \\mathbb{R} $"} /> : </p>
                 <Container className="Focus">
                     <MathJaxDisplay toShow={intfgABGen} />  
                </Container>
                
            </>
}

export default Linearite;