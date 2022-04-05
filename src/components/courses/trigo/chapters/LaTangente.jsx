import React from 'react';
import { Container } from 'react-bootstrap';
import ImageZoom from '../../ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import tangente from '../assets/tangente.png';
import circleTrigo2 from '../assets/circleTrigo2.png';

const LaTangente = () => {

    var tan = "\\(tan(\\alpha) = \\frac{sin(\\alpha)}{cos(\\alpha)}  \\)";
    var thales = "\\(\\frac{sin(\\alpha)}{tan(\\alpha)} = \\frac{cos(\\alpha)}{1} \\)";

    return (

        <>
            <p className="Title1">La tangente</p>
            <p>
                La définition d'une tangente en maths est la droite qui coupe une portion de cercle à angle droit.
                {"\n"}Le cercle et sa tangente se coupent alors en un point précis.
            </p>
            <ImageZoom src={tangente} name="La tangente de manière générale" n={4} />

            <p>En trigonométrie, la tangente est la longueur du segment créée par la tangente au cercle au point <MathJaxInline toShow={"$\\alpha = 0$" } /> et le prolongement de la droite créée par l'angle <MathJaxInline toShow={"$\\alpha$" } />.</p>
            <ImageZoom src={circleTrigo2} name="La tangente en trigonométrie" n={5} />
      
            <p>En appliquant le théorème de Thalès, on voit que :</p>
            <MathJaxDisplay toShow={thales} />
            <p>
                Soit :
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={tan} />
            </Container>

        </>
            
            
    );

}

export default LaTangente;