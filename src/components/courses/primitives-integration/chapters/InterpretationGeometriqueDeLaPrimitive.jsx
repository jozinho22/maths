import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import integration from '../assets/integration.png';
import integration2 from '../assets/integration2.png';

const InterpretationGeometriqueDeLaPrimitive = () => {

    var n = 0;

    var fSupO = "\\( \\forall x \\in I, f(x) \\geq 0 \\)";

    var A1 = "\\( A_1 = A(x_0) \\)";
    var A2 = "\\( A_2 = A(x_0 + h) - A(x_0)\\)";
    var mM = "\\(  \\forall x \\in [x_0, x_0 + h], \\enspace m \\leq f(x) \\leq M\\)";
    var mfh = "\\(   m = min[f(x_0), f(x_0 + h)] \\)";
    var Mfh = "\\(  M = max[f(x_0), f(x_0 + h)] \\)";

    var reactA2Relation = "\\(  m.h \\leq A_2 \\leq M.h \\)";
    var mMtauxVar = "\\(  m \\leq \\frac{A(x_0 + h) - A(x_0)}{h} \\leq M \\)";
    var mMtauxVar2 = "\\( min(f(x_0), f(x_0 + h)) \\leq \\frac{A(x_0 + h) - A(x_0)}{h} \\leq max[f(x_0), f(x_0 + h)]  \\)";
    var limitsTauxVar = "\\(  lim_{h \\to 0} \\enspace  min[f(x_0), f(x_0 + h)] \\leq lim_{h \\to 0} \\enspace  \\left( \\frac{A(x_0 + h) - A(x_0)}{h} \\right) \\leq lim_{h \\to 0} \\enspace  max[f(x_0), f(x_0 + h)] \\)";
    var limitsTauxVarResult = "\\(  f(x_0) \\leq A'(x_0) \\leq f(x_0) \\)";
    var gendarmesEquiv = "\\(  f(x) = A'(x)\\)";
    var fEquiv = "\\(  F(x) =  A(x) \\)";

    var A2bis = "\\(  A_2(x_0) = F(x_0 + h) - F(x_0) \\)";
    var areaAB = "\\(  A_{(a, b)} = F(b) - F(a) \\)";
    var intAB = "\\(  \\int_a^b f(t)dt = F(b) - F(a) \\)";

    return  <>
                <p>
                    Soit <MathJaxInline toShow={"$ f $"} /> une fonction continue sur <MathJaxInline toShow={"$ I = [0, x_0 + h] $"} /> avec :
                </p>
                <MathJaxDisplay toShow={fSupO} demo /> 
                <ImageZoom src={integration} name="Deux surfaces au dessous de la courbe d'une fonction positive" n={++n} />
                <p><MathJaxInline toShow={"$ A_1 $"} /> est la surface balayée par tous les points entre l'axe des abscisses et la courbe <MathJaxInline toShow={"$ \\mathcal{C}_f $"} /> pour tout <MathJaxInline toShow={"$ 0 \\leq x \\leq x_0 $"} />.</p>
                <p><MathJaxInline toShow={"$ A_2 $"} /> est la surface balayée par tous les points entre l'axe des abscisses et la courbe <MathJaxInline toShow={"$ \\mathcal{C}_f $"} /> pour tout <MathJaxInline toShow={"$ x_0 \\leq x \\leq x_0 + h $"} />.</p>
                <p>Nous allons exprimer <MathJaxInline toShow={"$ A_1 $"} /> et <MathJaxInline toShow={"$ A_2 $"} /> comme des fonctions surface, dépendantes de <MathJaxInline toShow={"$ x $"} />.</p>
                <p>On a alors les relations suivantes :</p>
                <MathJaxDisplay toShow={A1} demo /> 
                <MathJaxDisplay toShow={A2} demo /> 

                <p>Faisons à présent un zoom entre les points <MathJaxInline toShow={"$ x_0 $"} /> et <MathJaxInline toShow={"$ x_0 + h $"} />.</p>
                <ImageZoom src={integration2} name="Zoom entre les deux points" n={++n} />
                <p>Appelons <MathJaxInline toShow={"$ m $"} /> et <MathJaxInline toShow={"$ M $"} /> les minimum et maximum de <MathJaxInline toShow={"$ f $"} /> sur cet intervalle réduit.</p>
                <p>On remarque alors la relation suivante :</p>
                <MathJaxDisplay toShow={mM} demo /> 
                <p>Pour un <MathJaxInline toShow={"$ x_0 $"} /> fixé, les points <MathJaxInline toShow={"$ m $"} /> et <MathJaxInline toShow={"$ M $"} /> sont alors deux fonctions dépendantes de <MathJaxInline toShow={"$ h $"} />. </p>
                <p>On réécrit alors <MathJaxInline toShow={"$ m $"} /> et <MathJaxInline toShow={"$ M $"} /> de cette manière :</p>
                <MathJaxDisplay toShow={mfh} demo /> 
                <MathJaxDisplay toShow={Mfh} demo /> 
                <p>De plus, on peut écrire une relation entre les différents rectangles apparents et <MathJaxInline toShow={"$ A_2 $"} /> :</p>
                <MathJaxDisplay toShow={reactA2Relation} demo /> 
                <p>Comme on a pris <MathJaxInline toShow={"$ h > 0 $"} />, on peut diviser par <MathJaxInline toShow={"$ h $"} /> sans changer le sens de l'inéquation.</p>
                <p>On a : </p>
                <MathJaxDisplay toShow={mMtauxVar} demo /> 
                <MathJaxDisplay toShow={mMtauxVar2} demo /> 
                <p>Le membre central ressemble à un taux de variations. Observons ce qu'il se passe lorsque l'on fait tendre <MathJaxInline toShow={"$ h $"} /> vers <MathJaxInline toShow={"$ h $"} /> tous les membres.</p>
                <MathJaxDisplay toShow={limitsTauxVar} demo /> 
                <MathJaxDisplay toShow={limitsTauxVarResult} demo />
                <p>Grâce au théorème des gendarmes, il en résulte l'équivalence pout tout <MathJaxInline toShow={"$ x \\in I $"} />: </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={gendarmesEquiv} />  
                </Container>
                <p>On retrouve la définition d'une primitive, on en conclut alors que <MathJaxInline toShow={"$ A'$"} /> est une primitive de <MathJaxInline toShow={"$ f $"} />. </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={fEquiv} />  
                </Container>

                <p>Si nous souhaitons maintenant retrouver notre aire d'étude <MathJaxInline toShow={"$ A_2 $"} />, nous devons reprendre son expression plus haut.</p>
                <MathJaxDisplay toShow={A2bis} demo />
                <p>Nous avons montré que la valeur de l'aire située sous la courbe d'une fonction entre deux points <MathJaxInline toShow={"$ (a = x_0) $"} /> et <MathJaxInline toShow={"$ (b = x_0 + h) $"} /> s'écrit de la forme :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={areaAB} />  
                </Container>
                <p>On notera dès lors la valeur de cette surface entre <MathJaxInline toShow={"$ a $"} /> et <MathJaxInline toShow={"$ b $"} /> :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intAB} />  
                </Container>
                <p>On dira que l'on a intégré la fonction <MathJaxInline toShow={"$ f $"} /> entre les bornes <MathJaxInline toShow={"$ a $"} /> et <MathJaxInline toShow={"$ b $"} />.</p>
            </>
}

export default InterpretationGeometriqueDeLaPrimitive;