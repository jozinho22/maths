import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

import circlePiCalculus2 from '../assets/circlePiCalculus2.png';
import ImageZoom from '../../helpers/ImageZoom';

const CalculDePi2 = () => {

    var n = 0;

    var pi8c = "\\( \\pi \\approx 8c \\)"
    var c = "\\( c^2 = \\left(\\frac{b}{2}\\right)^2 + c_0^2  \\)"
    var c2 = "\\( c^2 = \\frac{b^2}{4} + (1 -h_b )^2 \\)"
    var hb = "\\( R^2 = h_b^2 + \\left(\\frac{b}{2}\\right)^2 \\)"
    var hb2 = "\\(  h_b^2 = 1^2 - \\frac{b^2}{4}\\)"
    var hb3 = "\\(  h_b^2 = 1 - \\left( \\frac{2 - \\sqrt{2}}{4} \\right) \\)"
    var hb4 = "\\(  h_b^2 = 1 -  \\frac{1}{2} + \\frac{\\sqrt{2}}{4}\\)"
    var hb5 = "\\(  h_b = \\sqrt{ \\frac{1}{2} + \\frac{\\sqrt{2}}{4} } \\)"
    var hbR = "\\(  h_b = \\frac{1}{2} \\sqrt{ 2 + \\sqrt{2}} \\)"
    var c2bis = "\\( c^2 = \\frac{b^2}{4} + \\left(1 -\\frac{1}{2} \\sqrt{ 2 + \\sqrt{2}} \\right)^2 \\)"
    var c3 = "\\( c^2 = \\frac{2 - \\sqrt{2}}{4} + 1 - 2 \\times \\frac{1}{2} \\sqrt{ 2 + \\sqrt{2}} \\\\ + \\frac{ 2 + \\sqrt{2}}{4}  \\)"
    var c4 = "\\( c^2 = \\frac{1}{2} - \\frac{\\sqrt{2}}{4} + 1 - \\sqrt{ 2 + \\sqrt{2}} \\\\ +  \\frac{1}{2} + \\frac{\\sqrt{2}}{4}  \\)"
    var c5 = "\\( c^2 = 2 - \\sqrt{ 2 + \\sqrt{2}} \\)"
    var c6 = "\\( c = \\sqrt{2 - \\sqrt{ 2 + \\sqrt{2}}} \\)"
    var pi8c2 = "\\( \\pi \\approx 8\\sqrt{2 - \\sqrt{ 2 + \\sqrt{2}}} \\)"
    var pi8cR = "\\( \\pi \\approx 3,12 \\)"

    var pi16d = "\\( \\pi \\approx 16d \\)"
    var d = "\\( d^2 = \\left(\\frac{c}{2}\\right)^2 + d_0^2  \\)"
    var d2 = "\\( d^2 = \\frac{c^2}{4} + (1 -h_c )^2 \\)"
    var hc = "\\( R^2 = h_c^2 + \\left(\\frac{c}{2}\\right)^2 \\)"
    var hc2 = "\\(  h_c^2 = 1^2 - \\frac{c^2}{4}\\)"
    var hc3 = "\\(  h_c^2 = 1 - \\frac{2 - \\sqrt{2 + \\sqrt{2}}}{4}\\)"
    var hcR = "\\(  h_c = \\frac{1}{2} \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2}}} \\)"
    var d2bis = "\\( d^2 = \\frac{c^2}{4} + \\left(1 -\\frac{1}{2} \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2}}} \\right)^2 \\)"
    var d3 = "\\( d^2 = \\frac{2 - \\sqrt{ 2 + \\sqrt{2}}}{4} + 1 \\\\ - 2 \\times \\frac{1}{2} \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2}}} \\\\ + \\frac{ 2 + \\sqrt{2 + \\sqrt{2} }}{4}  \\)"
    var d4 = "\\( d = \\sqrt{2 - \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2}}}} \\)"
    var pi16d2 = "\\( \\pi \\approx 16\\sqrt{2 - \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2} }}} \\)"
    var pi16dR = "\\( \\pi \\approx 3,13 \\)"

    var piG = "\\( \\pi = lim_{n \\to +\\infty} \\enspace 2^{n+1} \\sqrt{2 - \\underbrace { \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2  {...}}}} }_\\text{n} }  \\)"

    return (
        <>
            <p>Reprenons la figure précédente, et continuons sur <MathJaxInline toShow="$c$" />.</p>
            <ImageZoom src={circlePiCalculus2} name="Calcul de Pi" n={++n} />
            <Title2 title={"Troisième approximation : par la base du triangle isocèle suivant"} />
            <MathJaxDisplay toShow={pi8c} demo />
            <MathJaxDisplay toShow={c} demo />
            <MathJaxDisplay toShow={c2} demo />  
            <p>Ici, il nous faut calculer d'abord la hauteur <MathJaxInline toShow="$h_b$" /></p>  
            <MathJaxDisplay toShow={hb} demo />   
            <MathJaxDisplay toShow={hb2} demo />   
            <MathJaxDisplay toShow={hb3} demo />   
            <MathJaxDisplay toShow={hb4} demo />   
            <MathJaxDisplay toShow={hb5} demo />  
            <MathJaxDisplay toShow={hbR} demo />  
            <p>Remplaçons maintenant par la valeur trouvée, nous avions</p>  
            <MathJaxDisplay toShow={c2} demo />  
            <p>Soit</p>
            <MathJaxDisplay toShow={c2bis} demo />  
            <MathJaxDisplay toShow={c3} demo /> 
            <MathJaxDisplay toShow={c4} demo />  
            <MathJaxDisplay toShow={c5} demo /> 
            <MathJaxDisplay toShow={c6} demo /> 
            <p>Ce qui donne</p>
            <MathJaxDisplay toShow={pi8c2} demo /> 
            <MathJaxDisplay toShow={pi8cR} demo /> 

            <Title2 title={"Quatrième approximation : par la base du triangle isocèle suivant"} />
            <p>Continuons maintenant en imaginant une nouvelle longueur, <MathJaxInline toShow={"$d$"} /> (trop petite pour être dessinée), trouvée par le même procédé que <MathJaxInline toShow="$b$" /> et <MathJaxInline toShow="$c$" /> </p>
            <MathJaxDisplay toShow={pi16d} demo />
            <MathJaxDisplay toShow={d} demo />
            <MathJaxDisplay toShow={d2} demo />  
            <p>Ici, il nous faut calculer d'abord la hauteur <MathJaxInline toShow="$h_c$" /></p>  
            <MathJaxDisplay toShow={hc} demo />   
            <MathJaxDisplay toShow={hc2} demo />   
            <MathJaxDisplay toShow={hc3} demo />   
            <MathJaxDisplay toShow={hcR} demo />   
                <p>Remplaçons maintenant par la valeur trouvée, nous avions</p>  
            <MathJaxDisplay toShow={d2} demo />  
            <p>Soit</p>
            <MathJaxDisplay toShow={d2bis} demo />  
            <MathJaxDisplay toShow={d3} demo />  
            <MathJaxDisplay toShow={d4} demo />  
                <p>Ce qui donne</p>
            <MathJaxDisplay toShow={pi16d2} demo /> 
            <MathJaxDisplay toShow={pi16dR} demo /> 

            <Title1 title={"Généralisation"} />
            <p>Nous pouvons à présent donner une formule générale pour <MathJaxInline toShow={"$\\pi$"} /></p>
            <Container className="Focus">
                <MathJaxDisplay toShow={piG} />  
                <MathJaxDisplay toShow={"\\( avec \\enspace  n \\enspace le \\enspace nombre \\enspace de \\enspace 2 \\enspace addition\\acute{e}s \\enspace sous \\enspace la \\enspace racine \\enspace n\\acute{e}gative \\)"} />                
            </Container>
        </>


    );
}

export default CalculDePi2;