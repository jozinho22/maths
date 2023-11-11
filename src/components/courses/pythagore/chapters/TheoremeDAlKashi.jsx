import React from 'react';
import { Container } from 'react-bootstrap';

import ImageZoom from '../../helpers/ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import alKashi from '../assets/alKashi.png';
import alKashiDemo from '../assets/alKashiDemo.png';

import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';
import Aside from '../../helpers/Aside';

const TheoremeDAlKashi = () => {

    var n = 0;

    var alKashiA = "\\( a^2  = b^2 + c^2 -2bc.cos(\\alpha) \\)";
    var alKashiB = "\\( b^2  = a^2 + c^2 -2ac.cos(\\beta) \\)";
    var alKashiC = "\\( c^2  = a^2 + b^2 -2ab.cos(\\gamma) \\)";

    //cas 1
    var cosAlpha = "\\(cos(\\alpha)= \\frac{c_1}{b}\\)";
    var c1 = "\\(c_1 = b.cos(\\alpha)\\)";
    var sinAlpha = "\\(sin(\\alpha)= \\frac{h}{b}\\)";
    var h1 = "\\(h = b.sin(\\alpha)\\)";
    var c2Fc1 = "\\(c_2 = c - c_1\\)";
    var c2Fc1Bis = "\\(c_2 = c - b.cos(\\alpha)\\)";

    var cosCarrePlusSinCarre = "\\(cos^2(\\alpha) + sin^2 (\\alpha) = 1\\)";

    var aCarre = "\\(a^2 = h^2 + {c_2}^2\\)";
    var aCarre2 = "\\(a^2 = \\left(b.sin(\\alpha)\\right)^2 + \\left(c - b.cos(\\alpha)\\right)^2\\)";
    var aCarre3 = "\\(a^2 = b^2.sin^2(\\alpha) + c^2 - 2bc.cos(\\alpha) + b^2.cos^2(\\alpha)\\)";
    var aCarre4 = "\\(a^2 = b^2.\\left(cos^2(\\alpha) + sin^2(\\alpha)\\right) + c^2 - 2bc.cos(\\alpha) \\)";

    return (
        <> 
            <p>Le théorème d'Al-Kashi est la généralisation du <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/presentation`} external>théorème de Pythagore</Link>, mais das un triangle quelconque.</p>
            <p>
                Il s'exprime ainsi.
                Dans un triangle quelconque formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} /> avec des angles opposés respectivement <MathJaxInline toShow={"$\\alpha$"} />, <MathJaxInline toShow={"$\\beta$"} />, <MathJaxInline toShow={"$\\gamma$"} />, on a les trois relations suivantes :
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={alKashiA} />
                <MathJaxDisplay toShow={alKashiB} />
                <MathJaxDisplay toShow={alKashiC} />
            </Container>
            <p>Le triangle supposé est representé sur la figure suivante.</p>
            <ImageZoom src={alKashi} name="Théorème d'Al-Kashi" n={++n} />

            <Title1 title={"Démonstration"} />
            <Title2 title={"a) 1er cas : un triangle avec des angles aigus"} />
            <p>Nous avons projeté sur <MathJaxInline toShow={"$c$"} /> le sommet de l'angle <MathJaxInline toShow={"$\\gamma$"} /> pour obtenir la figure suivante:</p>
            <ImageZoom src={alKashiDemo} name="Démonstration du théorème d'Al-Kashi - cas 1" n={++n} />
            <p>Avec les règles de trigonométrie bien connues, on peut écrire :</p>
            <MathJaxDisplay toShow={cosAlpha} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={c1} fRef={1}  demo />
            <p>Mais aussi</p>
            <MathJaxDisplay toShow={sinAlpha} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={h1} fRef={2} demo />
            <p>Puisque <MathJaxInline toShow={"$c = c_1 + c_2$"} />, grâce à <MathJaxInline toShow={"$(1)$"} /> on a : : </p>
            <MathJaxDisplay toShow={c2Fc1} demo />
            <MathJaxDisplay toShow={c2Fc1Bis} fRef={3} demo />
            <p>
               Avec le théorème de pythagore, nous pouvons écrire la relation suivante :
            </p>
            <MathJaxDisplay toShow={aCarre} demo />
            <p>On remplace <MathJaxInline toShow={"$h$"} /> et <MathJaxInline toShow={"$c_2$"} /> grâce à <MathJaxInline toShow={"$(2), (3)$"} />:</p>
            <MathJaxDisplay toShow={aCarre2} demo />
            <MathJaxDisplay toShow={aCarre3} demo  />
            <p>On factorise par <MathJaxInline toShow={"$b^2$"} /> :</p>
            <MathJaxDisplay toShow={aCarre4} demo />
            <Aside>
                 <p>Mais on sait grâce à <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIGO}/pythagore-et-trigonometrie`} external>cette formule de trigonométrie</Link> que :</p>
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={cosCarrePlusSinCarre} />
                </Container>
            </Aside>

            <p>Soit :</p>
           
            <Container className="Focus">
                <MathJaxDisplay toShow={alKashiA} />
            </Container>
            <p>
                En répétant la même opération pour les autres côtés, on retrouvera les deux autres équations :
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={alKashiB} />
                <MathJaxDisplay toShow={alKashiC} />
            </Container>
        </>
    );

}

export default TheoremeDAlKashi;