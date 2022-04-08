import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const PythagoreAppliqueALatrigo = () => {

    var pyth = "\\((cos(\\alpha))^2 + (sin(\\alpha))^2 = 1\\)";
    var pyth2 = "\\(cos^2(\\alpha)+ sin^2(\\alpha) = 1\\)";

    return (
            <>
                <p>Sur la figure 1, on voit que nous sommes dans le cas d'un triangle rectangle formé par <MathJaxInline toShow={"$cos(\\alpha)$"} />, <MathJaxInline toShow={"$sin(\\alpha)$"} /> et son hypothénuse <MathJaxInline toShow={"$R$"} />.
                 {"\n"}Grâce au théorème de Pythagore, on sait que :</p>
                <MathJaxDisplay toShow={pyth} />
                <p>Mais voici plutôt la façon exacte de noter cette formule :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={pyth2} fRef={1} />
                </Container>
        
            </>
    )
}

export default PythagoreAppliqueALatrigo;