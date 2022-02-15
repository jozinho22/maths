import { Container } from 'react-bootstrap';
import GenericShape from './GenericShape';
import ShapeType from './ShapeType';

import sphereCalculus from './assets/sphereCalculus.png';

import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';
const LaSphere = () => {

    var sphVolume = "\\(V_{sphere} = \\frac{4}{3}\\pi r^3\\)";
    var rTo2r = "\\(r \\to 2r\\)";
    var sphDoubleVolume = "\\(V_{sphere} = \\frac{4}{3}\\pi (3r)^3\\)";
    var sphDoubleVolumeDev = "\\(V_{sphere} = \\frac{4}{3}\\pi 2^3 r^3\\)";
    var sphDoubleVolumeDev2 = "\\(V_{sphere} = \\frac{4}{3} 8\\pi r^3\\)";

    var pyth = "\\(R^2 = h^2 + r^2 \\)";
    var rfH = "\\(r = \\sqrt{R^2 - h^2} \\)";
    var circleAreaR = "\\(S_{cercle(r)} = \\pi r^2\\)"
    var circleAreaH = "\\(S_{cercle(h)} = \\pi (R^2 - h^2)\\)"

    var circleDemiVolH = "\\(V_{\\frac{1}{2}sphere(h)} = \\int S_{cercle}(h) dh \\)"
    var circleDemiVolH2 = "\\(V_{\\frac{1}{2}sphere(h)} = \\int_0^R \\pi(R^2 - h^2) dh \\)"
    var circleDemiVolH3 = "\\(V_{\\frac{1}{2}sphere(h)} = \\pi \\left[ R^2 - \\frac{h^3}{3} \\right]_0^R \\)"
    var circleDemiVolH4 = "\\(V_{\\frac{1}{2}sphere(h)} = \\pi R^2 \\left[ 1 - \\frac{h}{3} \\right]_0^R \\)"
    var circleDemiVolH5 = "\\(V_{\\frac{1}{2}sphere(h)} = \\pi R^2 \\left[ \\frac{2}{3} h \\right]_0^R \\)"

    var circleDemiVolH6 = "\\(V_{\\frac{1}{2}sphere(h)} = \\frac{2}{3} \\pi R^3  \\)"
    var circleVolH = "\\(V_{sphere(h)} = \\frac{4}{3} \\pi R^3  \\)"

    var circlePerimR = "\\(P_{cercle}(r) = 2\\pi r\\)"
    var circlePerimH = "\\(P_{cercle}(h) = 2\\pi \\sqrt{R^2 - h^2}\\)"

    var circleDemiAreaH = "\\(S_{\\frac{1}{2}sphere(h)} = \\int P_{cercle}(h) dh \\)"
    var circleDemiAreaH2 = "\\(S_{\\frac{1}{2}sphere(h)} = \\int_0^R 2\\pi \\sqrt{R^2 - h^2} dh \\)"
    var circleDemiAreaH3 = "\\(S_{\\frac{1}{2}sphere(h)} = 2\\pi \\left[ - \\frac{h}{\\sqrt{R^2 - h^2}} \\right]_0^R \\)"
    var circleDemiAreaH4 = "\\(S_{\\frac{1}{2}sphere(h)} = 2\\pi \\left[ - \\frac{h}{\\sqrt{R^2 - h^2}} \\frac{\\sqrt{R^2 + h^2}}{\\sqrt{R^2 + h^2}} \\right]_0^R \\)"
    var circleDemiAreaH5 = "\\(S_{\\frac{1}{2}sphere(h)} = 2\\pi \\left[ - \\frac{h \\sqrt{R^2 + h^2}}{\\sqrt{R^4 + h^4}} \\right]_0^R \\)"
    var circleDemiAreaH6 = "\\(S_{\\frac{1}{2}sphere(h)} = 2\\pi \\left( - \\frac{R \\sqrt{2R^2}}{\\sqrt{2R^4}} \\right) \\)"
    var circleDemiAreaH7 = "\\(S_{\\frac{1}{2}sphere(h)} = 2\\pi \\left( - \\frac{R \\sqrt{2R^2}}{\\sqrt{2R^4}} \\right) \\)"


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
            <p>Calculons avec une méthode d'intégration le volume da la sphère
                {"\n"}
                Par facilité, nous allons d'abord calculer le demi-volume.
            </p>
            <img src={sphereCalculus} alt="Logo" />
            <p>
                La surface du cercle est égale à 
            </p>
            <MathJaxDisplay toShow={circleAreaR}/>
            <p>
                Exprimons tout d'abord r en fonction de h
                {"\n"}
                On a :
            </p>
            <MathJaxDisplay toShow={pyth}/>
            <MathJaxDisplay toShow={rfH}/>
            <p>
                Soit la nouvelle surface du cercle en fonction de h
            </p>
            <MathJaxDisplay toShow={circleAreaH}/>

            <MathJaxDisplay toShow={circleDemiVolH}/>
            <MathJaxDisplay toShow={circleDemiVolH2}/>
            <MathJaxDisplay toShow={circleDemiVolH3}/>
            <MathJaxDisplay toShow={circleDemiVolH4}/>
            <MathJaxDisplay toShow={circleDemiVolH5}/>
            <MathJaxDisplay toShow={circleDemiVolH6}/>
            <p>
                On a alors pour la sphère complète :
            </p>
            <MathJaxDisplay toShow={circleVolH}/>
            <p>
                On peut faire la même chose pour calculer la surface.
                {"\n"}
                On prendra non plus la surface du cercle mais son périmètre
            </p>
            <MathJaxDisplay toShow={circlePerimR}/>
            <MathJaxDisplay toShow={circlePerimH}/>
            <MathJaxDisplay toShow={circleDemiAreaH}/>
            <MathJaxDisplay toShow={circleDemiAreaH2}/>
            <MathJaxDisplay toShow={circleDemiAreaH3}/>
            <MathJaxDisplay toShow={circleDemiAreaH4}/>
            <MathJaxDisplay toShow={circleDemiAreaH5}/>
            <MathJaxDisplay toShow={circleDemiAreaH6}/>

        </>
    )
}

export default LaSphere;