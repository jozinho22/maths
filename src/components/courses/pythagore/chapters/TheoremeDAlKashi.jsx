import React from 'react';
import { Container } from 'react-bootstrap';

import ImageZoom from '../../ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import alKashi from '../../shapes/assets/alKashi.png';
import alKashiDemo from '../assets/alKashiDemo.png';
import alKashiDemo2 from '../assets/alKashiDemo2.png';
import alKashiDemo3 from '../assets/alKashiDemo3.png';

const TheoremeDAlKashi = () => {

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

    var aCarre = "\\(a^2 = h^2 + {c_2}^2\\)";
    var aCarre2 = "\\(a^2 = (b.sin(\\alpha))^2 + (c - b.cos(\\alpha))^2\\)";
    var aCarre3 = "\\(a^2 = b^2.sin^2(\\alpha) + c^2 - 2bc.cos(\\alpha) + b^2.cos^2(\\alpha)\\)";
    var aCarre4 = "\\(a^2 = b^2.(cos^2(\\alpha) + sin^2(\\alpha)) + c^2 - 2bc.cos(\\alpha) \\)";

    //cas 2
    var cosAlpha2 = "\\(cos(\\delta)= \\frac{a'}{b}\\)";
    var aPrim = "\\(a' = b.sin(\\delta)\\)";
    var sinAlpha2 = "\\(sin(\\delta)= \\frac{h_a}{b}\\)";
    var ha = "\\(h_a = b.sin(\\delta)\\)";

    var pyth = "\\( {h_a}^2 + (a' + a)^2  = c^2 \\)";
    var pyth2 = "\\( (b.sin(\\delta))^2 + (b.cos(\\delta) + a)^2 = c^2 \\)";
    var pyth3 = "\\( b^2.sin^2(\\delta) + b^2.cos^2(\\delta) +2ab.cos(\\delta) + a^2 = c^2 \\)";
    var pyth4 = "\\( b^2.(cos^2(\\delta) + sin^2(\\delta)) + 2ab.cos(\\delta) + a^2 = c^2 \\)";
    var pyth5 = "\\( a^2 + b^2 + 2ab.cos(\\delta)  = c^2 \\)";
    var pyth6 = "\\( a^2 + b^2 + 2ab.cos(\\pi - \\gamma )  = c^2 \\)";

    var pyth7 = "\\( a^2 + b^2 - 2ab.cos(\\gamma)  = c^2 \\)";

    return (
        <> 
            <p>Le théorème d'Al-Kashi est la généralisation du théorème de Pythagore, mais das un triangle quelconque.</p>
            <p>
                Il s'exprime ainsi.
                Dans un triangle quelconque formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} /> avec des angles opposés respectivement <MathJaxInline toShow={"$\\alpha$"} />, <MathJaxInline toShow={"$\\beta$"} />, <MathJaxInline toShow={"$\\gamma$"} />, on a les trois relations suivantes :
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={alKashiA} />
                <MathJaxDisplay toShow={alKashiB} />
                <MathJaxDisplay toShow={alKashiC} />
            </Container>
            <p>Le triangle supposé est representé sur la figure 4 suivante.</p>
            <ImageZoom src={alKashi} name="Théorème d'Al-Kashi" n={4} />

            <p className="Title1">Démonstration</p>
            <p className="Title2">1er cas : un triangle avec des angles aigus</p>
            <p>Nous avons projeté sur <MathJaxInline toShow={"$c$"} /> le sommet de l'angle <MathJaxInline toShow={"$\\gamma$"} /> pour obtenir la figure suivante:</p>
            <ImageZoom src={alKashiDemo} name="Démonstration du théorème d'Al-Kashi - cas 1" n={6} />
            <p>Avec les règles de trigonométrie bien connues, on peut écrire :</p>
            <MathJaxDisplay toShow={cosAlpha} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={c1} demo />
            <p>Mais aussi</p>
            <MathJaxDisplay toShow={sinAlpha} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={h1} fRef={7} demo />
            <p>On a par déduction logique, puisque <MathJaxInline toShow={"$c = c_1 + c_2$"} /> : </p>
            <MathJaxDisplay toShow={c2Fc1} demo />
            <MathJaxDisplay toShow={c2Fc1Bis} fRef={8} demo />
            <p>
               Avec le théorème de pythagore, nous pouvons écrire la relation suivante :
            </p>
            <MathJaxDisplay toShow={aCarre} demo />
            <p>On remplace <MathJaxInline toShow={"$h$"} /> et <MathJaxInline toShow={"$c_2$"} /> grâce à <MathJaxInline toShow={"$(7), (8)$"} />:</p>
            <MathJaxDisplay toShow={aCarre2} demo />
            <MathJaxDisplay toShow={aCarre3} demo  />
            <p>On factorise par <MathJaxInline toShow={"$b^2$"} /> :</p>
            <MathJaxDisplay toShow={aCarre4} demo />
            <p>Mais on sait que <MathJaxInline toShow={"$cos(\\alpha) + sin (\\alpha) = 1$"} />, soit :</p>
            <MathJaxDisplay toShow={alKashiA} />
            <p>
                Nous avons projeté sur le côté <MathJaxInline toShow={"$c$"} /> pour trouver les expressions de <MathJaxInline toShow={"$a^2$"} /> et <MathJaxInline toShow={"$b^2$"} />.
                {"\n"}De même, en projetant sur <MathJaxInline toShow={"$a$"} /> nous obtiendrons <MathJaxInline toShow={"$b^2$"} /> et <MathJaxInline toShow={"$c^2$"} />.
                {"\n"}Enfin, en projetant sur <MathJaxInline toShow={"$b$"} /> nous obtiendrons <MathJaxInline toShow={"$a^2$"} /> et <MathJaxInline toShow={"$c^2$"} />.
            </p>

            <p className="Title2">2nd cas : un triangle avec un angle obtus</p>
            <p>
                Un deuxième cas se présente, celui de la présence d'un angle obtus dans le triangle.
                {"\n"}La hauteur sera alors à l'extérieur du triangle.
            </p>
            <ImageZoom src={alKashiDemo2} name="Démonstration du théorème d'Al-Kashi - cas 2" n={7} />
            <p>Comme précédemment, on a les relations classiques de la trigonométrie :</p>
            <MathJaxDisplay toShow={cosAlpha2} demo />
            <p>Soit </p>
            <MathJaxDisplay toShow={aPrim} fRef={9} demo />
            <p>Et</p>
            <MathJaxDisplay toShow={sinAlpha2} demo />
            <p>Soit </p>
            <MathJaxDisplay toShow={ha} fRef={10} demo />
            <p>En appliquant le théorème de Pythagore dans le grand triangle, on a :</p>
            <MathJaxDisplay toShow={pyth} demo />
            <p>On remplace <MathJaxInline toShow={"$h_a$"} /> et <MathJaxInline toShow={"$a'$"} /> grâce à <MathJaxInline toShow={"$(9), (10)$"} />:</p>
            <MathJaxDisplay toShow={pyth2} demo />
            <MathJaxDisplay toShow={pyth3} demo />
            <MathJaxDisplay toShow={pyth4} demo />
            <MathJaxDisplay toShow={pyth5} demo />
            <p>
                Puisque l'on a prolongé la longueur <MathJaxInline toShow={"$b$"} />, l'angle <MathJaxInline toShow={"$\\delta = \\pi - \\gamma$"} />
            </p>
            <MathJaxDisplay toShow={pyth6} demo />
            <p>
                On sait de plus que <MathJaxInline toShow={"$cos(\\pi - \\gamma) = -cos(\\gamma)$"} />, donc :
            </p>
            <MathJaxDisplay toShow={pyth7} />
            <p>On aurait pu de même réaliser cette opération de l'autre côté en projetant sur <MathJaxInline toShow={"$b$"} /> au lieu de <MathJaxInline toShow={"$a$"} />.</p>
            <ImageZoom src={alKashiDemo3} name="Démonstration du théorème d'Al-Kashi - cas 2bis" n={8} />
        </>
    );

}

export default TheoremeDAlKashi;