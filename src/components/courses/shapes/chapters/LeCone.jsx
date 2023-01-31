import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../ImageZoom';

import cone from '../assets/cone.png'
import coneVolCalculus from '../assets/coneVolCalculus.png'
import coneAreaCalculus from '../assets/coneAreaCalculus.png'

import Link from '../../../immutable/nav/Link';
import CoursesLinks from '../../CoursesLinks';

const LeCone = () => {

    var n = 0;
    var thales = "\\(\\frac{x}{r} = \\frac{y}{h} \\)";
    var thales2 = "\\(x = \\frac{y.r}{h} \\)"; 
    var sCercle = "\\(S_{cercle} = \\pi.r^2 \\)"; 
    var circleAreaX = "\\(S(x) = \\pi.x^2 \\)"; 
    var circleAreaY = "\\(S(y) = \\pi\\left(\\frac{y.r}{h} \\right)^2 \\)"; 
    var circleAreaY2 = "\\(S(y) = \\pi.\\frac{y^2.r^2}{h^2} \\)"; 
    var circleVolY = "\\(V(y) = \\int_0^h S_{y} .dy \\)"; 
    var circleVolY2 = "\\(V(y) = \\pi \\frac{r^2}{h^2} \\int_0^h y^2 .dy \\)"; 
    var circleVolY3 = "\\(V(y) = \\pi \\frac{r^2}{h^2} \\left[\\frac{y^3}{3} \\right]_0^h \\)"; 
    var circleVolY4 = "\\(V = \\pi \\frac{r^2}{h^2} \\left(\\frac{h^3}{3} - \\frac{0^3}{3} \\right) \\)"; 
    var circleVolY5 = "\\(V = \\pi \\frac{r^2}{h^2} \\left(\\frac{h^3}{3}\\right) \\)"; 
    var circleVolYResult = "\\(V = \\frac{\\pi. r^2.h}{3} \\)"; 

    var areasSum = "\\(S_{cone} = S_{axe} + S_{base} \\)";
    var sBase = "\\(S_{base} = \\pi.x^2 \\)"; 

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

    var aerasSumResult = "\\(S_{cone} = \\pi.x^2 + 2\\pi.r.\\sqrt{r^2 + h^2} \\)";
    var aerasSumResult2 = "\\(S_{cone} = \\pi. (x^2 + 2.r.\\sqrt{r^2 + h^2}) \\)";


    return (
        <>
            <p>Le cône est une pyramide avec un base circulaire. Il est caractérise par sa hauteur <MathJaxInline toShow={"$h$"}/> et le rayon de sa base <MathJaxInline toShow={"$r$"}/>, qu'on appelle aussi apothème.</p>
            <p>Sa base a donc une surface de <MathJaxInline toShow={"$\\pi.r^2$"}/> (voir <Link link={'/cours/les-formes/le-cercle'} >la chapitre sur le cercle</Link>)</p>
            <ImageZoom src={cone} name="Le cône" n={++n}/>


            <p className="Title1">a) Calcul du volume par intégration</p>
            <p>Pour calculer le volume du cône, nous allons retourner la forme par mesure de simplicité.</p>
            <ImageZoom src={coneVolCalculus} name="Calcul du volume du cône" n={++n}/>
            <p>
                Nous allons y introduire deux variables <MathJaxInline toShow={"$x$"}/> et <MathJaxInline toShow={"$y$"}/>.
                {"\n"}
                <MathJaxInline toShow={"$x$"}/> sera le rayon variable sur l'axe <MathJaxInline toShow={"$y$"}/>.
                {"\n"}
                <MathJaxInline toShow={"$y$"}/> sera la hauteur variable jusque <MathJaxInline toShow={"$h$"}/>.
            </p>
            <p>Appliquons le théorème de Thalès dans les deux triangles formés par ces variables.</p>
            <p>On a : </p>
            <MathJaxDisplay toShow={thales} demo />
            <p>Soit :</p>
            <MathJaxDisplay toShow={thales2} fRef={1} demo />
            <p>Mais on sait que la surface du cercle est : </p>
            <MathJaxDisplay toShow={sCercle} demo/>
            <p>Ici le rayon sur lequel on travaille est <MathJaxInline toShow={"$y$"}/>, soit :</p>
            <MathJaxDisplay toShow={circleAreaX} fRef={2} demo />
            <p>En injectant maintenant (1) dans (2), on obtient la surface du cercle en fonction de <MathJaxInline toShow={"$y$"}/> :</p>
            <MathJaxDisplay toShow={circleAreaY} demo />
            <MathJaxDisplay toShow={circleAreaY2} demo />
            <p>À présent, comme nous savons que le volume va être la somme de ces surfaces sur l'axe <MathJaxInline toShow={"$y$"}/>, nous pouvons intégrer sur <MathJaxInline toShow={"$y$"}/> : </p>
            <MathJaxDisplay toShow={circleVolY} demo />
            <p>Ici on peut sortir les constantes :</p>
            <MathJaxDisplay toShow={circleVolY2} demo />
            <MathJaxDisplay toShow={circleVolY3} demo />
            <MathJaxDisplay toShow={circleVolY4} demo />
            <MathJaxDisplay toShow={circleVolY5} demo />
            <p>Le volume d'un cône de hauteur <MathJaxInline toShow={"$h$"}/> et de rayon <MathJaxInline toShow={"$r$"}/> est :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={circleVolYResult} />
            </Container>

            <p className="Title1">b) Calcul de la surface par intégration</p>
            <p>La surface du cône est composée de la surface le long de l'axe <MathJaxInline toShow={"$y$"}/> que nous appelerons <MathJaxInline toShow={"$S_{axe}$"}/> ainsi que la surface de sa base, <MathJaxInline toShow={"$S_{base}$"}/>.</p>
            <MathJaxDisplay toShow={areasSum} demo />
            <p>Nous l'avons déjà vu plus, la surface de sa base est :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={sBase} />
            </Container>
            <p>Il nous reste alors le second terme à calculer.</p>
            <ImageZoom src={coneAreaCalculus} name="Calcul de la surface du cône" n={++n}/>
            <p>Notons <MathJaxInline toShow="$P(x)$" /> le périmètre du cercle en fonction du rayon variable <MathJaxInline toShow="$x$" /></p>
            <MathJaxDisplay toShow={circlePerimX} fRef={3} demo />
            <p>Plus haut, on a vu que : </p>
            <MathJaxDisplay toShow={thales2} fRef={1} demo />
            <p>Soit en injectant (1) dans (3), on obitent le périmètre en fonction de <MathJaxInline toShow={"$y$"}/> : </p>
            <MathJaxDisplay toShow={circlePerimY} demo />
            <p>Nous allons intégrer sur la distance <MathJaxInline toShow={"$l$"}/> qui est l'hypothénuse du triangle rectangle formé par <MathJaxInline toShow={"$x$"}/>, <MathJaxInline toShow={"$y$"}/> et <MathJaxInline toShow={"$l$"}/>.</p>
            <p>Notons <MathJaxInline toShow={"$S(y)$"}/> la surface du cône sur l'axe <MathJaxInline toShow={"$y$"}/>.</p>
            <p>On a alors : </p>
            <MathJaxDisplay toShow={dS} demo />
            <MathJaxDisplay toShow={intDS} demo />
            <p>Après l'intégration, on a la surface <MathJaxInline toShow={"$S(y)$"}/> : </p>
            <MathJaxDisplay toShow={coneArea} demo />
            <p>On sort les constantes :</p>
            <MathJaxDisplay toShow={coneArea2} fRef={4} demo />
            <p>Or on voit sur la figure ci-dessus que :</p>
            <MathJaxDisplay toShow={l} demo />
            <MathJaxDisplay toShow={dl} fRef={5} demo />
            <p>Mais souvenez-vous que : </p>
            <MathJaxDisplay toShow={thales2} fRef={1} demo />
            <p>Soit en injectant (1) dans (5)</p>
            <MathJaxDisplay toShow={dl2} demo />
            <MathJaxDisplay toShow={dl3} demo />
            <MathJaxDisplay toShow={dl4} fRef={6} demo />
            <MathJaxDisplay toShow={dl5} demo />
            <p>À présent on injecte (6) dans (4) : </p>
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
            <MathJaxDisplay toShow={aerasSumResult} demo />
            <Container className="Focus">
                <MathJaxDisplay toShow={aerasSumResult2} />
            </Container>
        </>
    )
}

export default LeCone;