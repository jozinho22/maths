import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';

import CoursesConstants from '../../helpers/CoursesConstants';
import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauDeSignesDuSecondDegreExempleValues from '../helpers/useTableauDeSignesDuSecondDegreExempleValues';
import useTableauDeVariationsDuSecondDegreExempleValues from '../helpers/useTableauDeVariationsDuSecondDegreExempleValues';
import useTableauDeSignesDuSecondDegreGeneriqueValues from '../helpers/useTableauDeSignesDuSecondDegreGeneriqueValues';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import useTableauDeVariationsDuSecondDegreGeneriqueValues from '../helpers/useTableauDeVariationsDuSecondDegreGeneriqueValues';

const TableauxDeSignesEtDeVariations = () => {

     var equSecondDeg = "\\(f(x) = 2x^2 -3x + 1 \\)";
     var det = "\\( \\Delta = b^2 - 4c\\)";
     var det2 = "\\( \\Delta = (-3)^2 - 4 \\times 2\\times 1 \\)";
     var det3 = "\\( \\Delta = 1 \\)";

     var x1 = "\\( x_1 = \\frac{ -b - \\sqrt{\\Delta}}{2a} \\)";
     var x1_2 = "\\( x_1 = \\frac{ 3 - \\sqrt{1}} {4} = \\frac{2}{4} = \\frac{1}{2} \\)";

     var x2 = "\\( x_2 = \\frac{ -b + \\sqrt{\\Delta}} {2a} \\)";
     var x2_2 = "\\( x_2 = \\frac{ 3 + \\sqrt{1}}{4} = \\frac{4}{4} = 1\\)";

     var fact = "\\(f(x) = a (x - x_1)(x - x_2) \\)";
     var fact2 = "\\(f(x) = 2 \\left(x - \\frac{1}{2}\\right)(x - 1 ) \\)";

     var deriveeF = "\\(f'(x) =  (2x^2 -3x + 1)' \\)";
     var deriveeF2 = "\\(f'(x) =  4x - 3 \\)";

    var cancelDeriveeF = "\\(f'(x) =  0 \\)";
    var cancelDeriveeF2 = "\\(4x - 3 =  0 \\Leftrightarrow x = \\frac{3}{4} \\)";


    return  <>
                <Title1 title={"a) Exemple de fonction"} />
                <p>Prenons une fonction au hasard du second degré avec <MathJaxInline toShow={"$ a, b, c \\neq 0 $"} />. </p>
                <MathJaxDisplay toShow={equSecondDeg} demo/>
                <p>
                    Tentons de résoudre <MathJaxInline toShow={"$ f(x) = 0 $"} /> pour trouver ses racines.
                </p>

                <Title2 title={"Calcul du déterminant"} />
                <MathJaxDisplay toShow={det} demo/>
                <MathJaxDisplay toShow={det2} demo/>
                <MathJaxDisplay toShow={det3} demo/>
                <p><MathJaxInline toShow={"$  \\Delta$"} /> est positif donc l'équation admet deux racines distinctes <MathJaxInline toShow={"$ x_1 $"} /> et <MathJaxInline toShow={"$ x_2 $"} /> :</p>
                <p>Pour <MathJaxInline toShow={"$ x_1 $"} /> :</p>
                <MathJaxDisplay toShow={x1} demo/>
                <MathJaxDisplay toShow={x1_2} demo/>
                <p>Pour <MathJaxInline toShow={"$ x_2 $"} /> :</p>
                <MathJaxDisplay toShow={x2} demo/>
                <MathJaxDisplay toShow={x2_2} demo/>           

                <Title2 title={"Écriture sous forme factorisée"} />
                <p>On peut alors écrire notre équation sous la forme factorisée : </p> 
                <MathJaxDisplay toShow={fact} demo/> 
                <MathJaxDisplay toShow={fact2} demo/>   

                <p>C'est cette forme qui va nous servir pour faire le tableau de signe :</p>         
                
                <Title2 title={"Tableau de signes"} />
                <GenericMathsNiceTable tableValues={useTableauDeSignesDuSecondDegreExempleValues()} />
                
                <p>De plus, on a vu dans <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/variations-d-une-fonction`} external>le chapitre sur le calcul des variations d'une fonction</Link> qu'on peut trouver ses variations grâce à la dérivée.</p>
                <MathJaxDisplay toShow={deriveeF} demo/> 
                <MathJaxDisplay toShow={deriveeF2} demo/> 
                <p>Voici à quel moment la dérivée s'annule :</p>
                <MathJaxDisplay toShow={cancelDeriveeF} demo/> 
                <MathJaxDisplay toShow={cancelDeriveeF2} demo/> 

                <p>Étudions le signe de cette dérivée, puis trouvons les variations de la fonction.</p> 
                
                <Title2 title={"Tableau de variations"} />
                <GenericMathsNiceTable tableValues={useTableauDeVariationsDuSecondDegreExempleValues()} />

                <Title1 title={"b) Cas générique"} />
                
                <Title2 title={"Tableau de signes"} />
                <GenericMathsNiceTable tableValues={useTableauDeSignesDuSecondDegreGeneriqueValues()} />

                <Title2 title={"Tableau de variations"} />
                <GenericMathsNiceTable tableValues={useTableauDeVariationsDuSecondDegreGeneriqueValues()} />
                    
            </>
}

export default TableauxDeSignesEtDeVariations;