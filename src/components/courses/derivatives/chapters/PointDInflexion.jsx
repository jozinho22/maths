import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import Title1 from '../../helpers/Title1';
import derivativeInflexionPoint from '../assets/derivativeInflexionPoint.png';

const PointDInflexion = () => {

    var n = 0;

    var xCubeDerivatives = "\\( \\Biggl\\{ \\begin{align*} g(x) = x^3 \\\\ \\enspace g'(x) = 3x^2 \\\\ g''(x) = 6x \\end{align*} \\)";

    return  <>
                <p>Le point d'inflexion est le cas où la fonction <MathJaxInline toShow={"$ f $"} /> va changer de convexité.</p>
                <p>Prenons le cas de la fonction <MathJaxInline toShow={"$ f:x \\longmapsto x^3 + 1$"} />.</p>
                <ImageZoom src={derivativeInflexionPoint} name="Point d'inflexion de la fonction cube" n={++n} />
                <p>On voit qu'au point <MathJaxInline toShow={"$ x = 0 $"} />, la tangente à la courbe est obligée de traverser la courbe de <MathJaxInline toShow={"$ f $"} /> pour passer de au-dessus à en-dessous.</p>
                <p>De même, il est impossible de tirer une corde entre avant et après ce point. </p>
                <p>On a alors :</p>
                <MathJaxDisplay toShow={xCubeDerivatives} demo />
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 1 :} $"} /> pour <MathJaxInline toShow={"$x < 0$"} /></p>
                <p>La dérivée seconde <MathJaxInline toShow={"$g'' < 0$"} />, la dérivée <MathJaxInline toShow={"$g'$"} /> est décroissante, la fonction est concave.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 2 :} $"} /> pour <MathJaxInline toShow={"$x = 0$"} /></p>
                <p>La dérivée seconde <MathJaxInline toShow={"$g'' = 0$"} />, la dérivée <MathJaxInline toShow={"$g' $"} /> est plate, la fonction admet un point d'inflexion car <MathJaxInline toShow={"$g''$"} /> change de signe avant et après ce point.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 3 :} $"} /> pour <MathJaxInline toShow={"$x > 0$"} /></p>
                <p>La dérivée seconde <MathJaxInline toShow={"$g'' > 0$"} />, la dérivée <MathJaxInline toShow={"$g'$"} /> est croissante, la fonction est convexe.</p>
            </>
}

export default PointDInflexion;