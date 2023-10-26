import React from 'react';

import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';

import useTableauDeSignesDuSecondDegreGeneriqueValues from '../helpers/useTableauDeSignesDuSecondDegreGeneriqueValues';
import Title1 from '../../helpers/Title1';
import useTableauDeVariationsDuSecondDegreGeneriqueValues from '../helpers/useTableauDeVariationsDuSecondDegreGeneriqueValues';

const TableauxDeSignesEtDeVariationsCasGeneral = () => {

    return  <>  
                <p>Soit une équation du second degré : <MathJaxInline toShow={"$f(x) = ax^2 + bx + c \\enspace (avec \\enspace a, b, c \\in \\mathbb{R}, \\enspace a \\neq 0)$"} />.</p>              
                <p>Après calcul des racines, on a une expression factorisée de la forme <MathJaxInline toShow={"$f(x) = a(x - x_1)(x-x_2)$"} />.</p>
                <Title1 title={"Tableau de signes"} />
                <GenericMathsNiceTable tableValues={useTableauDeSignesDuSecondDegreGeneriqueValues()} />

                <Title1 title={"Tableau de variations"} />
                <GenericMathsNiceTable tableValues={useTableauDeVariationsDuSecondDegreGeneriqueValues()} />       
            </>
}

export default TableauxDeSignesEtDeVariationsCasGeneral;