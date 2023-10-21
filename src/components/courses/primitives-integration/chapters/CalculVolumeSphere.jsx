import { Container } from 'react-bootstrap';
import ImageZoom from '../../helpers/ImageZoom';

import sphereVolCalculus from '../assets/sphereVolCalculus.png';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

const CalculVolumeSphere = () => {

    var n = 0;
    var sphVolume = "\\(V_{sphere} = \\frac{4}{3}\\pi r^3\\)";

    var circleAreaX = "\\(S(x) = \\pi x^2\\)";

    var pyth = "\\(R^2 = y^2 + x^2 \\)";
    var rfH = "\\(x = \\sqrt{R^2 - y^2} \\)";
    
    var circleAreaY = "\\(S(y) = \\pi \\sqrt{R^2 - y^2}^2\\)"
    var circleAreaY2 = "\\(S(y) = \\pi (R^2 - y^2)\\)"

    var dV = "\\(d(V_\\frac{s}{2}(y)) = S(y) .dy\\)"
    var intDv = "\\(\\int_0^R d(V_{\\frac{s}{2}}(y)) = \\int_0^R S(y) .dy\\)"

    var circleDemiVol = "\\(V_\\frac{s}{2}(y) = \\int_0^R S(y) .dy \\)"
    var circleDemiVol2 = "\\(V_\\frac{s}{2}(y) = \\int_0^R \\pi(R^2 - y^2) .dy \\)"
    var circleDemiVol3 = "\\(V_\\frac{s}{2}(y) = \\pi \\left[ R^2 - \\frac{y^3}{3} \\right]_0^R \\)"
    var circleDemiVol4 = "\\(V_\\frac{s}{2}(y) = \\pi R^2 \\left[ 1 - \\frac{y}{3} \\right]_0^R \\)"
    var circleDemiVol5 = "\\(V_\\frac{s}{2}(y) = \\pi R^2 \\left[ \\frac{2}{3} y \\right]_0^R \\)"
    var circleDemiVol6 = "\\(V_\\frac{s}{2}(y) = \\pi R^2 (\\frac{2}{3} R - \\frac{2}{3} \\times 0 ) \\)"
    var circleDemiVol7 = "\\(V_\\frac{s}{2}(y) = \\frac{2}{3} \\pi R^3  \\)"
    var circleVol = "\\(V_{s}(y) = 2V_\\frac{s}{2}(y)  \\)"
    var circleVolR = "\\(V_{s}(y) = \\frac{4}{3} \\pi R^3  \\)"

    return (
        <>
            <p>
                La formule du volume de la sphère est :
            </p> 
            <Container className="Focus">
                <MathJaxDisplay toShow={sphVolume} />
            </Container>

            <Title1 title={"Démonstration"} />
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
                On a avec <Link url={`${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/presentation`} external>le théorème de Pythagore</Link> :
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
                {"\n"}{"\n"}Notons <MathJaxInline toShow={"$V_{\\frac{s}{2}}(y)$"} /> le volume de la demi-sphère.
            </p>
            <MathJaxDisplay toShow={dV} demo />
             <p>Afin de remplir la demi-sphère, on va intégrer sur toute la longueur <MathJaxInline toShow="$R$" /></p>
            <MathJaxDisplay toShow={intDv} demo />
            <MathJaxDisplay toShow={circleDemiVol} demo />
            <MathJaxDisplay toShow={circleDemiVol2} demo />    
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

export default CalculVolumeSphere;