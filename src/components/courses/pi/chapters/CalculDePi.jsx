import React from 'react';
import ImageZoom from '../../helpers/ImageZoom';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import circlePiCalculus from '../assets/circlePiCalculus.png';
import Title2 from '../../helpers/Title2';

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

    return (

        <>
            <p>
                Nous allons tenter de calculer <MathJaxInline toShow={"$ \\pi $"} />, en utilsant plusieurs approximations successives.
            </p>

            <ImageZoom src={circlePiCalculus} name="Calcul de Pi" n={++n} />
            <p>Nous avons vu plus haut que le périmètre d'un cercle peut s'écrire comme ceci : </p>
            <MathJaxDisplay toShow={p} demo />
            <p>Mais lorsque <MathJaxInline toShow="$R = 1$" />, on a :</p>
            <MathJaxDisplay toShow={pi1} demo />

            <Title2 title={"Première approximation : par le côté du carré interne"} />
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
            
            <Title2 title={"Deuxième approximation : par la base du triangle isocèle"} />
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
        </>


    );
}

export default CalculDePi;