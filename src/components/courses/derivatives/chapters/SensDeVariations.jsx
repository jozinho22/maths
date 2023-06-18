import React from 'react';

import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import Title1 from '../../helpers/Title1';
import derivativeSquareFunctionSensVar from '../assets/derivativeSquareFunctionSensVar.png';

import TableauDeSignesEtDeVariationsTable from '../../helpers/TableauDeSignesEtDeVariationsTable';
import useTableauDeVariationsFonctionCarreeValues from '../helpers/useTableauDeVariationsFonctionCarreeValues';
import useTableauDeVariationsGenericValues from '../helpers/useTableauDeVariationsGenericValues';

const SensDeVariations = () => {

    var n = 0;

    return  <>
                <p>La dérivée nous sert à calculer le sens de variations de fonctions.</p>
                <p>Reprenons notre exemple de tout à l'heure, la fonction <MathJaxInline toShow={"$ f(x) = x^2 $"} /> et observons ses tangentes issues de la dérivée pour <MathJaxInline toShow={"$ x = -1 $"} />, <MathJaxInline toShow={"$ x = 0 $"} /> et <MathJaxInline toShow={"$ x = 1 $"} />.</p>
                <ImageZoom src={derivativeSquareFunctionSensVar} name="Variations de la fonction carrée" n={++n} />
                <p>On voit que le nombre dérivée en un point nous indique le sens de variation de la fonction.</p>
                
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 1 : a < 0}$"} /></p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> est décroissante.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 2 : a = 0}$"} /></p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> admet un point d'inflexion.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 3 : a > 0}$"} /></p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> est croissante.</p>
                
                
                <p>Dans notre cas, voici son tableau de variation :</p>
                <TableauDeSignesEtDeVariationsTable tableValues={useTableauDeVariationsFonctionCarreeValues()} />

                <Title1 title={"Cas générique"} />
                <p>Voici le cas générique avec par exemple deux racines (c'est-à-dire deux valeurs de <MathJaxInline toShow={"$x$"} /> pour lesquelles la fonction dérivée <MathJaxInline toShow={"$f'$"} /> s'annule) : </p>
                <TableauDeSignesEtDeVariationsTable tableValues={useTableauDeVariationsGenericValues()} />
            </>
}

export default SensDeVariations;