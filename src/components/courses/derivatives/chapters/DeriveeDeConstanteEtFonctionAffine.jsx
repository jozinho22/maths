import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';

const DeriveeDeConstanteEtFonctionAffine = () => {

    var fCte = "\\( \\forall x \\in \\mathbb{R}, f(x)= k, \\enspace avec \\enspace k \\in \\mathbb{R}\\)";
    var fCtePrim = "\\((k)' =  lim_{ h \\to 0} \\enspace \\frac{k - k}{h }\\)";
    var fCtePrim2 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{0}{h }\\)";
    var fCtePrim3 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace 0\\)";
    var fCtePrim4 = "\\( (k)' = 0 \\)";

    var fAff = "\\( \\forall x \\in \\mathbb{R}, f(x)= ax + b, \\enspace avec  \\enspace a, b \\in \\mathbb{R}\\)";
    var fAffPrim = "\\(( ax + b)' =  lim_{ h \\to 0} \\enspace \\frac{a(x + h) + b - (ax + b)}{h }\\)";
    var fAffPrim2 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{ax + ah + b - ax - b}{h }\\)";
    var fAffPrim3 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{ah}{h }\\)";
    var fAffPrim4 = "\\( ( ax + b)' = lim_{ h \\to 0} \\enspace a \\)";

    return  <>
                <Title1 title={"La fonction constante"} />
                <p>
                    Une fonction constante est définie de la manière suivante :
                </p>
                <MathJaxDisplay toShow={fCte} demo />  
                <p>
                   Calculons sa dérivée :
                </p>

                <p>Avec la formule suivante vue plus haut, on a :</p>
                <MathJaxDisplay toShow={fCtePrim} demo />  
                <MathJaxDisplay toShow={fCtePrim2} demo />  
                <MathJaxDisplay toShow={fCtePrim3} demo /> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={fCtePrim4} />  
                </Container> 
                <p>Ici, il n'y a pas de forme indéterminée "<MathJaxInline toShow={"$ \\frac{0}{0} $"}/>" car seule le dénominateur a son terme qui tend vers <MathJaxInline toShow="$0$" />, le dénominateur lui reste fixe. </p>
                <p>On a bien <MathJaxInline toShow="$ 0 $" /> qui est divisé par un nombre qui conceptuellement s'approche de <MathJaxInline toShow="$ 0$" />, c'est donc égal à <MathJaxInline toShow="$ 0 $" />.</p>
                
                <Title1 title={"La fonction affine"} />
                <MathJaxDisplay toShow={fAff} demo /> 
                <p>
                   Calculons sa dérivée :
                </p>
                <MathJaxDisplay toShow={fAffPrim} demo /> 
                <MathJaxDisplay toShow={fAffPrim2} demo /> 
                <MathJaxDisplay toShow={fAffPrim3} demo /> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={fAffPrim4} />  
                </Container>
            </>
}

export default DeriveeDeConstanteEtFonctionAffine;