import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';

import circleAreaCalculus from '../assets/circleAreaCalculus.png'
import circleAreaCalculus2 from '../assets/circleAreaCalculus2.png';
import Title1 from '../../helpers/Title1';

const CalculSurfaceCercle = () => {

    var n = 0;

    var aCercle3 = "\\(S_{cercle} = \\pi \\frac{{D}^2}{4} \\)"

    var aCercle4 = "\\(S = \\pi R^2 \\)";
    var aCercle5 = "\\( S = \\frac{R^2}{2} .\\alpha \\)"

    var aTrg = "\\( S_{triangle} = \\frac{1}{2} bh \\)"

    var aCalc = "\\( dS = \\frac{1}{2} R R.d\\alpha \\)"
    var aCalc2 = "\\( dS = \\frac{1}{2} R^2 .d\\alpha \\)"
    var aCalc2Bis = "\\( \\int_0^{\\alpha} dS = \\int_0^{\\alpha} \\frac{1}{2} R^2 .d\\alpha \\)"

    var aCalc3 = "\\( S_{(\\alpha)} = \\int_0^{\\alpha} \\frac{1}{2} R^2 .d\\alpha \\)"
    var aCalc4 = "\\( S_{(\\alpha)} = \\frac{R^2}{2} \\int_0^{\\alpha} d\\alpha \\)"
    var aCalc5 = "\\( S_{(\\alpha)} = \\frac{R^2}{2} \\Big[ \\alpha  \\Big]_0^{\\alpha} \\)"
    var aCalc6 = "\\( S_{(\\alpha)} = \\frac{R^2}{2} (\\alpha - 0) \\)"
    var aCalc7 = "\\( S_{(\\alpha)} = \\frac{R^2}{2} .\\alpha \\)"

    var aCalcComplet = "\\( S_{(2\\pi)} = \\frac{R^2}{2} 2\\pi  \\)"
    var aCalcComplet2 = "\\( S_{(2\\pi)} = \\pi R^2  \\)"

    return (
        <>
            <Title1 title={"Surface en fonction du rayon ou du diamètre"} />
            <p>Soit un cercle de rayon <MathJaxInline toShow={"$R$"} />, la surface de ce cercle vaut :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={aCercle4} />
            </Container>
            <p>Soit <MathJaxInline toShow={"$D$"} /> son diamètre, on peut alors l'écrire sous cette forme :</p>
            <MathJaxDisplay toShow={aCercle3} demo />
           
           <Title1 title={"Démonstration"} />
            <p>
               Pour le démontrer, il faut imaginer un triangle dont deux côtés sont le rayon, et un troisième infinitésimal <MathJaxInline toShow={"$R.d\\alpha$"} />.
               {"\n"}
               On intègre ensuite sur l'angle souhaitée.
            </p>
            <ImageZoom src={circleAreaCalculus} name="Surface balayée sur le cercle" n={++n} />
            <MathJaxDisplay toShow={aTrg} demo />
            <p>La base du triangle est <MathJaxInline toShow={"$R.d\\alpha$"} /> et la hauteur est <MathJaxInline toShow="$R$" />, soit :</p>
            <MathJaxDisplay toShow={aCalc} demo />
            <MathJaxDisplay toShow={aCalc2} demo />
            <p>On va intégrer sur la distance à parcourir, à savoir  <MathJaxInline toShow={"$R.\\alpha$"} /> </p>
            <MathJaxDisplay toShow={aCalc2Bis} demo />
            <MathJaxDisplay toShow={aCalc3} demo />
            <MathJaxDisplay toShow={aCalc4} demo />
            <MathJaxDisplay toShow={aCalc5} demo />
            <MathJaxDisplay toShow={aCalc6} demo />
            <Container className="Focus">
                <MathJaxDisplay toShow={aCalc7} />
            </Container>

            <ImageZoom src={circleAreaCalculus2} name="Surface balayée sur le cercle par un angle α" n={++n} />
            <p>Avec le tour complet, on a bien : </p>
            <MathJaxDisplay toShow={aCalcComplet} demo />
            <Container className="Focus">
                <MathJaxDisplay toShow={aCalcComplet2} />
            </Container> 

           <Title1 title={"Surface en fonction du rayon et d'un angle"} />
            <p>La surface balayée par un angle <MathJaxInline toShow={"$\\alpha$"} /> sera de : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={aCercle5} />
            </Container>
            <p>Si <MathJaxInline toShow={"$\\alpha = 2 \\pi$"} />, on retrouve bien notre formule précédente.</p>
        </>
    )
}

export default CalculSurfaceCercle;