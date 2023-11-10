import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const EDL1CoefficientConstantExempleVerif = () => {

    var EDL1EYg = "\\( y_g(x) = K. e^{-2x} + \\frac{x^2}{2} - \\frac{x}{2} + \\frac{1}{4} - \\frac{6}{5} cos(x) - \\frac{3}{5} sin(x)  - \\frac{1}{2} \\)";

    var EDL1EYgPrim = "\\( y_g'(x) = -2K.e^{2x} +  x  - \\frac{1}{2} +\\frac{6}{5} sin(x) - \\frac{3}{5}  cos(x)  \\)";
   
    var EDL1EVerif = "\\( y_g'(x) + 2 y_g(x) =  -2K.e^{2x} +  x  - \\frac{1}{2} +\\frac{6}{5} sin(x) - \\frac{3}{5}  cos(x) + 2K. e^{-2x} +  x^2 - x + \\frac{1}{2} - \\frac{12}{5} cos(x) - \\frac{6}{5} sin(x) - 1 \\)";
    var EDL1EVerif2 = "\\(y_g'(x) + 2 y_g(x) = x^2 - \\frac{15}{5} cos(x) -1 \\)";
    var EDL1EVerif3 = "\\(y_g'(x) + 2 y_g(x) = x^2 - 3cos(x) -1 \\)";


    return  <>
                <p>Au chapitre précédent,nous avons trouvé comme solution générale : </p>
                <MathJaxDisplay toShow={EDL1EYg} demo />
                <p>La vérification va consister à calculer <MathJaxInline toShow={"$ y_g'(x) $"} /> et recalculer <MathJaxInline toShow={"$ y_g'(x) +2y_g(x) $"} />.</p>

                <Title1 title={"Calcul de y'"} />
                <MathJaxDisplay toShow={EDL1EYgPrim} demo />

                <Title1 title={"Calcul de y' + 2y"} />
                <MathJaxDisplay toShow={EDL1EVerif} demo />
                <MathJaxDisplay toShow={EDL1EVerif2} demo />
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={EDL1EVerif3} />
                </Container>

                <p>Nous avons bien retrouvé l'équation de départ <MathJaxInline toShow={"$ (E) $"} />, donc la solution <MathJaxInline toShow={"$ y_g $"} /> fonctionne bien.</p>
                
            </>
}

export default EDL1CoefficientConstantExempleVerif;