import { Container } from 'react-bootstrap';
import ImageZoom from '../../../helpers/ImageZoom';

import sphereVolCalculus from '../assets/sphereVolCalculus.png';

import MathJaxDisplay from '../../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../../mathjax-display/MathJaxInline';

import Title1 from '../../../helpers/Title1';

const LeVolume = () => {

    var n = 0;
    var sphVolume = "\\(V_{sphere} = \\frac{4}{3}\\pi r^3\\)";
    var rTo2r = "\\(r \\to 2r\\)";
    var sphDoubleVolume = "\\(V = \\frac{4}{3}\\pi (2r)^3\\)";
    var sphDoubleVolumeDev = "\\(V = \\frac{4}{3}\\pi 2^3 r^3\\)";
    var sphDoubleVolumeDev2 = "\\(V = \\frac{4}{3} 8\\pi r^3\\)";

    var circleAreaX = "\\(S(x) = \\pi x^2\\)";

    var pyth = "\\(R^2 = y^2 + x^2 \\)";
    var rfH = "\\(x = \\sqrt{R^2 - y^2} \\)";
    
    var circleAreaY = "\\(S(y) = \\pi \\sqrt{R^2 - y^2}^2\\)"
    var circleAreaY2 = "\\(S(y) = \\pi (R^2 - y^2)\\)"

    var dV = "\\(d(V(y)) = S(y) .dy\\)"
    var intDv = "\\(\\int_0^R d(V(y)) = \\int_0^R S(y) .dy\\)"

    var circleDemiVol = "\\(V(y) = \\int_0^R S(y) .dy \\)"
    var circleDemiVol2 = "\\(V(y) = \\int_0^R \\pi(R^2 - y^2) .dy \\)"
    var circleDemiVol3 = "\\(V(y) = \\pi \\left[ R^2 - \\frac{y^3}{3} \\right]_0^R \\)"
    var circleDemiVol4 = "\\(V(y) = \\pi R^2 \\left[ 1 - \\frac{y}{3} \\right]_0^R \\)"
    var circleDemiVol5 = "\\(V(y) = \\pi R^2 \\left[ \\frac{2}{3} y \\right]_0^R \\)"
    var circleDemiVol6 = "\\(V(y) = \\pi R^2 (\\frac{2}{3} R - \\frac{2}{3} \\times 0 ) \\)"
    var circleDemiVol7 = "\\(V(y) = \\frac{2}{3} \\pi R^3  \\)"
    var circleVol = "\\(V(y)_{sphere} = 2V(y)  \\)"
    var circleVolR = "\\(V(y)_{sphere} = \\frac{4}{3} \\pi R^3  \\)"

    return (
        <>
            <p>
                La formule du volume de la sphère est :
            </p> 
            <MathJaxDisplay toShow={sphVolume} demo />
            <p>
                Si alors on double seulement le rayon, le volume sera 8 fois plus grand.
            </p>
            <MathJaxDisplay toShow={rTo2r} demo />
            <MathJaxDisplay toShow={sphDoubleVolume} demo />
            <MathJaxDisplay toShow={sphDoubleVolumeDev} demo />
            <MathJaxDisplay toShow={sphDoubleVolumeDev2} demo />

            <Title1 title={"Calcul du volume par intégration"} />
            <p>Calculons avec une méthode d'intégration le volume de la sphère.
                {"\n"}
                Par facilité, nous allons d'abord calculer le demi-volume.
            </p>
            <ImageZoom src={sphereVolCalculus} name="Calcul du volume par intégration" n={++n}/>
            <p>Notons <MathJaxInline toShow="$S(x)$" /> la surface du cercle en fonction du rayon <MathJaxInline toShow="$x$" /> variable</p>
            <MathJaxDisplay toShow={circleAreaX} demo />
            <p>
                Exprimons tout d'abord <MathJaxInline toShow="$x$" /> en fonction de <MathJaxInline toShow="$y$" />.
                {"\n"}
                On a avec le théorème de Pythagore :
            </p>
            <MathJaxDisplay toShow={pyth} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={rfH} demo />
            <p>
                Soit la nouvelle surface du cercle en fonction de <MathJaxInline toShow="$y$" />
            </p>
            <MathJaxDisplay toShow={circleAreaY} demo />
            <MathJaxDisplay toShow={circleAreaY2} demo />
            <p>
                On va maintenant intégrer cette surface sur l'axe <MathJaxInline toShow="$y$" />, en ajoutant tous éléments <MathJaxInline toShow="$dV$" /> jusque <MathJaxInline toShow="$y=R$" />.
                {"\n"}{"\n"}Notons <MathJaxInline toShow="$V(y)$" /> le volume de la sphère
            </p>
            <MathJaxDisplay toShow={dV} demo />
             <p>Afin de remplir la demi-sphère, on va intégrer sur toute la longueur <MathJaxInline toShow="$R$" /></p>
            <MathJaxDisplay toShow={intDv} demo />
            <MathJaxDisplay toShow={circleDemiVol} demo />
            <MathJaxDisplay toShow={circleDemiVol2} demo />    
            <p>La dérivée de <MathJaxInline toShow="$y^2$" /> est <MathJaxInline toShow={"$\\frac{y^3}{3}$"} /></p>
            <MathJaxDisplay toShow={circleDemiVol3} demo />
            <MathJaxDisplay toShow={circleDemiVol4} demo />
            <MathJaxDisplay toShow={circleDemiVol5} demo />
            <MathJaxDisplay toShow={circleDemiVol6} demo />
            <MathJaxDisplay toShow={circleDemiVol7} demo />
            <p>
                On a alors pour la sphère complète, deux fois la demi-sphère :
            </p>
            <MathJaxDisplay toShow={circleVol} demo />
            <Container className="Focus">
               <MathJaxDisplay toShow={circleVolR}/>
            </Container>
        </>
    )
}

export default LeVolume;