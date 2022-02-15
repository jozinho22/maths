import { Container } from 'react-bootstrap';
import GenericShape from './GenericShape';
import ShapeType from './ShapeType';

import sphereVolCalculus from './assets/sphereVolCalculus.png';

import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';

const LaSphere = () => {

    var sphVolume = "\\(V_{sphere} = \\frac{4}{3}\\pi r^3\\)";
    var rTo2r = "\\(r \\to 2r\\)";
    var sphDoubleVolume = "\\(V_{sphere} = \\frac{4}{3}\\pi (3r)^3\\)";
    var sphDoubleVolumeDev = "\\(V_{sphere} = \\frac{4}{3}\\pi 2^3 r^3\\)";
    var sphDoubleVolumeDev2 = "\\(V_{sphere} = \\frac{4}{3} 8\\pi r^3\\)";

    var circleAreaR = "\\(S_{cercle(x)} = \\pi x^2\\)"

    var pyth = "\\(R^2 = y^2 + r^2 \\)";
    var rfH = "\\(x = \\sqrt{R^2 - y^2} \\)";
    
    var circleAreaH = "\\(S_{cercle(y)} = \\pi \\sqrt{(R^2 - y^2)^2}\\)"
    var circleAreaH2 = "\\(S_{cercle(y)} = \\pi (R^2 - x^2)\\)"

    var dV = "\\(dV_{\\frac{1}{2}sphere(y)} = S_{cercle(y)} dy\\)"
    var circleDemiVolH = "\\(V_{\\frac{1}{2}sphere(y)} = \\int_0^R S_{cercle}(y) dy \\)"
    var circleDemiVolH2 = "\\(V_{\\frac{1}{2}sphere(y)} = \\int_0^R \\pi(R^2 - y^2) dy \\)"
    var circleDemiVolH3 = "\\(V_{\\frac{1}{2}sphere(y)} = \\pi \\left[ R^2 - \\frac{y^3}{3} \\right]_0^R \\)"
    var circleDemiVolH4 = "\\(V_{\\frac{1}{2}sphere(y)} = \\pi R^2 \\left[ 1 - \\frac{y}{3} \\right]_0^R \\)"
    var circleDemiVolH5 = "\\(V_{\\frac{1}{2}sphere(y)} = \\pi R^2 \\left[ \\frac{2}{3} y \\right]_0^R \\)"
    var circleDemiVolH6 = "\\(V_{\\frac{1}{2}sphere(y)} = \\pi R^2 (\\frac{2}{3} R - \\frac{2}{3} \\times 0 ) \\)"
    var circleDemiVolH7 = "\\(V_{\\frac{1}{2}sphere(y)} = \\frac{2}{3} \\pi R^3  \\)"
    var circleVolH = "\\(V_{sphere(y)} = \\frac{4}{3} \\pi R^3  \\)"

    return (
        <>
            <p className="Title1">La sphère</p>
            <p>
                La formule du volume de la sphère est :
            </p> 
            <MathJaxDisplay toShow={sphVolume}/>
            <p>
                Si alors on double seulement le rayon, le volume sera 8 fois plus grand.
            </p>
            <MathJaxDisplay toShow={rTo2r}/>
            <MathJaxDisplay toShow={sphDoubleVolume}/>
            <MathJaxDisplay toShow={sphDoubleVolumeDev}/>
            <MathJaxDisplay toShow={sphDoubleVolumeDev2}/>
            <p>
                Cliquez sur l'image ci-dessous pour illlustrer ce propos.           
            </p> 
            <Container className="ShapesContainer">
                <GenericShape 
                    className="ShapesContainer"
                    type={ShapeType.SPHERE}
                    dimension={1} /> 
            </Container>
            <p>Calculons avec une méthode d'intégration le volume de la sphère.
                {"\n"}
                Par facilité, nous allons d'abord calculer le demi-volume.
            </p>
            <img src={sphereVolCalculus} alt="Logo" />
            <p>
                La surface du cercle est égale à 
            </p>
            <MathJaxDisplay toShow={circleAreaR}/>
            <p>
                Exprimons tout d'abord x en fonction de y.
                {"\n"}
                On a avec le théorème de Pythagore:
            </p>
            <MathJaxDisplay toShow={pyth}/>
            <MathJaxDisplay toShow={rfH}/>
            <p>
                Soit la nouvelle surface du cercle en fonction de y
            </p>
            <MathJaxDisplay toShow={circleAreaH}/>
            <MathJaxDisplay toShow={circleAreaH2}/>
            <p>
                On va maintenant intégrer cette surface sur toute la longueur y, en ajoutant tous éléments dv jusque R.
            </p>
            <MathJaxDisplay toShow={dV}/>
            <MathJaxDisplay toShow={circleDemiVolH}/>
            <MathJaxDisplay toShow={circleDemiVolH2}/>
            <MathJaxDisplay toShow={circleDemiVolH3}/>
            <MathJaxDisplay toShow={circleDemiVolH4}/>
            <MathJaxDisplay toShow={circleDemiVolH5}/>
            <MathJaxDisplay toShow={circleDemiVolH6}/>
            <MathJaxDisplay toShow={circleDemiVolH7}/>

            <p>
                On a alors pour la sphère complète :
            </p>
            <MathJaxDisplay toShow={circleVolH}/>

        </>
    )
}

export default LaSphere;