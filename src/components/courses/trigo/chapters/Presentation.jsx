import React from 'react';
import ImageZoom from '../../helpers/ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

import circleTrigo from '../assets/circleTrigo.png';
import sohcahtoa from '../assets/sohcahtoa.png';

import pathBuilder from '../../../helpers/pathBuilder';
import Link from '../../../immutable/nav/Link';

const Definition = () => {

    var sinDef = "\\(y =sin(\\alpha) \\)";
    var cosDef = "\\( x =cos(\\alpha) \\)";
    var sin = "\\(sin(\\alpha) = \\frac{oppose}{hypothenuse} \\)";
    var cos = "\\(cos(\\alpha) = \\frac{adjacent}{hypothenuse} \\)";
    var tan = "\\(tan(\\alpha) = \\frac{oppose}{adjacent} \\)";

    return (
            <>
                <p>
                    C'est dans le cercle que se définissent les notions de cosinus et de sinus.
                    {"\n"}{"\n"}
                    Le sinus est le projeté orthogonal de l'interception entre un cercle de rayon <MathJaxInline toShow="$R = 1$" /> et son rayon, sur l'axe vertical <MathJaxInline toShow="$y$" />.
                    {"\n"}
                </p>
                <MathJaxDisplay toShow={sinDef} demo />
                <p>
                    Le cosinus est le même principe mais appliqué sur l'axe horizontal <MathJaxInline toShow="$x$" />.  
                </p>
                <MathJaxDisplay toShow={cosDef} demo />
                <p>Nous verrons la tangente par la suite. </p>
                <ImageZoom src={circleTrigo} name="Cosinus et sinus" n={1} />
                <p>
                    Dans le cercle trigonométrique, on utilisera π comme une mesure d'angle (voir le chapitre sur <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.PI}`)} external>le nombre π</Link>)
                    {"\n"}
                    L'unité est le radian, où un tour complet vaut <MathJaxInline toShow={"$2 \\pi$"} />  radians (équivalent à 360°)
                    {"\n"}
                    Après un tour complet du cercle, les valeurs se répètent. C'est pour cela que les valeurs sont tous à  <MathJaxInline toShow={"$2 k\\pi$"} /> près.
                    {"\n"}
                    <MathJaxInline toShow={"$k$"} /> étant un entier naturel commençant à 0.
                </p>
                <p>
                    Un moyen mnémotechnique pour se souvenir des formules dans un triangle rectangle :
                    {"\n"}{"\n"}SOH-CAH-TOA
                </p>
                <ImageZoom src={sohcahtoa} name="SOH-CAH-TOA dans un triangle rectangle" n={2} />
                <MathJaxDisplay toShow={sin} demo />
                <MathJaxDisplay toShow={cos} demo />
                <MathJaxDisplay toShow={tan} demo />
                <p>
                    {"\n"} "opposé" signifie le côté opposé à l'angle α.
                    {"\n"} "adjacent" signifie le côté collé à l'angle α.
                    {"\n"} L'hypothénuse est le plus grand côté.
                </p>
                
            </>
    )

}

export default Definition;