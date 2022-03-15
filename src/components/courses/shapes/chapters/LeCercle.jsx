import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../ImageZoom';
import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';
import AppContext from '../../../context/AppContext';
import LeNombrePi from '../../pi/LeNombrePi';
import circleTurnAround from '../assets/circleTurnAround.png'
import circleAreaCalculus from '../assets/circleAreaCalculus.png'
import circleAreaCalculus2 from '../assets/circleAreaCalculus2.png';
import LaTrigonometrie from '../../trigo/LaTrigonometrie';

const LeCercle = () => {

    const {updateComponent} = React.useContext(AppContext);

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

    var aCalc = "\\( S_{triangle} = \\frac{1}{2} R .d\\alpha \\)"
    var aCalcBis = "\\( S_{triangle} = \\frac{1}{2} R .d\\alpha \\)"

    var aCalc2 = "\\( S_{(\\alpha)} = \\int_0^{R.\\alpha} \\frac{1}{2} R .d\\alpha \\)"
    var aCalc3 = "\\( S_{(\\alpha)} = \\frac{R}{2} \\int_0^{R.\\alpha} d\\alpha \\)"
    var aCalc4 = "\\( S_{(\\alpha)} = \\frac{R}{2} \\Big[ \\alpha  \\Big]_0^{R.\\alpha} \\)"
    var aCalc5 = "\\( S_{(\\alpha)} = \\frac{R}{2} (R.\\alpha - 0) \\)"
    var aCalc6 = "\\( S_{(\\alpha)} = \\frac{R}{2} (R.\\alpha) \\)"
    var aCalc7 = "\\( S_{(\\alpha)} = \\frac{R^2}{2} \\alpha \\)"

    var aCalcComplet = "\\( S_{(2\\pi)} = \\frac{R^2}{2} 2\\pi  \\)"
    var aCalcComplet2 = "\\( S_{(2\\pi)} = \\pi R^2  \\)"


    return (
        <>
            <p>
                Le cercle est caractérisé par sa relation avec le nombre π (Pi).
                π n'est autre que la rapport de la circonférence (périmètre) sur le diamètre.
                {"\n"}Cette valeur vaut environ 3,14. Mais c'est une valeur approchée...
            </p>

            <Button 
                className="DefaultButton" 
                onClick={() => updateComponent(<LeNombrePi />)}>
                    Chapitre sur le nombre π
            </Button>

            <p className="Title1">Le périmètre du cercle</p>
            <p>π se caractérise par le rapport du périmètre sur le diamètre comme ceci :</p>
            <MathJaxDisplay toShow={pOverD} />
             <p>Soit</p>
            <MathJaxDisplay toShow={pCercle} />
            <p>Étant donné que le rayon est la moitié du diamètre</p>
            <MathJaxDisplay toShow={pCercle2} />
            <p>Soit</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pCercle3} />
            </Container>

            <p>2π est un tour complet du cercle. Mais la distance parcourue sur le cercle sera proportionnelle à l'angle créé par cette distance radiale.  </p>
            <ImageZoom src={circleTurnAround} name="Distance parcourue sur le cercle" n={++n} />
            <Container className="Focus">
                <MathJaxDisplay toShow={pCercle4} />
            </Container>

            <p className="Title">La surface du cercle</p>
            <p>π se caractérise par le rapport de la surface sur le rayon comme ceci :</p>
            <MathJaxDisplay toShow={aOverR} />
            <p>Soit</p>
            <MathJaxDisplay toShow={aCercle} />
            <Container className="Focus">
                <MathJaxDisplay toShow={aCercle4} />
            </Container>
            <p>Comme précédemment, on peut l'écrire sous cette forme :</p>
            <MathJaxDisplay toShow={aCercle2} />
            <MathJaxDisplay toShow={aCercle3} />
            <p>De même façon que pour le périmètre, la surface balayée par un angle <MathJaxInline toShow="$\\alpha$" /> sera de : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={aCercle5} />
            </Container>
            <p>
               Pour le démontrer, il faut imaginer un triangle dont deux côtés sont le rayon, et un troisième infinitésimal <MathJaxInline toShow={"$d\\alpha$"} />.
               {"\n"}
               On intègre ensuite sur l'angle souhaitée.
            </p>
            <ImageZoom src={circleAreaCalculus} name="Surface balayée sur le cercle" n={++n} />
            <MathJaxDisplay toShow={aTrg} />
            <p>La base du triangle est <MathJaxInline toShow={"$d\\alpha$"} /> et la hauteur est <MathJaxInline toShow="$R$" /></p>
            <MathJaxDisplay toShow={aCalc} />
            <MathJaxDisplay toShow={aCalcBis} />
            <p>On va intégrer sur la distance à parcourir, à savoir  <MathJaxInline toShow={"$R.\\alpha$"} /> </p>
            <MathJaxDisplay toShow={aCalc2} />
            <MathJaxDisplay toShow={aCalc3} />
            <MathJaxDisplay toShow={aCalc4} />
            <MathJaxDisplay toShow={aCalc5} />
            <MathJaxDisplay toShow={aCalc6} />
            <MathJaxDisplay toShow={aCalc7} />

            <ImageZoom src={circleAreaCalculus2} name="Surface balayée sur le cercle par un angle α" n={++n} />
            <p>Avec le tour complet, on a bien : </p>
            <MathJaxDisplay toShow={aCalcComplet} />
            <MathJaxDisplay toShow={aCalcComplet2} />

            <Button 
                className="DefaultButton" 
                onClick={() => updateComponent(<LaTrigonometrie />)}>
                    Chapitre sur la trigonométrie
            </Button>
            
        </>
    )
}

export default LeCercle;