import { Container } from 'react-bootstrap';
import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';

import sphereVolCalculus from '../assets/sphereVolCalculus.png';
import sphereAreaCalculus from '../assets/sphereAreaCalculus.png';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const LaSphere = () => {
    var vDemiSphereY = "V(y)_{\\frac{1}{2}}";
    var sDemiSphereY = "S(y)_{\\frac{1}{2}}";

    var sphVolume = "\\(V_{sphere} = \\frac{4}{3}\\pi r^3\\)";
    var rTo2r = "\\(r \\to 2r\\)";
    var sphDoubleVolume = "\\(V = \\frac{4}{3}\\pi (3r)^3\\)";
    var sphDoubleVolumeDev = "\\(V = \\frac{4}{3}\\pi 2^3 r^3\\)";
    var sphDoubleVolumeDev2 = "\\(V = \\frac{4}{3} 8\\pi r^3\\)";

    var sX = "\\(S(x) = S(x)_{cercle}\\)"
    var circleAreaX = "\\(S(x) = \\pi x^2\\)"

    var pyth = "\\(R^2 = y^2 + r^2 \\)";
    var rfH = "\\(x = \\sqrt{R^2 - y^2} \\)";
    
    var circleAreaY = "\\(S(y) = \\pi \\sqrt{(R^2 - y^2)^2}\\)"
    var circleAreaY2 = "\\(S(y) = \\pi (R^2 - y^2)\\)"

    var dVsphere = "\\(" + vDemiSphereY + " = V(y)_{\\frac{1}{2}sphere}\\)"
    var dV = "\\(d(" + vDemiSphereY + ") = S(y) dy\\)"
    var intDv = "\\(\\int_0^R d(" + vDemiSphereY + ") = \\int_0^R S(y) dy\\)"

    var circleDemiVol = "\\(" + vDemiSphereY + " = \\int_0^R S(y) dy \\)"
    var circleDemiVol2 = "\\(" + vDemiSphereY + " = \\int_0^R \\pi(R^2 - y^2) dy \\)"
    var circleDemiVol3 = "\\(" + vDemiSphereY + " = \\pi \\left[ R^2 - \\frac{y^3}{3} \\right]_0^R \\)"
    var circleDemiVol4 = "\\(" + vDemiSphereY + " = \\pi R^2 \\left[ 1 - \\frac{y}{3} \\right]_0^R \\)"
    var circleDemiVol5 = "\\(" + vDemiSphereY + " = \\pi R^2 \\left[ \\frac{2}{3} y \\right]_0^R \\)"
    var circleDemiVol6 = "\\(" + vDemiSphereY + " = \\pi R^2 (\\frac{2}{3} R - \\frac{2}{3} \\times 0 ) \\)"
    var circleDemiVol7 = "\\(" + vDemiSphereY + " = \\frac{2}{3} \\pi R^3  \\)"
    var circleVol = "\\(V(y)_{sphere} = \\frac{4}{3} \\pi R^3  \\)"

    var pCercle = "\\(P(x) = P_{cercle}(x) \\)"
    var circlePerimX = "\\(P(x) = 2\\pi x\\)"
    var circlePerimY = "\\(P(y) = 2\\pi \\sqrt{R^2 - y^2}\\)"

    var lfTheta = "\\(l = R \\theta \\)"
    var dlfTheta = "\\(dl = R d\\theta \\)"
    var dSdemiSphere = "\\(" + sDemiSphereY + " = S(y)_{\\frac{1}{2}}cercle\\)"
    var dS = "\\(" + sDemiSphereY + " = P(y) dl\\)"
    var intDS = "\\(\\int_0^{\\frac{\\pi}{2}} ("+ sDemiSphereY + ") = \\int_0^{\\frac{\\pi}{2}} P(y) dl\\)"

    var circleDemiArea = "\\("+ sDemiSphereY + " = \\int_0^{\\frac{\\pi}{2}} P_{cercle}(y) dl \\)"
    var circleDemiArea2 = "\\("+ sDemiSphereY + " = \\int_0^{\\frac{\\pi}{2}} 2\\pi \\sqrt{R^2 - y^2} dl \\)"
    var yfTheta = "\\(y = R sin(\\theta) \\)"
    var circleDemiArea4 = "\\("+ sDemiSphereY + " = 2\\pi \\int_0^{\\frac{\\pi}{2}} \\sqrt{R^2 - y^2} R d\\theta \\)"
    var circleDemiArea5 = "\\("+ sDemiSphereY + " = 2\\pi R \\int_0^{\\frac{\\pi}{2}} \\sqrt{R^2 - R^2 sin^2(\\theta)} d\\theta \\)"
    var circleDemiArea6 = "\\("+ sDemiSphereY + " = 2\\pi R \\int_0^{\\frac{\\pi}{2}}  \\sqrt{R^2 (1 -sin^2(\\theta))} d\\theta \\)"
    var circleDemiArea7 = "\\("+ sDemiSphereY + " = 2\\pi R \\int_0^{\\frac{\\pi}{2}}  \\sqrt{R^2 (cos^2(\\theta))} d\\theta \\)"
    var circleDemiArea8 = "\\("+ sDemiSphereY + " = 2\\pi R \\int_0^{\\frac{\\pi}{2}}  R cos(\\theta) d\\theta \\)"
    var circleDemiArea9 = "\\("+ sDemiSphereY + " = 2\\pi R^2 \\int_0^{\\frac{\\pi}{2}} cos(\\theta) d\\theta \\)"
    var circleDemiArea10 = "\\("+ sDemiSphereY + " = 2\\pi R^2 \\left[ sin(\\theta) \\right]_0^\\frac{\\pi}{2} \\)"
    var circleDemiArea11 = "\\("+ sDemiSphereY + " = 2\\pi R^2 (sin(\\frac{\\pi}{2}) - sin(0)) \\)"
    var circleDemiArea12 = "\\("+ sDemiSphereY + " = 2\\pi R^2 (1 - 0) \\)"
    var circleDemiArea13 = "\\("+ sDemiSphereY + " = 2\\pi R^2 \\)"
    var circleArea = "\\(S(y)_{sphere} = 4\\pi R^2 \\)"

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
                    dimensions={1} /> 
            </Container>
            <p>Calculons avec une méthode d'intégration le volume de la sphère.
                {"\n"}
                Par facilité, nous allons d'abord calculer le demi-volume.
            </p>
            <img src={sphereVolCalculus} alt="Logo" />
            <p>Notons S la surface du cercle</p>
            <MathJaxDisplay toShow={sX}/>
            <MathJaxDisplay toShow={circleAreaX}/>
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
            <MathJaxDisplay toShow={circleAreaY}/>
            <MathJaxDisplay toShow={circleAreaY2}/>
            <p>
                On va maintenant intégrer cette surface sur l'axe y, en ajoutant tous éléments dv jusque R.
                {"\n"}Notons V le volume de la sphère
            </p>
            <MathJaxDisplay toShow={dVsphere}/>
            <MathJaxDisplay toShow={dV}/>
            <MathJaxDisplay toShow={intDv}/>
            <MathJaxDisplay toShow={circleDemiVol}/>
            <MathJaxDisplay toShow={circleDemiVol2}/>
            <p>Afin de remplir la demi-sphère, on va intégrer sur toute la longueur R</p>
            <MathJaxDisplay toShow={circleDemiVol3}/>
            <MathJaxDisplay toShow={circleDemiVol4}/>
            <MathJaxDisplay toShow={circleDemiVol5}/>
            <MathJaxDisplay toShow={circleDemiVol6}/>
            <MathJaxDisplay toShow={circleDemiVol7}/>
            <p>
                On a alors pour la sphère complète :
            </p>
            <MathJaxDisplay toShow={circleVol}/>

            <p>
                {"\n"}{"\n"}{"\n"}
                On peut faire la même chose pour calculer la surface.
                {"\n"}
                On prendra non plus la surface du cercle mais son périmètre
            </p>
            <img src={sphereAreaCalculus} alt="Logo" />
            <p>Notons P le périmètre du cercle </p>
            <MathJaxDisplay toShow={pCercle}/>
            <MathJaxDisplay toShow={circlePerimX}/>
            <MathJaxDisplay toShow={circlePerimY}/>
            <p>
                Cette fois, nous allons intégrer le périmètre sur une distance de l.
            </p>
            <p>Notons la demi-sphère comme ceci</p>
            <MathJaxDisplay toShow={dSdemiSphere}/>
            <p>Soit</p>
            <MathJaxDisplay toShow={dS}/>
            <MathJaxDisplay toShow={intDS}/>
            <MathJaxDisplay toShow={circleDemiArea}/>
            <MathJaxDisplay toShow={circleDemiArea2}/>
            <p>On va poser</p>
            <MathJaxDisplay toShow={lfTheta}/>
            <p>Soit</p>
            <MathJaxDisplay toShow={dlfTheta}/>
            <p>De même, on sait que</p>
            <MathJaxDisplay toShow={yfTheta}/>
            <p>Donc on remplace dans l'équation tel que</p>
            <MathJaxDisplay toShow={circleDemiArea4}/>
            <p>On sort R vu que c'est une constante</p>
            <MathJaxDisplay toShow={circleDemiArea5}/>
            <MathJaxDisplay toShow={circleDemiArea6}/>
            <MathJaxDisplay toShow={circleDemiArea7}/>
            <MathJaxDisplay toShow={circleDemiArea8}/>
            <MathJaxDisplay toShow={circleDemiArea9}/>
            <MathJaxDisplay toShow={circleDemiArea10}/>
            <MathJaxDisplay toShow={circleDemiArea11}/>
            <MathJaxDisplay toShow={circleDemiArea12}/>
            <MathJaxDisplay toShow={circleDemiArea13}/>
            <p>En enfin</p>
            <MathJaxDisplay toShow={circleArea}/>
            <p>Youpi !!!</p>
        </>
    )
}

export default LaSphere;