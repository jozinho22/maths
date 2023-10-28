import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import useNewtonSMethodComputation from '../helpers/useNewtonSMethodComputation';
import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';

const MethodeDeNewtonExemple = () => {

    var xSquareRoot2 = "\\( x = \\sqrt{2} \\)";
    var xSquareRoot22 = "\\( \\Longleftrightarrow x^2 = 2 \\)";
    var xSquareRoot23 = "\\( \\Longleftrightarrow x^2 - 2 = 0 \\)";

    var f = "\\( f(x) = x^2 - 2\\)";

    var newtonSequence = "\\( a_{n + 1} = a_n - \\frac{f(a_n)}{f'(a_n)} \\)";
    var xSquareRoot2Functions = "\\( \\Biggl\\{ \\begin{gather*}  f(x) = x^2 - 2 \\\\ \\enspace  f'(x) = 2x \\end{gather*} \\)";
  
    var newtonSequenceSquareRoot2 = "\\( a_{n + 1} = a_n - \\frac{a_n^2 - 2}{2a_n} \\)";

    return  <>
                <p>
                    Nous allons tenter de chercher une valeur approchée de <MathJaxInline toShow={"$ \\sqrt{2} $"} /> par cette méthode.
                </p>
                <p>Soit <MathJaxInline toShow={"$ f $"} /> une fonction telle que <MathJaxInline toShow={"$ x =\\sqrt{2} $"} /> soit solution de <MathJaxInline toShow={"$ f(x) =0 $"} /> .</p>
                <p>Partons de cette hypothèse et cherchons cette fonction.</p>
                <MathJaxDisplay toShow={xSquareRoot2} demo /> 
                <MathJaxDisplay toShow={xSquareRoot22} demo /> 
                <MathJaxDisplay toShow={xSquareRoot23} demo /> 

                <p>Nous allons alors étudier la fonction <MathJaxInline toShow={"$ f $"} /> définie par : </p>
                <MathJaxDisplay toShow={f} demo />
                <p>Et ainsi tenter de voir lorsque celle-ci s'annule.</p> 
                <p>Nous sommes bien dans le cas d'une fonction convexe et strictement croissante, nous pouvons alors appliquer la méthode.</p>
                <p>Au chapitre précédent sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/methode-de-newton`} external >la présentation de la méthode</Link>, nous avons vu que ce nombre peut être calculé sous la forme d'une suite récurrente telle que : </p>
                <MathJaxDisplay toShow={newtonSequence} demo /> 
                <p>On a pour hypothèse que : </p>
                <MathJaxDisplay toShow={xSquareRoot2Functions} demo />
                <p>Alors, en remplaçant on a : </p> 
                <MathJaxDisplay toShow={newtonSequenceSquareRoot2} demo />
                <p>Voici le résultat de la computation avec différentes valeur pour <MathJaxInline toShow={"$ a_0 $"} /></p>
                <GenericMathsNiceTable tableValues={useNewtonSMethodComputation()} />
            </>
}

export default MethodeDeNewtonExemple;