import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';

import CoursesConstants from '../../helpers/CoursesConstants';
import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauDeSignesDuSecondDegreExempleValues from '../helpers/useTableauDeSignesDuSecondDegreExempleValues';
import useTableauDeVariationsDuSecondDegreExempleValues from '../helpers/useTableauDeVariationsDuSecondDegreExempleValues';
import Title1 from '../../helpers/Title1';

const TableauxDeSignesEtDeVariationsExemple = () => {

     var equSecondDeg = "\\(f(x) = 2x^2 -3x + 1 \\)";

     var s = "\\( S = \\left\\{x_1 = \\frac{1}{2}, \\enspace x_2 = 1  \\right\\} \\)";

     var fact = "\\(f(x) = a (x - x_1)(x - x_2) \\)";
     var fact2 = "\\(f(x) = 2 \\left(x - \\frac{1}{2}\\right)(x - 1 ) \\)";

     var deriveeF = "\\(f'(x) =  (2x^2 -3x + 1)' = 4x - 3 \\)";

    var cancelDeriveeF = "\\(f'(x) =  0 \\Longleftrightarrow 4x - 3 =  0 \\Longleftrightarrow x = \\frac{3}{4} \\)";

    return  <>
                <p>Prenons une fonction au hasard du second degré :</p>
                <MathJaxDisplay toShow={equSecondDeg} demo/>
                <p>
                    Tentons de résoudre <MathJaxInline toShow={"$ f(x) = 0 $"} /> pour trouver ses racines.
                </p>  

                <p>Après calcul, on trouve ces deux racines : </p>    
                <MathJaxDisplay toShow={s} demo/> 
                <Title1 title={"Écriture sous forme factorisée"} />
                <p>On peut alors écrire notre équation sous la forme factorisée : </p> 
                <MathJaxDisplay toShow={fact} demo/> 
                <MathJaxDisplay toShow={fact2} demo/>   

                <p>C'est cette forme qui va nous servir pour faire le tableau de signe.</p>         
                
                <Title1 title={"Tableau de signes"} />
                <GenericMathsNiceTable tableValues={useTableauDeSignesDuSecondDegreExempleValues()} />
                
                <p>De plus, on a vu dans <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/variations-d-une-fonction`} external>le chapitre sur le calcul des variations d'une fonction</Link> qu'on peut trouver ses variations grâce à la dérivée.</p>
                <MathJaxDisplay toShow={deriveeF} demo/> 
                <p>Voici à quel moment la dérivée s'annule :</p>
                <MathJaxDisplay toShow={cancelDeriveeF} demo/> 

                <p>Étudions le signe de cette dérivée, puis trouvons les variations de la fonction.</p> 
                
                <Title1 title={"Tableau de variations"} />
                <GenericMathsNiceTable tableValues={useTableauDeVariationsDuSecondDegreExempleValues()} />             
            </>
}

export default TableauxDeSignesEtDeVariationsExemple;