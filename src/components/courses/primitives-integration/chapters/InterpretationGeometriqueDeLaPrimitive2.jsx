import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';

import integration2 from '../assets/integration2.png';
import integration3 from '../assets/integration3.png';

const InterpretationGeometriqueDeLaPrimitive2 = () => {

    var n = 0;

    var mM = "\\(  \\forall x \\in [x_0, x_0 + h], \\enspace m \\leqslant f(x) \\leqslant M\\)";
    var mfh = "\\(   m = min[f(x_0), f(x_0 + h)] \\)";
    var Mfh = "\\(  M = max[f(x_0), f(x_0 + h)] \\)";

    var reactA2Relation = "\\(  m.h \\leqslant A_3 \\leqslant M.h \\)";
    var mMtauxVar = "\\(  m \\leqslant \\frac{A(x_0 + h) - A(x_0)}{h} \\leqslant M \\)";
    var mMtauxVar2 = "\\( min[f(x_0), f(x_0 + h)] \\leqslant \\frac{A(x_0 + h) - A(x_0)}{h} \\leqslant max[f(x_0), f(x_0 + h)]  \\)";
    var limitsTauxVar = "\\(  lim_{h \\to 0} \\enspace  min[f(x_0), f(x_0 + h)] \\leqslant lim_{h \\to 0} \\enspace  \\left( \\frac{A(x_0 + h) - A(x_0)}{h} \\right) \\leqslant lim_{h \\to 0} \\enspace  max[f(x_0), f(x_0 + h)] \\)";
    var limitsTauxVarResult = "\\(  f(x_0) \\leqslant A'(x_0) \\leqslant f(x_0) \\)";
    var gendarmesEquiv = "\\(  f(x_0) = A'(x_0)\\)";
    var gendarmesEquivGen = "\\(  f(x) = A'(x)\\)";

    var A3bis = "\\(  A_3(x_0) = A(x_0 + h) - A(x_0) \\)";
    var A3bis2 = "\\(  A_3(x_0) = F(x_0 + h) - F(x_0) \\)";
    var areaAB = "\\(  A_{(a, b)} = F(b) - F(a) \\)";
    var intAB = "\\(  \\int_a^b f(t)dt = F(b) - F(a) \\)";

    var A = "\\(  A(x) = \\int_a^x f(t)dt \\)";

    return  <>
                <p>Faisons à présent un zoom entre les points <MathJaxInline toShow={"$ x_0 $"} /> et <MathJaxInline toShow={"$ x_0 + h $"} />.</p>
                <ImageZoom src={integration2} name="Zoom entre les deux points" n={++n} />
                <p>Appelons <MathJaxInline toShow={"$ m $"} /> et <MathJaxInline toShow={"$ M $"} /> les minimum et maximum de <MathJaxInline toShow={"$ f $"} /> sur cet intervalle réduit.</p>
                <p>On remarque alors la relation suivante :</p>
                <MathJaxDisplay toShow={mM} demo /> 
                <p>Pour un <MathJaxInline toShow={"$ x_0 $"} /> fixé, les points <MathJaxInline toShow={"$ m $"} /> et <MathJaxInline toShow={"$ M $"} /> sont alors deux fonctions dépendantes de <MathJaxInline toShow={"$ h $"} />. </p>
                <p>On réécrit alors <MathJaxInline toShow={"$ m $"} /> et <MathJaxInline toShow={"$ M $"} /> de cette manière :</p>
                <MathJaxDisplay toShow={mfh} demo /> 
                <MathJaxDisplay toShow={Mfh} demo /> 
                <p>De plus, on peut écrire une relation entre les différents rectangles apparents et <MathJaxInline toShow={"$ A_3 $"} /> :</p>
                <MathJaxDisplay toShow={reactA2Relation} demo /> 
                <p>Comme on a pris <MathJaxInline toShow={"$ h > 0 $"} />, on peut diviser par <MathJaxInline toShow={"$ h $"} /> sans changer le sens de l'inéquation.</p>
                <p>On a : </p>
                <MathJaxDisplay toShow={mMtauxVar} demo /> 
                <MathJaxDisplay toShow={mMtauxVar2} demo /> 
                <p>Le membre central ressemble à un taux de variations. Observons ce qu'il se passe lorsque l'on fait tendre <MathJaxInline toShow={"$ h $"} /> vers <MathJaxInline toShow={"$ 0 $"} /> tous les membres.</p>
                <MathJaxDisplay toShow={limitsTauxVar} demo /> 
                <MathJaxDisplay toShow={limitsTauxVarResult} demo />
                <p>Grâce au théorème des gendarmes, on l'équivalence : </p>
                <MathJaxDisplay toShow={gendarmesEquiv} demo />
                <p>Il en résulte l'équivalence pout tout <MathJaxInline toShow={"$ x \\in I $"} /> :</p>  
                <MathJaxDisplay toShow={gendarmesEquivGen} demo />  
                <p>On en conclut alors que <MathJaxInline toShow={"$ A$"} /> est une primitive de <MathJaxInline toShow={"$ f $"} />, et que de ce fait : </p>
                <MathJaxDisplay toShow={A} demo />  
                <p><MathJaxInline toShow={"$ A$"} /> est la primitive de f qui s'annule en a.</p>
                
                <p>Si nous souhaitons maintenant retrouver notre aire d'étude <MathJaxInline toShow={"$ A_3 $"} />, nous devons reprendre son expression plus haut.</p>
                <MathJaxDisplay toShow={A3bis} demo />
                <p>Ce qui devient :</p>
                <MathJaxDisplay toShow={A3bis2} demo />
                <p>Nous avons montré que la valeur de l'aire située sous la courbe d'une fonction entre deux points <MathJaxInline toShow={"$ (a = x_0) $"} /> et <MathJaxInline toShow={"$ (b = x_0 + h) $"} /> est une expression de la forme :</p>
               <MathJaxDisplay toShow={areaAB} demo />  
                <p>On notera dès lors la valeur de cette surface entre <MathJaxInline toShow={"$ a $"} /> et <MathJaxInline toShow={"$ b $"} /> :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intAB} />  
                </Container>
                <ImageZoom src={integration3} name="Intégration d'une fonction entre deux bornes a et b" n={++n} />
                <p>On dira que l'on a intégré la fonction <MathJaxInline toShow={"$ f $"} /> entre les bornes <MathJaxInline toShow={"$ a $"} /> et <MathJaxInline toShow={"$ b $"} />.</p>
            </>
}

export default InterpretationGeometriqueDeLaPrimitive2;