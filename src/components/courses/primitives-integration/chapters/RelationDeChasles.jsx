import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const RelationDeChasles = () => {

    var chasles = "\\(  \\int_a^b f(t)dt  + \\int_b^c f(t)dt =  \\int_a^c f(t)dt  \\)";
    var chaslesDemo = "\\(  \\int_a^b f(t)dt  + \\int_b^c f(t)dt =  F(b) - F(a) + F(c) - F(b)  \\)";
    var chaslesDemo2 = "\\(  \\int_a^b f(t)dt  + \\int_b^c f(t)dt =  F(c) - F(a)  \\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ f $"} /> une fonction continue sur un intervalle <MathJaxInline toShow={"$ I = [a, c] $"} /> et <MathJaxInline toShow={"$ a, b, c $"} /> trois réels de <MathJaxInline toShow={"$ I$"} /> tels que <MathJaxInline toShow={"$ a < b < c $"} />.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={chasles} />  
                </Container>

                <Title1 title="Démonstration" />
                <MathJaxDisplay toShow={chaslesDemo} />  
                <MathJaxDisplay toShow={chaslesDemo2} /> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={chasles} />  
                </Container>     
            </>
}

export default RelationDeChasles;