import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import Title1 from '../../helpers/Title1';
import derivativeSquareFunctionSensVar from '../assets/derivativeSquareFunctionSensVar.png';

import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauDeVariationsFonctionCarreeValues from '../helpers/useTableauDeVariationsFonctionCarreeValues';
import useTableauDeVariationsGenericValues from '../helpers/useTableauDeVariationsGenericValues';
import Aside from '../../helpers/Aside';

const VariationsDuneFonction = () => {

    var n = 0;

    var xSquaredPrim = "\\( (x^2 + 1)' = 2x\\)";

    return  <>
                <p>La dérivée nous sert notamment à étudier les variations d'une fonction.</p>
                <p>Nous allons prendre, comme fonction d'étude pour ce chapitre, la fonction <MathJaxInline toShow={"$ f(x): x \\longmapsto x^2 + 1 $"} />, définie pour tout <MathJaxInline toShow={"$x \\in \\mathbb{R}$"} />. </p>
                <ImageZoom src={derivativeSquareFunctionSensVar} name="Variations de la fonction f(x) = x² + 1" n={++n} />
                <p>Par simplicité, nous allons étudier trois points : <MathJaxInline toShow={"$x = -1$"} />, <MathJaxInline toShow={"$x = 0$"} /> et <MathJaxInline toShow={"$x = 1$"} />.</p>
                <p>Obtenons tout d'abord une forme générale de sa dérivée.</p>
                <MathJaxDisplay toShow={xSquaredPrim} demo /> 
                <p>On voit sur la figure précédente que le nombre dérivée en un point nous indique le sens de variation de la fonction.</p>
                
                <p>Trois cas se présentent :</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 1 :} \\enspace f'(-1) < 0$"} /> </p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> est décroissante.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 2 :} \\enspace  f'(0) = 0$"} /> et <MathJaxInline toShow={"$f'$"} /> change de signe </p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> admet un extremum local.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 3 :} \\enspace  f'(1) > 0$"} /> </p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> est croissante.</p>

                <Aside>
                    <p>Attention, dans ce cas précis, la courbe de <MathJaxInline toShow={"$ f $"} /> admet un minimum local uniquement parce que <MathJaxInline toShow={"$ f'$"} /> change de signe entre avant et après ce point.</p>
                </Aside>
                
                <p>Dans notre cas, voici son tableau de variation :</p>
                <GenericMathsNiceTable tableValues={useTableauDeVariationsFonctionCarreeValues()} />

                <Title1 title={"Cas générique"} />
                <p>Voici le cas générique avec par exemple deux racines (c'est-à-dire deux valeurs de <MathJaxInline toShow={"$x$"} /> pour lesquelles la fonction dérivée <MathJaxInline toShow={"$f'$"} /> s'annule) : </p>
                <GenericMathsNiceTable tableValues={useTableauDeVariationsGenericValues()} />
                <p>Concernant les extremums locaux en un point <MathJaxInline toShow={"$x = a$"} />, deux cas se présentent.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 1 :}$"} /> <MathJaxInline toShow={"$f' < 0$"} /> avant et <MathJaxInline toShow={"$f' > 0$"} /> après </p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> admet un minimum local.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 2 :}$"} /> <MathJaxInline toShow={"$f' > 0$"} /> avant et <MathJaxInline toShow={"$f' < 0$"} /> après  </p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> admet un maximum local.</p>
            </>
}

export default VariationsDuneFonction;