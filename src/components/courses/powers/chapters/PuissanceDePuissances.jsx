import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const PuissanceDePuissances = () => {

    var txtThou = "3 fois ";
    var thouPow2 = "\\( \\big(10^3\\big)^2 = \\underbrace { 10 \\times 10 \\times 10}_\\text{" + txtThou + "} \\times \\underbrace { 10 \\times 10 \\times 10}_\\text{" + txtThou + "}  \\)";
    var thouPow22 = "\\( \\big(10^3\\big)^2  = 10^6  \\)";
    var powPow = "\\( \\big(x^a\\big)^b = x^{ab} \\)";

    return (
            <>
                <p className="Title1">Puissances de puissances</p>
                <p>Si maintenant on met une puissance exposé à une puissance : </p>
                 <MathJaxDisplay toShow={thouPow2} demo />
                <p>Soit</p>
                <MathJaxDisplay toShow={thouPow22} demo />
                <p>On remarque cette fois que les exposants se multiplient.
                    {"\n"}Ce qui nous donne la formule suivante :
                </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={powPow} fRef={4}/>
                </Container>
            </>
    );
}

export default PuissanceDePuissances;