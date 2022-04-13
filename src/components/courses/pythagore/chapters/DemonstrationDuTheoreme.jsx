import React from 'react';
import { Container } from 'react-bootstrap';

import ImageZoom from '../../ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import pythagoreDemo1 from '../assets/pythagoreDemo1.png';
import pythagoreDemo2 from '../assets/pythagoreDemo2.png';
import Link from '../../../immutable/nav/Link';
import CoursesLinks from '../../CoursesLinks';

const DemonstrationDuTheoremeDePythagore = () => {

    var semblables = "\\(\\frac{b}{a} = \\frac{h}{c_1} = \\frac{c_2}{h}\\)";
    var semblables2 = "\\(\\frac{c}{b} = \\frac{a}{h} = \\frac{b}{c_2} \\)";
    var semblables3 = "\\(\\frac{c}{a} = \\frac{a}{c_1} = \\frac{b}{h} \\)";

    var trianglesSemblables = "\\( \\{a, \\; b, \\; c\\}, \\{c_1, \\; h, \\; a\\}, \\{h, \\; c_2, \\; b\\}  \\)";

    var ratio1 = "\\(\\frac{c}{a} = \\frac{a}{c_1} \\)";
    var ratio1pc = "\\(a^2 = c.c_1 \\)";

    var ratio2 = "\\(\\frac{c}{b} = \\frac{b}{c_2} \\)";
    var ratio2pc = "\\(b^2 = c.c_2 \\)";

    var r1plusr2 = "\\(a^2 + b^2 = c.c_1 + c.c_2 \\)";
    var r1plusr2bis = "\\(a^2 + b^2 = c(c_1 + c_2) \\)";
    var r1plusr2R = "\\(a^2 + b^2 = c^2\\)";

    return (
        <>
            <p>Pour prouver la véracité du thèorème, reprenons le triangle précédent, et ajoutons-y sa hauteur <MathJaxInline toShow={"$h$"} />. </p>
            <ImageZoom src={pythagoreDemo1} name="Démonstration du thèorème de Pythagore" n={2} />
            <p>
                On sait que la somme des angles d'un triangle est égal à <MathJaxInline toShow={"$\\pi$"} /> (180°).
                {"\n"}{"\n"} Dans le triangle principal <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} />, on voit que <MathJaxInline toShow={"$\\alpha + \\beta + \\frac{\\pi}{2} = \\pi$"} />.
                {"\n"} Cette relation générale va nous permettre de déduire d'autres angles.
                {"\n"}{"\n"}Dans le triangle formé par <MathJaxInline toShow={"$\\{c_1, \\; h, \\; a\\}$"} />, on a un angle droit et l'angle <MathJaxInline toShow={"$\\beta$"} />.
                {"\n"} Le troisième angle est donc <MathJaxInline toShow={"$\\alpha$"} />.
                {"\n"}{"\n"}De même, dans le triangle formé par <MathJaxInline toShow={"$\\{h, \\; c_2, \\; b\\}$"} />, on a un angle droit et l'angle <MathJaxInline toShow={"$\\alpha$"} />.
                {"\n"} Le troisième angle est donc <MathJaxInline toShow={"$\\beta$"} />.
                {"\n"}{"\n"}Nous les avons ajouté à la figure suivante :
            </p>
            <ImageZoom src={pythagoreDemo2} name="Démonstration du thèorème de Pythagore (suite)" n={3} />
            <p>
                Le théorème des triangles semblables nous dit que lorsque deux triangles ont deux-à-deux les mêmes angles, ils sons semblables, et auront alors deux-à-deux leurs côtés similaires formant un même ratio.
                {"\n"}Dans ce cas :
            </p>
            <MathJaxDisplay toShow={semblables} fRef={3} demo />
            <MathJaxDisplay toShow={semblables2} fRef={4} demo />
            <MathJaxDisplay toShow={semblables3} demo />
            <p>
                De même, si deux triangles on deux-à-deux des côtés similaires formant le même ratio, ils sont semblables et auront alors deux-à-deux les mêmes angles.
                {"\n"}{"\n"}On peut alors dire que les trois triangles formés respectivement par :
            </p>
            <MathJaxDisplay toShow={trianglesSemblables} demo />
            <p>
                sont trois triangles semblables.
            </p>
            <p>Grâce à l'expression <MathJaxInline toShow={"$(3)$"} />, on a :</p>
            <MathJaxDisplay toShow={ratio1} demo />
            <p>Avec la formule <MathJaxInline toShow={"$(1)$"} /> du chapitre sur <Link link={CoursesLinks.PRODUIT_EN_CROIX} >le produit en croix</Link>, on a :  </p>
            <MathJaxDisplay toShow={ratio1pc} fRef={5} demo />
            <p>De plus, graĉe à l'expression <MathJaxInline toShow={"$(4)$"} />, on a :</p>
            <MathJaxDisplay toShow={ratio2} demo />
            <p>puis</p>
            <MathJaxDisplay toShow={ratio2pc} fRef={6} demo />
            <p>En additionnant <MathJaxInline toShow={"$(5)$"} /> et <MathJaxInline toShow={"$(6)$"} />, on a :</p>
            <MathJaxDisplay toShow={r1plusr2} demo />
            <p>On factorise par <MathJaxInline toShow={"$c$"} /></p>
            <MathJaxDisplay toShow={r1plusr2bis} demo />
            <p>Mais <MathJaxInline toShow={"$c_1 + c_2$"} /> n'est autre que <MathJaxInline toShow={"$c$"} />, soit :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={r1plusr2R}  />
            </Container>
            <p>Donc si un triangle formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} /> et est rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />, alors <MathJaxInline toShow={"$a^2 + b^2 = c^2$"} />. </p>
        </>
    );

}

export default DemonstrationDuTheoremeDePythagore;