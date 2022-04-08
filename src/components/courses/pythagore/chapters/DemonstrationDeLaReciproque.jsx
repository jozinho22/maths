import React from 'react';

import ImageZoom from '../../ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import pythagoreReciproqueDemo from '../assets/pythagoreReciproqueDemo.png';

const DemonstrationDeLaReciproque = () => {

    var gen = "\\(a^2 + b^2 = c^2\\)";

    var gen2 = "\\( \\frac{a^2}{c^2} + \\frac{b^2}{c^2} = 1\\)";
    var gen3 = "\\( {\\frac{a}{c}}^2 + {\\frac{b}{c}}^2 = 1\\)";

    var gen4 = "\\( sin^2(\\beta) + cos^2(\\beta) = 1\\)";
    var gen5 = "\\( cos^2(\\alpha) + sin^2(\\alpha) = 1\\)";

    return (
        <>
            <p>Pour prouver la réciproque du thèorème, il va falloir prouver que le triangle formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} /> est bien rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />, si et seulement si : </p>
            <MathJaxDisplay toShow={gen} />
            <p>Pour cela, nous allons reprendre la figure de départ en y ajoutant les deux angles <MathJaxInline toShow={"$\\alpha$"} /> et <MathJaxInline toShow={"$\\beta$"} /></p>
            <ImageZoom src={pythagoreReciproqueDemo} name="Démonstration de la réciproque du thèorème de Pythagore" n={2} />
            <p>En divisant le tout par <MathJaxInline toShow={"$c^2$"} />, on obtient : </p>
            <MathJaxDisplay toShow={gen2} demo />
            <MathJaxDisplay toShow={gen3} fRef={7} demo />
            <p>
                Mais <MathJaxInline toShow={"$\\frac{a}{c}$"} /> n'est autre que <MathJaxInline toShow={"$sin(\\beta)$"} /> et <MathJaxInline toShow={"$\\frac{b}{c}$"} /> n'est autre que <MathJaxInline toShow={"$cos(\\beta)$"} />.
                {"\n"} Soit :
            </p>
            <MathJaxDisplay toShow={gen4} demo />
            <p>Cette formule a été vue dans le chapitre sur <a href="/cours/la-trigonometrie" target="_blank">la trigonométrie</a>, c'est la <MathJaxInline toShow={"$(1)$"} /></p>
            <p>Et cette formule ne peut être vraie que si le triangle est rectangle.</p>
            <p>Si l'on reprend la formule <MathJaxInline toShow={"$(7)$"} />, on trouve aussi : </p>
            <MathJaxDisplay toShow={gen5} demo />
            <p>Donc l'angle droit ne peut être qu'entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />.</p>
            <p>Donc si dans un triangle formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} />, <MathJaxInline toShow={"$a^2 + b^2 = c^2$"} /> alors le triangle est rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />. </p>
        </>
    );

}

export default DemonstrationDeLaReciproque;