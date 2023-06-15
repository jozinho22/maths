import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../ImageZoom';

import derivativeSquareFunctionSensVar from '../assets/derivativeSquareFunctionSensVar.png';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../CoursesConstants';

const SensDeVariations = () => {

    var n = 0;

    return  <>
                <p>La dérivée nous sert à calculer le sens de variations de fonctions.</p>
                <p>Reprenons notre exemple de tout à l'heure, la fonction <MathJaxInline toShow={"$ f(x) = x^2 $"} /> et observons ses tangentes issues de la dérivée pour <MathJaxInline toShow={"$ x = -1 $"} />, <MathJaxInline toShow={"$ x = 0 $"} /> et <MathJaxInline toShow={"$ x = 1 $"} />.</p>
                <ImageZoom src={derivativeSquareFunctionSensVar} name="Variations de la fonction carrée" n={++n} />
                <p>On voit que le nombre dérivée en un point nous indique le sens de variation de la fonction.</p>
                
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 1 : \\a < 0}$"} /></p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> est décroissante.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 2 : \\a = 0}$"} /></p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> admet un point d'inflexion.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 3 : \\a > 0}$"} /></p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> est croissante.</p>
                
                {/* <p className="Title1">a) La fonction carrée</p> */}
                
            </>
}

export default SensDeVariations;