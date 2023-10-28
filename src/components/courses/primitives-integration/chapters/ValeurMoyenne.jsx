import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import Title1 from '../../helpers/Title1';

import integrationPositivite from '../assets/integration-positivite.png';

const ValeurMoyenne = () => {

    var n = 0;

    var mMinequ = "\\(  m \\leqslant f(x) \\leqslant M \\)";
    var mMinequ2 = "\\( \\int_a^b m.dt \\leqslant \\int_a^b f(t).dt \\leqslant \\int_a^b M.dt \\)";
    var mMinequ3 = "\\( [mt]_a^b \\leqslant \\int_a^b f(t).dt \\leqslant [Mt]_a^b \\)";
    var mMinequ4 = "\\( m(b-a) \\leqslant \\int_a^b f(t).dt \\leqslant M(b-a) \\)";

    var meanValue = "\\( \\mu = \\frac{1}{b-a}\\int_a^b f(t).dt \\)";
    var meanValueInequ = "\\( m \\leqslant \\mu \\leqslant M\\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ f, g $"} /> deux fonctions continues sur un intervalle <MathJaxInline toShow={"$ I = [a, b] \\subset \\mathbb{R} $"} /> et <MathJaxInline toShow={"$ (a, b) \\in I^2 $"} /> deux réels tels que  <MathJaxInline toShow={"$ a < b $"} />.</p>
                <p>Sur la figure ci-dessous, on a noté <MathJaxInline toShow={"$ m $"} /> et <MathJaxInline toShow={"$ M $"} /> les valeurs minimales et maximales de <MathJaxInline toShow={"$ f $"} /> sur <MathJaxInline toShow={"$ [a, b] $"} />.</p>
                <ImageZoom src={integrationPositivite} name="Calcul d'intégrale sur une fonction à valeurs négatives et positives" n={++n} />
                <p><MathJaxInline toShow={"$ \\forall x \\in [a,b] $"} />,</p>
                <MathJaxDisplay toShow={mMinequ} demo />  
                <p>Grâce  à la croissance de l'intégrale, </p>
                <MathJaxDisplay toShow={mMinequ2} demo />  
                <MathJaxDisplay toShow={mMinequ3} demo />              
                <Container className="Focus">
                     <MathJaxDisplay toShow={mMinequ4} />  
                </Container> 

                <Title1 title={"Valeur moyenne"} />
                <p>On appelle valeur moyenne de <MathJaxInline toShow={"$ f $"} /> sur <MathJaxInline toShow={"$ [a, b] $"} /> le nombre :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={meanValue} />  
                </Container> 
                <p>Ainsi, on a l'inégalite suivante :</p> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={meanValueInequ} />  
                </Container> 
            </>
}

export default ValeurMoyenne;