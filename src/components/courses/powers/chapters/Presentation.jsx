import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const Definition = () => {

    var txtMillion = "6 fois le nombre 10";
    var million = "\\( 1 \\; 000 \\; 000 =  \\underbrace { 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 }_\\text{" + txtMillion + "} \\)";
    var million2 = "\\(1 \\; 000 \\; 000 = 10^6 \\)";

    var txtPowGen = " n facteurs"
    var powGen = "\\(x^n = \\underbrace{ x \\times x \\times x \\times x ...}_\\text{" + txtPowGen + "} \\)";
    var powGen2 = "\\(x^n = \\prod_{n=1}^n x  \\)";

    return (
        <>
            <p> Les puissances sont une manière d'exprimer de petits ou de grands nombres de manière plus simple et plus lisibles.
                {"\n"} Par exemple, pour un million.
            </p> 
            <MathJaxDisplay toShow={million} demo />  
            <MathJaxDisplay toShow={million2} demo />  
            <p>Le nombre en exposant sera le nombre de fois où le nombre sera multiplié par lui-même.</p>
            <Container className="Focus"> 
                <MathJaxDisplay toShow={powGen}/>  
            </Container>
            <p>Soit de manière plus générale : </p>
            <Container className="Focus"> 
                <MathJaxDisplay toShow={powGen2}/>  
            </Container>
            </>
    )

}

export default Definition;