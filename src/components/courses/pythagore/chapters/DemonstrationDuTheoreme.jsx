import React from 'react';
import ImageZoom from '../../ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import pythagoreDemo1 from '../assets/pythagoreDemo1.png';
import pythagoreDemo2 from '../assets/pythagoreDemo2.png';


const DemonstrationDuTheoremeDePythagore = () => {

    var semblables = "\\(\\frac{b}{a} = \\frac{h}{c_1} = \\frac{c_2}{h}\\)";

    return (
        <>
            <p>Pour prouver la véracité du thèorème, reprenons le triangle précédent, et ajoutons-y sa hauteur <MathJaxInline toShow={"$h$"} />. </p>
            <ImageZoom src={pythagoreDemo1} name="Démonstration du thèorème de Pythagore" n={2} />
            <p>
                On sait que la somme des angles d'un triangle est égal à <MathJaxInline toShow={"$\\pi$"} /> (180°).
                {"\n"}{"\n"} Dans le triangle principal <MathJaxInline toShow={"$\\{a, b, c\\}$"} />, on voit que <MathJaxInline toShow={"$\\alpha + \\beta + \\frac{\\pi}{2} = \\pi$"} />.
                {"\n"} Donc on peut déduire les autres angles.
                {"\n"}{"\n"}Dans le triangle formé par <MathJaxInline toShow={"$\\{c_1, h, a\\}$"} />, on a un angle droit et l'angle <MathJaxInline toShow={"$\\alpha$"} />.
                {"\n"} Le troisième angle est donc <MathJaxInline toShow={"$\\beta$"} />.
                {"\n"}{"\n"}De même, dans le triangle formé par <MathJaxInline toShow={"$\\{h, c_2, b\\}$"} />, on a un angle droit et l'angle <MathJaxInline toShow={"$\\beta$"} />.
                {"\n"} Le troisième angle est donc <MathJaxInline toShow={"$\\alpha$"} />.
                {"\n"}{"\n"}Nous les avons ajouté à la figure suivante :
            </p>
            <ImageZoom src={pythagoreDemo2} name="Démonstration du thèorème de Pythagore (suite)" n={3} />
            <p>
                Le théorème des triangles semblables nous dit que lorsque deux triangles ont deux-à-deux les mêmes angles, ils sons semblables, et auront alors deux-à-deux leurs côtés similaires formant un même ratio.
                Dans ce cas :
            </p>
            <MathJaxDisplay toShow={semblables} />
            <p>
                De même, si deux triangles on deux-à-deux des côtés similaires formant le même ratio, ils sont semblables et auront alors deux-à-deux les mêmes angles.
                {"\n"}{"\n"}On peut alors dire que les trois triangles formés respectivement par :
            </p>
            <MathJaxDisplay toShow={"\\( \\{a, b, c\\}, \\{c_1, h, a\\}, \\{h, c_2, b\\}  \\)"} />
            <p>
                sont trois triangles semblables.
            </p>

        </>
    );


}

export default DemonstrationDuTheoremeDePythagore;