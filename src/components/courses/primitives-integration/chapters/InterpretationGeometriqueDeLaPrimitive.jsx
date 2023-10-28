import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import integration from '../assets/integration.png';
import integrationBis from '../assets/integrationBis.png';

const InterpretationGeometriqueDeLaPrimitive = () => {

    var n = 0;

    var fSupO = "\\( \\forall x \\in I, f(x) \\geqslant 0 \\)";

    var A1 = "\\( A_1 = A(x_0) \\)";
    var A2 = "\\( A_2 = A(x_0 + h) \\)";
    var A3 = "\\( A_3 = A_2 - A_1 = A(x_0 + h) - A(x_0) \\)";

    return  <>
                <p>
                    Soit <MathJaxInline toShow={"$ f $"} /> une fonction continue sur <MathJaxInline toShow={"$ I = [0, x_0 + h] $"} /> avec :
                </p>
                <MathJaxDisplay toShow={fSupO} demo /> 
                <ImageZoom src={integration} name="Deux surfaces au dessous de la courbe d'une fonction positive" n={++n} />
                <p><MathJaxInline toShow={"$ A_1 $"} /> est la surface balayée par tous les points entre l'axe des abscisses et la courbe <MathJaxInline toShow={"$ \\mathcal{C}_f $"} /> pour tout <MathJaxInline toShow={"$ 0 \\leqslant x \\leqslant x_0 $"} />.</p>
                <p><MathJaxInline toShow={"$ A_2 $"} /> est la surface balayée par tous les points entre l'axe des abscisses et la courbe <MathJaxInline toShow={"$ \\mathcal{C}_f $"} /> pour tout <MathJaxInline toShow={"$ 0 \\leqslant x \\leqslant x_0 + h $"} />.</p>
                <p>Nous allons exprimer <MathJaxInline toShow={"$ A_1 $"} /> et <MathJaxInline toShow={"$ A_2 $"} /> comme des fonctions surface, dépendantes de <MathJaxInline toShow={"$ x $"} />.</p>
                <p>On a alors les relations suivantes :</p>
                <MathJaxDisplay toShow={A1} demo /> 
                <MathJaxDisplay toShow={A2} demo /> 
                <p>On peut alors exprimer une troisième aire, différence des deux premières :</p>
                <MathJaxDisplay toShow={A3} demo /> 
                <ImageZoom src={integrationBis} name="Surface au dessous de la courbe entre deux points" n={++n} />
            </>
}

export default InterpretationGeometriqueDeLaPrimitive;