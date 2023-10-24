import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';

import cone from '../assets/cone.png'

import coneAreaCalculus from '../assets/coneAreaCalculus.png'
import coneAreaCalculus2 from '../assets/coneAreaCalculus2.png'

import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const CalculSurfaceCone = () => {

    var n = 0;
    var thales = "\\(\\frac{x}{r} = \\frac{y}{h} \\)";
    var thales2 = "\\(x = \\frac{y.r}{h} \\)"; 

    var areasSum = "\\(S_{cone} = S_{axe} + S_{base} \\)";
    var sBase = "\\(S_{base} = \\pi.r^2 \\)"; 

    var circlePerimX = "\\(P(x) = 2\\pi x\\)"
    var circlePerimY = "\\(P(y) = 2\\pi.\\frac{y.r}{h}\\)";
    var dS = "\\(d(S_{axe}(y)) = P(y).dl\\)";
    var intDS = "\\(\\int_0^h d(S_{axe}(y)) = \\int_0^h P(y) .dl\\)"
    var coneArea = "\\(S_{axe}(y) = \\int_0^h 2\\pi.\\frac{y.r}{h} .dl \\)"
    var coneArea2 = "\\(S_{axe}(y) = 2\\pi.\\frac{r}{h} \\int_0^h y .dl \\)"

    var l = "\\(l = \\sqrt{x^2 + y^2} \\)"
    var dl = "\\(dl = d\\sqrt{x^2 + y^2} \\)"
    var dl2 = "\\(dl = d\\sqrt{\\left(\\frac{y.r}{h}^2 \\right) + y^2} \\)"
    var dl3 = "\\(dl = d\\sqrt{\\frac{y^2.r^2}{h^2} + y^2} \\)"
    var dl4 = "\\(dl = d\\sqrt{y^2.(\\frac{r^2}{h^2} + 1)} \\)"
    var dl5 = "\\(dl = \\left(\\sqrt{\\frac{r^2}{h^2} + 1}\\right).dy \\)"
    var coneArea3 = "\\(S_{axe}(y) = 2\\pi.\\frac{r}{h} . \\int_0^h y .\\left(\\sqrt{\\frac{r^2}{h^2} + 1}\\right).dy \\)"
    var coneArea4 = "\\(S_{axe}(y) = 2\\pi.\\frac{r}{h}.\\left(\\sqrt{\\frac{r^2}{h^2} + 1}\\right) . \\int_0^h y .dy \\)"
    var coneArea5 = "\\(S_{axe}(y) = 2\\pi.\\frac{r}{h}.\\left(\\sqrt{\\frac{r^2}{h^2} + 1}\\right) . \\left[\\frac{y^2}{2} \\right]_0^h \\)"
    var coneArea6 = "\\(S_{axe} = 2\\pi.\\frac{r}{h}.\\left(\\sqrt{\\frac{r^2}{h^2} + 1}\\right) . \\left(\\frac{h^2}{2} - \\frac{0^2}{2} \\right) \\)"
    var coneArea7 = "\\(S_{axe} = 2\\pi.\\frac{r}{h}.\\left(\\sqrt{\\frac{r^2}{h^2} + 1}\\right) . \\frac{h^2}{2} \\)"
    var coneArea8 = "\\(S_{axe} = 2\\pi.\\frac{rh}{2}.\\left(\\sqrt{\\frac{r^2}{h^2} + 1}\\right) \\)"
    var coneArea9 = "\\(S_{axe} = 2\\pi.\\frac{rh}{2}.\\left(\\sqrt{\\frac{r^2 + h^2}{h^2}}\\right) \\)"
    var coneArea10 = "\\(S_{axe} = 2\\pi.\\frac{rh}{2}.\\frac{1}{h}.\\sqrt{r^2 + h^2} \\)"
    var coneArea11 = "\\(S_{axe} = 2\\pi.r.\\sqrt{r^2 + h^2} \\)";

    var coneAreaResult = "\\(S_{cone} = \\pi.r^2 + 2\\pi.r.\\sqrt{r^2 + h^2} \\)";

    return (
        <>
            <p>Le cône est une pyramide avec un base circulaire. Il est caractérise par sa hauteur <MathJaxInline toShow={"$h$"}/> et le rayon de sa base <MathJaxInline toShow={"$r$"}/>, qu'on appelle aussi apothème.</p>
            <p>Sa base a donc une surface de <MathJaxInline toShow={"$\\pi.r^2$"}/>.</p>
            <ImageZoom src={cone} name="Le cône" n={++n}/>
            <p>Sa surface vaut : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={coneAreaResult} />
            </Container>

            <Title1 title={"Démonstration"} />
            <p>La surface du cône est composée de la surface le long de l'axe <MathJaxInline toShow={"$y$"}/> que nous appelerons <MathJaxInline toShow={"$S_{axe}$"}/> ainsi que la surface de sa base, <MathJaxInline toShow={"$S_{base}$"}/>.</p>
            <MathJaxDisplay toShow={areasSum} demo />
            <p>Nous l'avons déjà vu plus, la surface de sa base est :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={sBase} />
            </Container>
            <p>Il nous reste alors le second terme <MathJaxInline toShow={"$S_{axe}$"}/> à calculer.</p>
            <ImageZoom src={coneAreaCalculus} name="Calcul de la surface du cône" n={++n}/>
            <p>Notons <MathJaxInline toShow="$P(x)$" /> le périmètre du cercle en fonction du rayon variable <MathJaxInline toShow="$x$" /></p>
            <MathJaxDisplay toShow={circlePerimX} fRef={1} demo />
            <p>On a avec <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.THALES}/presentation`} external>le théorème de Thalès</Link> : </p>
            <MathJaxDisplay toShow={thales} demo />
            <MathJaxDisplay toShow={thales2} fRef={2} demo />
            <p>Soit en injectant <MathJaxInline toShow={"$(2)$"}/> dans <MathJaxInline toShow={"$(1)$"}/>, on obtient le périmètre en fonction de <MathJaxInline toShow={"$y$"}/> : </p>
            <MathJaxDisplay toShow={circlePerimY} demo />
            <p>Nous allons intégrer sur la distance <MathJaxInline toShow={"$l$"}/> qui est l'hypoténuse du triangle rectangle formé par <MathJaxInline toShow={"$x$"}/>, <MathJaxInline toShow={"$y$"}/> et <MathJaxInline toShow={"$l$"}/>.</p>
            <p>Notons <MathJaxInline toShow={"$S_{axe}(y)$"}/> la surface du cône sur l'axe <MathJaxInline toShow={"$y$"}/>.</p>
            <p>On a alors : </p>
            <MathJaxDisplay toShow={dS} demo />
            <MathJaxDisplay toShow={intDS} demo />
            <p>Après l'intégration, on a la surface <MathJaxInline toShow={"$S_{axe}(y)$"}/> : </p>
            <MathJaxDisplay toShow={coneArea} demo />
            <p>On sort les constantes :</p>
            <MathJaxDisplay toShow={coneArea2} fRef={3} demo />
            <p>Or on voit sur la figure ci-dessous qu'avec <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/presentation`} external>le théorème de Pythagore</Link> :</p>
            <MathJaxDisplay toShow={l} demo />
            <MathJaxDisplay toShow={dl} fRef={4} demo />
            <ImageZoom src={coneAreaCalculus2} name="Calcul de la surface du cône (2)" n={++n}/>
            <p>Mais souvenez-vous que : </p>
            <MathJaxDisplay toShow={thales2} fRef={2} demo />
            <p>Soit en injectant <MathJaxInline toShow={"$(2)$"}/> dans <MathJaxInline toShow={"$(4)$"}/></p>
            <MathJaxDisplay toShow={dl2} demo />
            <MathJaxDisplay toShow={dl3} demo />
            <MathJaxDisplay toShow={dl4} demo />
            <MathJaxDisplay toShow={dl5} fRef={5} demo />
            <p>À présent on injecte <MathJaxInline toShow={"$(5)$"}/> dans <MathJaxInline toShow={"$(3)$"}/> : </p>
            <MathJaxDisplay toShow={coneArea3} demo />
            <p>On sort à nouveau les constantes : </p>
            <MathJaxDisplay toShow={coneArea4} demo />
            <MathJaxDisplay toShow={coneArea5} demo />
            <MathJaxDisplay toShow={coneArea6} demo />
            <MathJaxDisplay toShow={coneArea7} demo />
            <p>On ajuste les <MathJaxInline toShow={"$h$"}/> de chaque côté :</p>
            <MathJaxDisplay toShow={coneArea8} demo />
            <MathJaxDisplay toShow={coneArea9} demo />
            <p>On sort <MathJaxInline toShow={"$h$"}/> de la racine :</p>
            <MathJaxDisplay toShow={coneArea10} demo />
            <p>Soit :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={coneArea11} />
            </Container>
            <p>Nous obtenons alors une surface totale de : </p>
            <MathJaxDisplay toShow={areasSum} demo />
            <p>Soit : </p>

            <Container className="Focus">
                <MathJaxDisplay toShow={coneAreaResult} />
            </Container>
        </>
    )
}

export default CalculSurfaceCone;