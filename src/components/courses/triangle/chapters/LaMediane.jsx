import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';

import medianes from '../assets/medianes.png'

const LaMediane = () => {

    var n = 0;

    var ag = "\\( AG = \\frac{2}{3}.AI \\)"
    var bg = "\\( BG = \\frac{2}{3}.BJ \\)"
    var cg = "\\( CG = \\frac{2}{3}.CK \\)"

    /* var appolonius = "\\( {AB}^2 + {AC}^2 = 2.{BI}^2 + {AI}^2 \\)"
    var appolonius2 = "\\( {AB}^2 + {BC}^2 = 2.{CJ}^2 + {BJ}^2 \\)"
    var appolonius3 = "\\( {BC}^2 + {AC}^2 = 2.{AK}^2 + {CK}^2 \\)" */

    return (
        <>
            <p>La médiane d'un triangle est le segment de droite projeté à partir d'un sommet sur la longueur opposée, et coupant cette longueur en deux.</p>
            <ImageZoom src={medianes} name="Les trois médianes dans un triangle" n={++n}/>
            <p>
                La concourance de ces trois médianes est appelée <MathJaxInline toShow={"$G$"}/>.
                {"\n"}C'est le centre de gravité du triangle. C'est-à-dire que si on le découpe sur une feuille de papier, c'est là où il faudrait planter la pointe d'un compas pour qu'il tienne droit.
            </p>
            <p>
                Les trois médianes se coupent respectivement à <MathJaxInline toShow={"$\\frac{2}{3}$"}/> du chemin en partant du sommet
                {"\n"}
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={ag}/> 
                <MathJaxDisplay toShow={bg}/> 
                <MathJaxDisplay toShow={cg}/> 
            </Container>
            {/* <p>On a de même la relation d'Appolonius qui nous dit : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={appolonius}/> 
                <MathJaxDisplay toShow={appolonius2}/> 
                <MathJaxDisplay toShow={appolonius3}/> 
            </Container> */}
        </>
    )
}

export default LaMediane;