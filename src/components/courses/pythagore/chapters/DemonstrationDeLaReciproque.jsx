import React from 'react';

import ImageZoom from '../../ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import alKashi from '../../shapes/assets/alKashi.png';
import pythagoreReciproqueDemo from '../assets/pythagoreReciproqueDemo.png';

const DemonstrationDeLaReciproque = () => {

    var gen = "\\(a^2 + b^2 = c^2\\)";
    var alKashi1 = "\\(a^2 + b^2 -2ab.cos(\\gamma) = c^2\\)";
    var alKashi2 = "\\(2ab.cos(\\gamma) = 0\\)";
    var gamma = "\\(\\gamma = \\frac{\\pi}{2}\\)";

    return (
        <> 
            <p>Afin de prouver la réciproque du théorème, ik faut pouvoir prouver que dans un triangle formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} />, si <MathJaxInline toShow={"$a^2 + b^2 = c^2$"} /> alors ce triangle est rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />.</p>    
            <p>Le théorème d'Al-Kashi, qui est le théorème de Pythagore appliqué à un triangle quelconque, nous dit que :</p>
            <MathJaxDisplay toShow={alKashi1} />
            <ImageZoom src={alKashi} name="Théorème d'Al-Kashi" n={4} />
            <p>Étant donnée que notre hypothèse de base est que :</p>
            <MathJaxDisplay toShow={gen} />
            <p>Cela nous amène à voir que : </p>
            <MathJaxDisplay toShow={alKashi2} />  
            <p>Soit que </p>
            <MathJaxDisplay toShow={gamma} />
            <p>Dans notre cas, cela ressemble plus à la figure 5. </p>
            <ImageZoom src={pythagoreReciproqueDemo} name="Théorème d'Al-Kashi dans notre cas" n={5} />
            <p>
                Si <MathJaxInline toShow={"$\\gamma = \\frac{\\pi}{2}$"} /> (ou 90°), alors l'angle <MathJaxInline toShow={"$\\gamma$"} /> entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> est un angle droit.
                {"\n"}Donc le triangle formé par <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} /> est bien rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />.
            </p>
        </>
    );

}

export default DemonstrationDeLaReciproque;