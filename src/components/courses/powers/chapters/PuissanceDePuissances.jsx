import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const PuissanceDePuissances = () => {

    var txtThou = "3 fois ";
    var thouPow2 = "\\( \\big(10^3\\big)^2 = \\underbrace { 10 \\times 10 \\times 10}_\\text{" + txtThou + "} \\times \\underbrace { 10 \\times 10 \\times 10}_\\text{" + txtThou + "}  \\)";
    var thouPow22 = "\\( \\big(10^3\\big)^2  = 10^6  \\)";
    var powPow = "\\( \\big(x^a\\big)^b = x^{ab} \\)";

    return (
            <>
                <p>Si maintenant on met une puissance exposé à une puissance : </p>
                 <MathJaxDisplay toShow={thouPow2} demo />
                <p>Soit</p>
                <MathJaxDisplay toShow={thouPow22} demo />
                <p>On remarque cette fois que les exposants se multiplient.
                    {"\n"}Ce qui nous donne la formule suivante :
                </p>
                
                <MathJaxDisplay toShow={powPow} demo />

                <p>Avec <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> des entiers naturels (l'ensemble <MathJaxInline toShow={"$\\mathbb{N}$"} />) .</p>
                
                <p>Il est alors possible de démontrer que c'est le cas pour deux réels (l'ensemble <MathJaxInline toShow={"$\\mathbb{R}$"} />) : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={powPow} fRef={4}/>
                     <MathJaxDisplay toShow={"\\( avec \\enspace a \\enspace et \\enspace b \\in \\mathbb{R} \\)"} demo />
                </Container> 
            </>
    );
}

export default PuissanceDePuissances;