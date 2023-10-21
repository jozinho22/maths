import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const ProprietesDeLIntegrale = () => {

    var intAA = "\\(  \\int_a^a f(t)dt = F(a) - F(a) = 0\\)";

    var intAB = "\\(  \\int_a^b f(t)dt = F(b) - F(a)  \\)";
    var intBA = "\\(  \\int_b^a f(t)dt = F(a) - F(b)  \\)";
    var intBA2 = "\\(  \\int_b^a f(t)dt = - \\int_a^b f(t)dt\\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ f $"} /> une fonction continue sur un intervalle <MathJaxInline toShow={"$ I = [a, b] $"} /> et <MathJaxInline toShow={"$ a, b $"} /> deux réels tels que  <MathJaxInline toShow={"$ a < b $"} />.</p>
                <Title1 title="De a vers a" />
                <Container className="Focus">
                     <MathJaxDisplay toShow={intAA} />  
                </Container>
                <Title1 title="De a vers b" />
                <Container className="Focus">
                     <MathJaxDisplay toShow={intAB} />  
                </Container>
                 <Title1 title="De b vers a" />
                <Container className="Focus">
                     <MathJaxDisplay toShow={intBA} />  
                </Container>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intBA2} />  
                </Container>
            </>
}

export default ProprietesDeLIntegrale;