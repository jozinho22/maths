import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';

import coneVolCalculus from '../assets/coneVolCalculus.png'

import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const CalculVolumeCone = () => {

    var n = 0;

    var thales = "\\(\\frac{x}{r} = \\frac{y}{h} \\)";
    var thales2 = "\\(x = \\frac{y.r}{h} \\)"; 

    var sCercle = "\\(S_{cercle} = \\pi.r^2 \\)"; 
    var circleAreaX = "\\(S_{cercle}(x) = \\pi.x^2 \\)"; 
    var circleAreaY = "\\(S_{cercle}(y) = \\pi\\left(\\frac{y.r}{h} \\right)^2 \\)"; 
    var circleAreaY2 = "\\(S_{cercle}(y) = \\pi.\\frac{y^2.r^2}{h^2} \\)"; 
    var circleVolY = "\\(V_{cone}(y) = \\int_0^h S_{y} .dy \\)"; 
    var circleVolY2 = "\\(V_{cone}(y) = \\pi \\frac{r^2}{h^2} \\int_0^h y^2 .dy \\)"; 
    var circleVolY3 = "\\(V_{cone} = \\pi \\frac{r^2}{h^2} \\left[\\frac{y^3}{3} \\right]_0^h \\)"; 
    var circleVolY4 = "\\(V_{cone} = \\pi \\frac{r^2}{h^2} \\left(\\frac{h^3}{3} - \\frac{0^3}{3} \\right) \\)"; 
    var circleVolY5 = "\\(V_{cone} = \\pi \\frac{r^2}{h^2} \\left(\\frac{h^3}{3}\\right) \\)"; 
    var circleVolYResult = "\\(V_{cone} = \\frac{\\pi. r^2.h}{3} \\)"; 

    return (
        <>
            <p>Soit un cône de hauteur <MathJaxInline toShow={"$h$"}/> et le rayon de sa base <MathJaxInline toShow={"$r$"}/>.</p>
            <p>Son volume vaut : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={circleVolYResult} />
            </Container>

            <Title1 title={"Démonstration"} />
            <p>Pour calculer le volume du cône, nous allons retourner la forme par mesure de simplicité.</p>
            <ImageZoom src={coneVolCalculus} name="Calcul du volume du cône" n={++n}/>
            <p>
                Nous allons y introduire deux variables <MathJaxInline toShow={"$x$"}/> et <MathJaxInline toShow={"$y$"}/>.
                {"\n"}
                <MathJaxInline toShow={"$x$"}/> sera le rayon variable jusque <MathJaxInline toShow={"$r$"}/>.
                {"\n"}
                <MathJaxInline toShow={"$y$"}/> sera la hauteur variable jusque <MathJaxInline toShow={"$h$"}/>.
                {"\n"}{"\n"}La variable <MathJaxInline toShow={"$x$"}/> est alors dépendant du mouvement de <MathJaxInline toShow={"$y$"}/>. C'est cette dernière qui mène la danse.
            </p>
            <p>Appliquons <Link url={`${PagesConstants.COURS}${CoursesConstants.THALES}/presentation`} external>le théorème de Thalès</Link> dans les deux triangles formés par ces variables.</p>
            <p>On a : </p>
            <MathJaxDisplay toShow={thales} demo />
            <p>Soit :</p>
            <MathJaxDisplay toShow={thales2} fRef={1} demo />
            <p>Mais on sait que la surface du cercle est : </p>
            <MathJaxDisplay toShow={sCercle} demo/>
            <p>Ici le rayon sur lequel nous travaillons est <MathJaxInline toShow={"$x$"}/>, soit :</p>
            <MathJaxDisplay toShow={circleAreaX} fRef={2} demo />
            <p>En injectant maintenant <MathJaxInline toShow={"$(1)$"}/> dans <MathJaxInline toShow={"$(2)$"}/>, on obtient la surface du cercle en fonction de <MathJaxInline toShow={"$y$"}/> :</p>
            <MathJaxDisplay toShow={circleAreaY} demo />
            <MathJaxDisplay toShow={circleAreaY2} demo />
            <p>À présent, comme nous savons que le volume du cône va être la somme de ces surfaces sur l'axe <MathJaxInline toShow={"$y$"}/>, nous pouvons intégrer sur toute la longueur <MathJaxInline toShow={"$y$"}/> : </p>
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
        </>
    )
}

export default CalculVolumeCone;