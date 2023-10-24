import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import ImageZoom from '../../helpers/ImageZoom';
import circleTrigo from '../assets/circleTrigo.png';
import pythagoreReciproqueDemo from '../../pythagore/assets/pythagoreReciproqueDemo.png';
import Title1 from '../../helpers/Title1';

const PythagoreAppliqueALatrigo = () => {

    var pyth = "\\((cos(\\alpha))^2 + (sin(\\alpha))^2 = R^2\\)";
    var pyth2 = "\\((cos(\\alpha))^2 + (sin(\\alpha))^2 = 1\\)";
    var pyth3 = "\\(cos^2(\\alpha)+ sin^2(\\alpha) = 1\\)";

    var sinCos = "\\( \\Biggl\\{ \\begin{align*} sin(\\alpha) = \\frac{a}{c} \\\\ cos(\\alpha) = \\frac{b}{c} \\end{align*} \\)";

    var sinCarrePlusCosCarre = "\\( (sin(\\alpha))^2 + (cos(\\alpha))^2 = \\left(\\frac{a}{c}\\right)^2 + \\left(\\frac{b}{c}\\right)^2\\)";
    var sinCarrePlusCosCarre2 = "\\( (sin(\\alpha))^2 + (cos(\\alpha))^2 = \\frac{a^2}{c^2} + \\frac{b^2}{c^2} \\)";
    var sinCarrePlusCosCarre3 = "\\( (sin(\\alpha))^2 + (cos(\\alpha))^2 = \\frac{a^2 + b^2}{c^2} \\)";
    
    return (
            <>
                <p>Sur la figure 1 du <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIGO}/presentation`} external>premier chapitre sur la trigonométrie</Link> ci-dessous, on voit que nous sommes dans le cas d'un triangle rectangle formé par <MathJaxInline toShow={"$cos(\\alpha)$"} />, <MathJaxInline toShow={"$sin(\\alpha)$"} /> et son hypoténuse <MathJaxInline toShow={"$R$"} />.</p>
                <ImageZoom src={circleTrigo} name="Cosinus et sinus" n={1} />
                <p>Grâce au <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/presentation`} external>théorème de Pythagore</Link>, on sait que :</p>
                <MathJaxDisplay toShow={pyth} demo />
                <p>Et comme dans le contexte du cercle trigonométrique, le rayon <MathJaxInline toShow={"$ R = 1$"} />, on a alors :</p>
                <MathJaxDisplay toShow={pyth2} demo />

                <Title1 title={"Démonstration dans un triangle rectangle"} />
                <p>Dans un triangle rectangle, on sait que l'on peut appliquer les régles de trigonométrie. On a : </p>
                <MathJaxDisplay toShow={sinCos} demo />
                <ImageZoom src={pythagoreReciproqueDemo} name="Le triangle rectangle dans lequel s'applique la trigonométrie" n={2} />
                <MathJaxDisplay toShow={sinCarrePlusCosCarre} demo />
                <MathJaxDisplay toShow={sinCarrePlusCosCarre2} demo />
                <MathJaxDisplay toShow={sinCarrePlusCosCarre3} demo />
                <p>Et on sait que dans un triangle rectangle, grâce au <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}`} external>théorème de Pythagore</Link>, <MathJaxInline toShow={"$ a^2 + b^2 = c^2$"} />, soit : </p>
                <MathJaxDisplay toShow={pyth2} demo />

                <p>On note cette formule en général plutôt comme ceci :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={pyth3} />
                </Container>
            </>
    )
}

export default PythagoreAppliqueALatrigo;