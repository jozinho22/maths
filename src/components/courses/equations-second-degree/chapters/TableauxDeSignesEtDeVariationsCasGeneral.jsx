import React from 'react';

import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';

import useTableauDeSignesDuSecondDegreGeneriqueValues from '../helpers/useTableauDeSignesDuSecondDegreGeneriqueValues';
import Title1 from '../../helpers/Title1';
import useTableauDeVariationsDuSecondDegreGeneriqueValues from '../helpers/useTableauDeVariationsDuSecondDegreGeneriqueValues';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const TableauxDeSignesEtDeVariationsCasGeneral = () => {

    var equ = "\\( f(x) = ax^2 + bx + c \\enspace (avec \\enspace a \\in \\mathbb{R^*}, \\enspace (b, c) \\in \\mathbb{R}^2) \\)";

    var equFact = "\\( f(x) = a(x - x_1)(x-x_2) \\)";
    
    return  <>  
                <p>Soit une équation du second degré : </p>  
                <MathJaxDisplay toShow={equ} demo />            
                <p>Après calcul des racines, on a une expression factorisée de la forme : </p>
                <MathJaxDisplay toShow={equFact} demo />    

                <Title1 title={"Tableau de signes"} />
                <GenericMathsNiceTable tableValues={useTableauDeSignesDuSecondDegreGeneriqueValues()} />

                <Title1 title={"Tableau de variations"} />
                <GenericMathsNiceTable tableValues={useTableauDeVariationsDuSecondDegreGeneriqueValues()} />       
            </>
}

export default TableauxDeSignesEtDeVariationsCasGeneral;