import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const MultiplicationDePuissances = () => {

    var txtThou = "3 fois ";
    var txtHundred = "2 fois ";
    var thouByHundred = "\\( 10^3 \\times 10^2 = \\underbrace { 10 \\times 10 \\times 10}_\\text{" + txtThou + "} \\times \\underbrace { 10 \\times 10}_\\text{" + txtHundred+ "} \\)";
    var thouByHundred2 = "\\( 10^3\\times 10^2 = 10^5 \\)";
    var powTimesPow = "\\(x^a.x^b = x^{a+b} \\)";
    
    return (
            <>
                <p>Si l'on multiplie des puissances ensemble, voici ce qu'il se passe : </p>
                <MathJaxDisplay toShow={thouByHundred} demo />
                <p>Soit</p>
                <MathJaxDisplay toShow={thouByHundred2} demo />
                <p>On voit que les exposants s'additionnent.
                    {"\n"}Ce qui nous donne la première formule :
                </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={powTimesPow} fRef={1} />
                </Container>
            </>
    );
}

export default MultiplicationDePuissances;