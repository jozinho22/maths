import { Container } from 'react-bootstrap';
import ImageZoom from '../../helpers/ImageZoom';

import sphereAreaCalculus from '../assets/sphereAreaCalculus.png';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

const CalculSurfaceSphere = () => {

    var n = 0;
    var pyth = "\\(R^2 = y^2 + x^2 \\)";
    var rfH = "\\(x = \\sqrt{R^2 - y^2} \\)";
    
    var circlePerimX = "\\(P(x) = 2\\pi x\\)"
    var circlePerimY = "\\(P(y) = 2\\pi \\sqrt{R^2 - y^2}\\)"

    var lfAlpha = "\\(l = R \\alpha \\)"
    var dlfAlpha = "\\(dl = R.d\\alpha \\)"
    var dS = "\\(d[S_{\\frac{s}{2}}(y)] = P(y).dl\\)"
    var intDS = "\\(\\int_0^{\\frac{\\pi}{2}} d(S_{\\frac{s}{2}}(y)) = \\int_0^{\\frac{\\pi}{2}} P(y) .dl\\)"

    var circleDemiArea = "\\(S_{\\frac{s}{2}}(y) = \\int_0^{\\frac{\\pi}{2}} P(y) .dl \\)"
    var circleDemiArea2 = "\\(S_{\\frac{s}{2}}(y) = \\int_0^{\\frac{\\pi}{2}} 2\\pi \\sqrt{R^2 - y^2} .dl \\)"
    var yfAlpha = "\\(y = R .sin(\\alpha) \\)"
    var circleDemiArea4 = "\\(S_{\\frac{s}{2}}(y) = 2\\pi \\int_0^{\\frac{\\pi}{2}} \\sqrt{R^2 - y^2} R.d\\alpha \\)"
    var circleDemiArea5 = "\\(S_{\\frac{s}{2}}(y) = 2\\pi R \\int_0^{\\frac{\\pi}{2}} \\sqrt{R^2 - R^2 sin^2(\\alpha)} .d\\alpha \\)"
    var circleDemiArea6 = "\\(S_{\\frac{s}{2}}(y) = 2\\pi R \\int_0^{\\frac{\\pi}{2}}  \\sqrt{R^2 (1 -sin^2(\\alpha))} .d\\alpha \\)"
    var circleDemiArea8 = "\\(S_{\\frac{s}{2}}(y) = 2\\pi R \\int_0^{\\frac{\\pi}{2}}  R cos(\\alpha) .d\\alpha \\)"
    var circleDemiArea9 = "\\(S_{\\frac{s}{2}}(y) = 2\\pi R^2 \\int_0^{\\frac{\\pi}{2}} cos(\\alpha) .d\\alpha \\)"
    var circleDemiArea10 = "\\(S_{\\frac{s}{2}}(y) = 2\\pi R^2 \\left[ sin(\\alpha) \\right]_0^\\frac{\\pi}{2} \\)"
    var circleDemiArea11 = "\\(S_{\\frac{s}{2}}(y) = 2\\pi R^2 (sin(\\frac{\\pi}{2}) - sin(0)) \\)"
    var circleDemiArea12 = "\\(S_{\\frac{s}{2}}(y) = 2\\pi R^2 (1 - 0) \\)"
    var circleDemiArea13 = "\\(S_{\\frac{s}{2}}(y) = 2\\pi R^2 \\)"
    var circleArea = "\\(S_{s} = 2S_{\\frac{s}{2}}(y) \\)"
    var circleAreaR = "\\(S_{s} = 4\\pi R^2 \\)"

    return (
        <>
            <p>La surface de la sphère est de :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={circleAreaR}/>
            </Container>

            <Title1 title={"Démonstration"} />
            <p>Notons <MathJaxInline toShow="$P(x)$" /> le périmètre du cercle en fonction du rayon variable <MathJaxInline toShow="$x$" /></p>
            <ImageZoom src={sphereAreaCalculus} name="Calcul de la surface par intégration" n={++n}/>
            
            <MathJaxDisplay toShow={circlePerimX} demo />
            <p>Sur la figure ci-dessous, nous voyons avec <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/presentation`} external>le théorème de Pythagore</Link> que : </p>
            <MathJaxDisplay toShow={pyth} demo />
            <MathJaxDisplay toShow={rfH} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={circlePerimY} demo />
            <p>
                Cette fois, nous allons intégrer le périmètre sur une distance de <MathJaxInline toShow={"$l$"} />.
            </p>
            <p>Notons la surface de la demi-sphère <MathJaxInline toShow={"$S_{\\frac{s}{2}}(y)$"} /></p>
            <MathJaxDisplay toShow={dS} demo />
            <p>Nous allons intégrer jusque <MathJaxInline toShow={"$\\frac{\\pi}{2}$"} /> car nous remontons sur toute la moitié du demi-cercle </p>
            <MathJaxDisplay toShow={intDS} demo />
            <MathJaxDisplay toShow={circleDemiArea} demo />
            <MathJaxDisplay toShow={circleDemiArea2} demo />
            <p>On voit sur la figure que :</p>
            <MathJaxDisplay toShow={lfAlpha} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={dlfAlpha} demo />
            <p>De même, on sait que</p>
            <MathJaxDisplay toShow={yfAlpha} demo />
            <p>Donc on remplace dans l'équation tel que</p>
            <MathJaxDisplay toShow={circleDemiArea4} demo />
            <p>On sort <MathJaxInline toShow="$R$" /> vu que c'est une constante</p>
            <MathJaxDisplay toShow={circleDemiArea5} demo />
            <MathJaxDisplay toShow={circleDemiArea6} demo />
            <MathJaxDisplay toShow={circleDemiArea8} demo />
            <p>De même, on sort <MathJaxInline toShow="$R$" /> </p>
            <MathJaxDisplay toShow={circleDemiArea9} demo />
            <p>La dérivée de <MathJaxInline toShow="$cos(x)$" /> est <MathJaxInline toShow="$sin(x)$" /></p>
            <MathJaxDisplay toShow={circleDemiArea10} demo />
            <MathJaxDisplay toShow={circleDemiArea11} demo />
            <MathJaxDisplay toShow={circleDemiArea12} demo />
            <MathJaxDisplay toShow={circleDemiArea13} demo />
            <p>En enfin, on double la valeur pour obtenir la surface totale de la sphère.</p>
            <MathJaxDisplay toShow={circleArea} demo />
            <Container className="Focus">
                <MathJaxDisplay toShow={circleAreaR}/>
            </Container>
        </>
    )
}

export default CalculSurfaceSphere;