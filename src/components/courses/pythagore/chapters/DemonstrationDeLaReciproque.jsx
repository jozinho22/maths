import React from 'react';
import { Container } from 'react-bootstrap';
import ImageZoom from '../../helpers/ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import Aside from '../../helpers/Aside';
import pythagoreReciproqueDemo from '../assets/pythagoreReciproqueDemo.png';
import pythagoreReciproqueDemo2 from '../assets/pythagoreReciproqueDemo2.png';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

import Link from '../../../immutable/nav/Link';

const DemonstrationDeLaReciproque = () => {

    var n = 0;
    var gen = "\\(a^2 + b^2 = c^2\\)";
    var triangleArea = "\\( S_{triangle} = \\frac{base.hauteur}{2} \\)";
    var triangleArea_ch = "\\( S_{triangle} = \\frac{c.h}{2} \\)";
    var triangleArea_ab = "\\( S_{triangle} = \\frac{a.b}{2} \\)";

    var areasEqu = "\\(\\frac{c.h}{2} = \\frac{a.b}{2}\\)";
    var areasEqu2 = "\\(c.h = a.b\\)";

    var gen2 = "\\(a^2 + b^2 = (c_1 + c_2)^2\\)";
    var pythA = "\\(a^2 = c_1^2 + h^2\\)";
    var pythA2 = "\\(c_1^2 = a^2 - h^2\\)";
    var pythA3 = "\\(c_1 = \\sqrt{a^2 - h^2}\\)";
    var pythB3 = "\\(c_2 = \\sqrt{b^2 - h^2}\\)";

    var gen3 = "\\(a^2 + b^2 = \\left(\\sqrt{a^2 - h^2} + \\sqrt{b^2 - h^2} \\right)^2\\)";
    var gen4 = "\\(a^2 + b^2 = a^2 - h^2 + 2 \\sqrt{(a^2 - h^2)(b^2 - h^2)} + b^2 - h^2 \\)";
    var gen5 = "\\(0 = - 2h^2 + 2 \\sqrt{(a^2 - h^2)(b^2 - h^2)} \\)";
    var gen6 = "\\(0 = - 2h^2 + 2 \\sqrt{a^2b^2 - a^2h^2 - h^2b^2 + h^4} \\)";
    var gen7 = "\\(2h^2 = 2 \\sqrt{a^2b^2 - a^2h^2 - h^2b^2 + h^4}\\)";
    var gen8 = "\\(h^2 = \\sqrt{a^2b^2 - a^2h^2 - h^2b^2 + h^4} \\)";
    var gen9 = "\\( (h^2)^2 = \\left(\\sqrt{a^2b^2 - a^2h^2 - h^2b^2 + h^4}\\right)^2 \\)";
    var gen10 = "\\(h^4 = a^2b^2 - a^2h^2 - h^2b^2 + h^4 \\)";
    var gen11 = "\\(a^2h^2 + h^2b^2 = a^2b^2  \\)";
    var gen12 = "\\(h^2(a^2 + b^2) = a^2b^2  \\)";
    var gen13 = "\\(h^2c^2 = a^2b^2  \\)";
    var gen14 = "\\( \\sqrt{h^2c^2} = \\sqrt{a^2b^2 } \\)";

    var gen15 = "\\(ch = ab \\)";

    return (
        <> 
            <p>Afin de prouver la réciproque du théorème, il faut pouvoir prouver que dans un triangle formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} />, si <MathJaxInline toShow={"$a^2 + b^2 = c^2$"} /> alors ce triangle est rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />.</p>    
            <p>Pour cela, nous disposons d'un triangle, a priori rectangle, mais nous partons surtout de l'hypothèse que :</p>
            <MathJaxDisplay toShow={gen} demo />
            <p>Voici à quoi ressemble notre figure : </p>
            <ImageZoom src={pythagoreReciproqueDemo} name="Triangle a priori rectangle" n={++n} />
            <p>Nous allons tracer <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIANGLE}/la-hauteur-du-triangle`} external>la hauteur</Link> <MathJaxInline toShow={"$ h_c$"} /> qui coupe la longueur <MathJaxInline toShow={"$ c $"} /> à angle droit.</p>
            <ImageZoom src={pythagoreReciproqueDemo2} name="Triangle a priori rectangle avec la hauteur de c" n={++n} />
            <p>Nous savons que la surface d'un triangle répond à la formule suivante : </p>
            <MathJaxDisplay toShow={triangleArea} demo />
            <p>Nous pouvons donc alors écrire que : </p>
            <MathJaxDisplay toShow={triangleArea_ch} demo />
            <p>De plus, s'il existe un angle droit entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />, alors on aura aussi : </p>
            <MathJaxDisplay toShow={triangleArea_ab} demo />
            <Aside>
                <p>Cela signifira alors que <MathJaxInline toShow={"$b$"} /> est aussi une <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIANGLE}/la-hauteur-du-triangle`} external>hauteur</Link> du triangle formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} /> et on aura bien un triangle rectangle.</p>
                <p>Si cette relation s'avère vrai, on aura alors l'équivalence suivante :</p>
                <MathJaxDisplay toShow={areasEqu} demo />
                <MathJaxDisplay toShow={areasEqu2} demo />
            </Aside>

            <p>On cherche donc à prouver que :</p>
            <Container className="Focus LittleFocus">
                <MathJaxDisplay toShow={areasEqu2}  />
            </Container>

            <p>Tentons de prouver cela en reprenant notre hypothèse de départ.</p>
            <MathJaxDisplay toShow={gen} demo />
            <MathJaxDisplay toShow={gen2} fRef={1} demo />
            <Aside>
                <p>On sait grâce au <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}`} external>théorème de Pythagore</Link> que : </p>
                <MathJaxDisplay toShow={pythA} demo />
                <p>Soit</p>
                <MathJaxDisplay toShow={pythA2} demo />
                <MathJaxDisplay toShow={pythA3} demo fRef={2} />
                <p>De même, dans le triangle correspondant, on a :</p>
                <MathJaxDisplay toShow={pythB3} demo fRef={3} />
            </Aside>
            <p>En injectant <MathJaxInline toShow={"$(2)$"} /> et <MathJaxInline toShow={"$(3)$"} /> dans <MathJaxInline toShow={"$(1)$"} />, on a : </p>
            <MathJaxDisplay toShow={gen3} demo />
            <MathJaxDisplay toShow={gen4} demo />
            <p>On peut retirer <MathJaxInline toShow={"$a^2 + b^2$"} /> de chaque côte : </p>
            <MathJaxDisplay toShow={gen5} demo />
            <p>On développe l'expression à l'intérieur de la racine : </p>
            <MathJaxDisplay toShow={gen6} demo />
            <MathJaxDisplay toShow={gen7} demo />
            <MathJaxDisplay toShow={gen8} demo />
            <p>On met les deux expressions au carré : </p>
            <MathJaxDisplay toShow={gen9} demo />
            <MathJaxDisplay toShow={gen10} demo />
            <p>On retire les <MathJaxInline toShow={"$h^4$"} /> de chaque côté : </p>
            <MathJaxDisplay toShow={gen11} demo />
            <MathJaxDisplay toShow={gen12} demo />
            <Aside>
                <p>On sait par hypothèse que <MathJaxInline toShow={"$ a^2 + b^2 = c^2 $"} />, donc :</p>
            </Aside>
            <MathJaxDisplay toShow={gen13} demo />
            <p>Et enfin : </p>
            <MathJaxDisplay toShow={gen14} demo />
            <p>Soit : </p>
            <Container className="Focus LittleFocus">
                <MathJaxDisplay toShow={gen15}  />
            </Container>
            <p>On a bien prouvé que que si on a l'égalité <MathJaxInline toShow={"$ a^2 + b^2 = c^2 $"} />, alors on a aussi <MathJaxInline toShow={"$ ch = ab $"} />, soit que <MathJaxInline toShow={"$ b $"} /> est bien une <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIANGLE}/la-hauteur-du-triangle`} external>hauteur</Link> du triangle formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} />.</p>
            <p>Si <MathJaxInline toShow={"$ b $"} /> est une <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIANGLE}/la-hauteur-du-triangle`} external>hauteur</Link> du triangle, alors le triangle formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} /> est rectangle entre <MathJaxInline toShow={"$ a$"} /> et <MathJaxInline toShow={"$ b $"} />.</p>
            
        </>
    );

}

export default DemonstrationDeLaReciproque;