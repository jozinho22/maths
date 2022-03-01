import { Container } from 'react-bootstrap';
import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';
import ImageZoom from '../../ImageZoom';

import sphereVolCalculus from '../assets/sphereVolCalculus.png';
import sphereAreaCalculus from '../assets/sphereAreaCalculus.png';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const LaSphere = () => {

    var sphVolume = "\\(V_{sphere} = \\frac{4}{3}\\pi r^3\\)";
    var rTo2r = "\\(r \\to 2r\\)";
    var sphDoubleVolume = "\\(V = \\frac{4}{3}\\pi (3r)^3\\)";
    var sphDoubleVolumeDev = "\\(V = \\frac{4}{3}\\pi 2^3 r^3\\)";
    var sphDoubleVolumeDev2 = "\\(V = \\frac{4}{3} 8\\pi r^3\\)";

    var circleAreaX = "\\(S(x) = \\pi x^2\\)"

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

    var circlePerimX = "\\(P(x) = 2\\pi x\\)"
    var circlePerimY = "\\(P(y) = 2\\pi \\sqrt{R^2 - y^2}\\)"

    var lfAlpha = "\\(l = R \\alpha \\)"
    var dlfAlpha = "\\(.dl = R.d\\alpha \\)"
    var dS = "\\(d(S(y)) = P(y).dl\\)"
    var intDS = "\\(\\int_0^{\\frac{\\pi}{2}} d(S(y)) = \\int_0^{\\frac{\\pi}{2}} P(y) .dl\\)"

    var circleDemiArea = "\\(S(y) = \\int_0^{\\frac{\\pi}{2}} P(y) .dl \\)"
    var circleDemiArea2 = "\\(S(y) = \\int_0^{\\frac{\\pi}{2}} 2\\pi \\sqrt{R^2 - y^2} .dl \\)"
    var yfAlpha = "\\(y = R .sin(\\alpha) \\)"
    var circleDemiArea4 = "\\(S(y) = 2\\pi \\int_0^{\\frac{\\pi}{2}} \\sqrt{R^2 - y^2} R.d\\alpha \\)"
    var circleDemiArea5 = "\\(S(y) = 2\\pi R \\int_0^{\\frac{\\pi}{2}} \\sqrt{R^2 - R^2 sin^2(\\alpha)} .d\\alpha \\)"
    var circleDemiArea6 = "\\(S(y) = 2\\pi R \\int_0^{\\frac{\\pi}{2}}  \\sqrt{R^2 (1 -sin^2(\\alpha))} .d\\alpha \\)"
    var circleDemiArea7 = "\\(S(y) = 2\\pi R \\int_0^{\\frac{\\pi}{2}}  \\sqrt{R^2 (cos^2(\\alpha))} .d\\alpha \\)"
    var circleDemiArea8 = "\\(S(y) = 2\\pi R \\int_0^{\\frac{\\pi}{2}}  R cos(\\alpha) .d\\alpha \\)"
    var circleDemiArea9 = "\\(S(y) = 2\\pi R^2 \\int_0^{\\frac{\\pi}{2}} cos(\\alpha) .d\\alpha \\)"
    var circleDemiArea10 = "\\(S(y) = 2\\pi R^2 \\left[ sin(\\alpha) \\right]_0^\\frac{\\pi}{2} \\)"
    var circleDemiArea11 = "\\(S(y) = 2\\pi R^2 (sin(\\frac{\\pi}{2}) - sin(0)) \\)"
    var circleDemiArea12 = "\\(S(y) = 2\\pi R^2 (1 - 0) \\)"
    var circleDemiArea13 = "\\(S(y) = 2\\pi R^2 \\)"
    var circleArea = "\\(S(y)_{sphere} = 2S(y) \\)"
    var circleAreaR = "\\(S(y)_{sphere} = 4\\pi R^2 \\)"

    return (
        <>
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
            <p className="Title1">Calcul du volume par intégration</p>
            <p>Calculons avec une méthode d'intégration le volume de la sphère.
                {"\n"}
                Par facilité, nous allons d'abord calculer le demi-volume.
            </p>
            <ImageZoom src={sphereVolCalculus} name="Calcul du volume par intégration"/>
            <p>Notons <MathJaxInline toShow="$S(x)$" /> la surface du cercle en fonction du rayon <MathJaxInline toShow="$x$" /> variable</p>
            <MathJaxDisplay toShow={circleAreaX} demo={true} />
            <p>
                Exprimons tout d'abord <MathJaxInline toShow="$x$" /> en fonction de <MathJaxInline toShow="$y$" />.
                {"\n"}
                On a avec le théorème de Pythagore :
            </p>
            <MathJaxDisplay toShow={pyth} demo={true} />
            <p>Soit</p>
            <MathJaxDisplay toShow={rfH} demo={true} />
            <p>
                Soit la nouvelle surface du cercle en fonction de <MathJaxInline toShow="$y$" />
            </p>
            <MathJaxDisplay toShow={circleAreaY} demo={true} />
            <MathJaxDisplay toShow={circleAreaY2} demo={true} />
            <p>
                On va maintenant intégrer cette surface sur l'axe <MathJaxInline toShow="$y$" />, en ajoutant tous éléments <MathJaxInline toShow="$dV$" /> jusque <MathJaxInline toShow="$y=R$" />.
                {"\n"}{"\n"}Notons <MathJaxInline toShow="$V(y)$" /> le volume de la sphère
            </p>
            <MathJaxDisplay toShow={dV} demo={true} />
             <p>Afin de remplir la demi-sphère, on va intégrer sur toute la longueur <MathJaxInline toShow="$R$" /></p>
            <MathJaxDisplay toShow={intDv} demo={true} />
            <MathJaxDisplay toShow={circleDemiVol} demo={true} />
            <MathJaxDisplay toShow={circleDemiVol2} demo={true} />    
            <p>La dérivée de <MathJaxInline toShow="$y^2$" /> est <MathJaxInline toShow={"$\\frac{y^3}{3}$"} /></p>
            <MathJaxDisplay toShow={circleDemiVol3} demo={true} />
            <MathJaxDisplay toShow={circleDemiVol4} demo={true} />
            <MathJaxDisplay toShow={circleDemiVol5} demo={true} />
            <MathJaxDisplay toShow={circleDemiVol6} demo={true} />
            <MathJaxDisplay toShow={circleDemiVol7} demo={true} />
            <p>
                On a alors pour la sphère complète, deux fois la demi-sphère :
            </p>
            <MathJaxDisplay toShow={circleVol} demo={true} />
            <Container className="Focus">
               <MathJaxDisplay toShow={circleVolR}/>
            </Container>

            <p className="Title1">Calcul de la surface par intégration</p>
            <p>
                On peut faire la même chose pour calculer la surface.
                {"\n"}
                On prendra non plus la surface du cercle mais le périmètre.
            </p>
            <ImageZoom src={sphereAreaCalculus} name="Calcul de la surface par intégration"/>
            <p>Notons <MathJaxInline toShow="$P(x)$" /> le périmètre du cercle en fonction du rayon variable <MathJaxInline toShow="$x$" /></p>
            <MathJaxDisplay toShow={circlePerimX} demo={true} />
            <p>Plus haut, nous avons vu que : </p>
            <MathJaxDisplay toShow={rfH} demo={true} />
            <p>Soit</p>
            <MathJaxDisplay toShow={circlePerimY} demo={true} />
            <p>
                Cette fois, nous allons intégrer le périmètre sur une distance de <MathJaxInline toShow={"$l$"} />.
            </p>
            <p>Notons la surface de la demi-sphère <MathJaxInline toShow={"$S(y)$"} /></p>
            <MathJaxDisplay toShow={dS} demo={true} />
            <p>Nous allons intégrer jusque <MathJaxInline toShow={"$\\frac{\\pi}{2}$"} /> car nous remontons sur toute la moitié du demi-cercle </p>
            <MathJaxDisplay toShow={intDS} demo={true} />
            <MathJaxDisplay toShow={circleDemiArea} demo={true} />
            <MathJaxDisplay toShow={circleDemiArea2} demo={true} />
            <p>On voit sur la figure que :</p>
            <MathJaxDisplay toShow={lfAlpha} demo={true} />
            <p>Soit</p>
            <MathJaxDisplay toShow={dlfAlpha} demo={true} />
            <p>De même, on sait que</p>
            <MathJaxDisplay toShow={yfAlpha} demo={true} />
            <p>Donc on remplace dans l'équation tel que</p>
            <MathJaxDisplay toShow={circleDemiArea4} demo={true} />
            <p>On sort <MathJaxInline toShow="$R$" /> vu que c'est une constante</p>
            <MathJaxDisplay toShow={circleDemiArea5} demo={true} />
            <MathJaxDisplay toShow={circleDemiArea6} demo={true} />
            <MathJaxDisplay toShow={circleDemiArea7} demo={true} />
            <MathJaxDisplay toShow={circleDemiArea8} demo={true} />
            <p>De même, on sort <MathJaxInline toShow="$R$" /> </p>
            <MathJaxDisplay toShow={circleDemiArea9} demo={true} />
            <p>La dérivée de <MathJaxInline toShow="$cos(x)$" /> est <MathJaxInline toShow="$sin(x)$" /></p>
            <MathJaxDisplay toShow={circleDemiArea10} demo={true} />
            <MathJaxDisplay toShow={circleDemiArea11} demo={true} />
            <MathJaxDisplay toShow={circleDemiArea12} demo={true} />
            <MathJaxDisplay toShow={circleDemiArea13} demo={true} />
            <p>En enfin</p>
            <MathJaxDisplay toShow={circleArea} demo={true} />
            <Container className="Focus">
                <MathJaxDisplay toShow={circleAreaR}/>
            </Container>
            <p>Youpi !!!</p>
        </>
    )
}

export default LaSphere;