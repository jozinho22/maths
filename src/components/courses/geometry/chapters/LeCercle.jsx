import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import Title1 from '../../helpers/Title1';
import circleTurnAround from '../assets/circleTurnAround.png'
import circleAreaCalculus from '../assets/circleAreaCalculus.png'
import circleAreaCalculus2 from '../assets/circleAreaCalculus2.png';

import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import pathBuilder from '../../../helpers/pathBuilder';

const LeCercle = () => {

    var n = 0;
    var pOverD = "\\(\\pi = \\frac{P_{cercle}}  {D_{cercle}} \\)"
    var pCercle = "\\( P_{cercle} = \\pi D_{cercle} \\)"
    var pCercle2 = "\\( P_{cercle} = 2\\pi R_{cercle} \\)"

    var pCercle3 = "\\( P = 2\\pi R \\)"

    var pCercle4 = "\\( P = R.\\alpha \\)"

    var aOverR = "\\(\\pi = \\frac{S_{cercle}}  {R_{cercle}^2} \\)"
    var aCercle = "\\(S_{cercle} = \\pi  {R_{cercle}^2} \\)"
    var aCercle2 = "\\(S_{cercle} = \\pi \\left(\\frac{D_{cercle}}{2}\\right)^2  \\)"
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
            <p>
                Le cercle est caractérisé par sa relation avec <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.PI}`)} external>le nombre π (Pi)</Link>.
                π n'est autre que la rapport de la circonférence (périmètre) sur le diamètre.
                {"\n"}Cette valeur vaut environ 3,14. Mais c'est une valeur approchée...
            </p>

            <Title1 title={"a) Le périmètre du cercle"} />
            <p>π se caractérise par le rapport du périmètre sur le diamètre comme ceci :</p>
            <MathJaxDisplay toShow={pOverD} demo />
             <p>Soit</p>
            <MathJaxDisplay toShow={pCercle} demo />
            <p>Étant donné que le rayon est la moitié du diamètre</p>
            <MathJaxDisplay toShow={pCercle2} demo />
            <p>Soit</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pCercle3} />
            </Container>

            <p>2π est un tour complet du cercle. Mais la distance parcourue sur le cercle sera proportionnelle à l'angle créé par cette distance radiale.  </p>
            <ImageZoom src={circleTurnAround} name="Distance parcourue sur le cercle" n={++n} />
            <Container className="Focus">
                <MathJaxDisplay toShow={pCercle4} />
            </Container>

            <Title1 title={"b) La surface du cercle"} />
            <p>π se caractérise par le rapport de la surface sur le rayon comme ceci :</p>
            <MathJaxDisplay toShow={aOverR} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={aCercle} demo />
            <Container className="Focus">
                <MathJaxDisplay toShow={aCercle4} />
            </Container>
            <p>Comme précédemment, on peut l'écrire sous cette forme :</p>
            <MathJaxDisplay toShow={aCercle2} demo/>
            <MathJaxDisplay toShow={aCercle3} demo />
            <p>De même façon que pour le périmètre, la surface balayée par un angle <MathJaxInline toShow="$\\alpha$" /> sera de : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={aCercle5} />
            </Container>
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
        </>
    )
}

export default LeCercle;