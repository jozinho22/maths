import React from 'react';
import { Container } from 'react-bootstrap';
import ImageZoom from '../../ImageZoom';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import circlePiCalculus from '../assets/circlePiCalculus.png';

const CalculDePi = () => {
    
    var n = 0;

    var p = "\\( P = 2\\pi R \\)"

    var pi1 = "\\( \\pi = \\frac{P}{2} \\)"

    var pi2a = "\\( \\pi \\approx 2a \\)"
    var a = "\\( a^2 = 1^2 + 1^2 \\)"
    var a2 = "\\( a = \\sqrt{2} \\)"
    
    var pi2a2 = "\\( \\pi \\approx 2\\sqrt{2} \\)"
    var pi2aR = "\\( \\pi \\approx 2,82 \\)"

    var pi4b = "\\( \\pi \\approx 4b \\)"
    var b = "\\( b^2 = \\left(\\frac{a}{2}\\right)^2 + b_0^2  \\)"
    var b2 = "\\( b^2 = \\frac{a^2}{4} + (1 - h_a )^2 \\)"
    var b2bis = "\\( b^2 = \\frac{a^2}{4} + \\left(1 -\\frac{a}{2} \\right)^2 \\)"
    var b3 = "\\( b^2 = \\frac{a^2}{4} + 1^2 - a + \\frac{a^2}{4} \\)"
    var b4 = "\\( b^2 = \\frac{2}{4} + 1 - \\sqrt{2} + \\frac{2}{4} \\)"
    var b5 = "\\( b^2 =  2 - \\sqrt{2} \\)"
    var b6 = "\\( b = \\sqrt{ 2 - \\sqrt{2} } \\)"
     var pi4b2 = "\\( \\pi \\approx 4\\sqrt{ 2 - \\sqrt{2} } \\)"
    var pi4bR = "\\( \\pi \\approx 3,06 \\)"

    var pi8c = "\\( \\pi \\approx 8c \\)"
    var c = "\\( c^2 = \\left(\\frac{b}{2}\\right)^2 + c_0^2  \\)"
    var c2 = "\\( c^2 = \\frac{b^2}{4} + (1 -h_b )^2 \\)"
    var hb = "\\( R^2 = h_b^2 + \\left(\\frac{b}{2}\\right)^2 \\)"
    var hb2 = "\\(  h_b^2 = 1^2 - \\frac{b^2}{4}\\)"
    var hb3 = "\\(  h_b^2 = 1 - \\frac{2 - \\sqrt{2}}{4}\\)"
    var hb4 = "\\(  h_b^2 = 1 -  \\frac{1}{2} + \\frac{\\sqrt{2}}{4}\\)"
    var hb5 = "\\(  h_b = \\sqrt{ \\frac{1}{2} + \\frac{\\sqrt{2}}{4} } \\)"
    var hbR = "\\(  h_b = \\frac{1}{2} \\sqrt{ 2 + \\sqrt{2}} \\)"
    var c2bis = "\\( c^2 = \\frac{b^2}{4} + \\left(1 -\\frac{1}{2} \\sqrt{ 2 + \\sqrt{2}} \\right)^2 \\)"
    var c3 = "\\( c^2 = \\frac{2 - \\sqrt{2}}{4} + 1 - 2 \\times \\frac{1}{2} \\sqrt{ 2 + \\sqrt{2}} + \\frac{ 2 + \\sqrt{2}}{4}  \\)"
    var c4 = "\\( c^2 = \\frac{1}{2} - \\frac{\\sqrt{2}}{4} + 1 - \\sqrt{ 2 + \\sqrt{2}} +  \\frac{1}{2} + \\frac{\\sqrt{2}}{4} \\)"
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
    var hcR = "\\(  h_b = \\frac{1}{2} \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2}}} \\)"
    var d2bis = "\\( d^2 = \\frac{c^2}{4} + \\left(1 -\\frac{1}{2} \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2}}} \\right)^2 \\)"
    var d3 = "\\( d^2 = \\frac{2 - \\sqrt{2}}{4} + 1 - 2 \\times \\frac{1}{2} \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2}}} + \\frac{ 2 + \\sqrt{2}}{4}  \\)"
    var d4 = "\\( d = \\sqrt{2 - \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2}}}} \\)"
    var pi16d2 = "\\( \\pi \\approx 16\\sqrt{2 - \\sqrt{ 2 + \\sqrt{2 + \\sqrt{2} }}} \\)"
    var pi16dR = "\\( \\pi \\approx 3,13 \\)"

    var piG = "\\( \\pi = lim_{n \\to +\\infty} \\enspace 2^{n+1} \\sqrt{2 - \\underbrace { \\sqrt{ 2 + \\sqrt{2 + \\sqrt{ 2 + {...}}}} }_\\text{n} }  \\)"

    return (

        <>

            <p className="Title1">Calcul de π par méthode géométrique</p>
            <p>
                Nous allons tenter de calculer <MathJaxInline toShow={"$ \\pi $"} />, en utilsant plusieurs approximations successives.
                {"\n"}C'est une méthode qui a été développée par Archimède dans l'antiquité.
            </p>

            <ImageZoom src={circlePiCalculus} name="Calcul de Pi" n={++n} />
            <p>Nous avons vu plus haut que le périmètre d'un cercle peut s'écrire comme ceci : </p>
            <MathJaxDisplay toShow={p} />
            <p>Mais lorsque <MathJaxInline toShow="$R = 1$" />, on a :</p>
            <MathJaxDisplay toShow={pi1} />

            <p className="Title2">Première approximation : par le côté du carré interne</p>
            <p>Nous allons effectuer une première approximation plutôt grossière, nous allons dire que le périmètre du demi-cercle s'approche de la longueur de deux côtés du carré interne additionnés.   </p>
            <p>Soit</p>
            <MathJaxDisplay toShow={pi2a} demo />
            <p>Pour cela, nous allons calculer <MathJaxInline toShow="$a$" />.
                {"\n"}Avec le théorème de Pythagore, on a :
            </p>
            <MathJaxDisplay toShow={a} demo />
            <MathJaxDisplay toShow={a2} demo />
            <p>Ce qui donne</p>
            <MathJaxDisplay toShow={pi2a2} demo />
            <MathJaxDisplay toShow={pi2aR} demo />
            <p>Mais nous restons encore loin du but, prenons un segment plus proche du cercle, comme <MathJaxInline toShow="$b$" />.</p>
            
            <p className="Title2"> Deuxième approximation : par la base du triangle isocèle</p>
            <p> C'est la base du triangle isocèle formée par deux rayons du cercle (en rouge sur la figure).
                {"\n"} Nous avions auparavant additioné deux longueurs <MathJaxInline toShow="$a$" />. Pour suivre la même longueur du demi-cercle mais d'un peu plus près, nous additionnerons 4 longueurs <MathJaxInline toShow="$b$" />.
            </p>
            <MathJaxDisplay toShow={pi4b} demo />
            <p>Avec le même procédé, on calcule <MathJaxInline toShow="$b$" />
            </p>
            <MathJaxDisplay toShow={b} demo />
            <MathJaxDisplay toShow={b2} demo />            
            <MathJaxDisplay toShow={b2bis} demo />
            <MathJaxDisplay toShow={b3} demo />
            <MathJaxDisplay toShow={b4} demo />
            <MathJaxDisplay toShow={b5} demo />
            <MathJaxDisplay toShow={b6} demo />
            <p>Ce qui donne</p>
            <MathJaxDisplay toShow={pi4b2} demo />
            <MathJaxDisplay toShow={pi4bR} demo />
            <p>Nous commençons à nous approcher de 3,14. Continuons maintenant sur <MathJaxInline toShow="$c$" />, obtenue de la même façon que <MathJaxInline toShow="$b$" /> par rapport à <MathJaxInline toShow="$a$" />.</p>
            
            <p className="Title2">Troisième approximation : par la base du triangle isocèle suivant</p>
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

            <p className="Title2">Quatrième approximation : par la base du triangle isocèle suivant</p>
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

            <p className="Title1">Généralisation</p>
            <p>Nous pouvons à présent donner une formule générale pour <MathJaxInline toShow={"$\\pi$"} /></p>
            <Container className="Focus">
                <MathJaxDisplay toShow={piG} />  
            </Container>
            <p>avec <MathJaxInline toShow="$ n $" /> le nombre de <MathJaxInline toShow="$ 2 $" /> additionnés de manière récursive</p>                
    
        </>


    );
}

export default CalculDePi;