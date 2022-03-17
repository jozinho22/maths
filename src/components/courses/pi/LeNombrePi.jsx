import React from 'react';
import { Container } from 'react-bootstrap';
import ImageZoom from '../ImageZoom';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../mathjax-display/MathJaxInline';

import circlePi from './assets/circlePi.png';
import circlePiCalculus from './assets/circlePiCalculus.png';

const LeNombrePi = () => {

    var n = 0;
    var pCercle = "\\( P_{cercle} = 2\\pi R_{cercle} \\)"
    var p = "\\( P = 2\\pi R \\)"
    var piP = "\\(\\pi = \\frac{P} {2R} \\)"

    var sCercle = "\\( S_{cercle} = \\pi R_{cercle}^2 \\)"
    var piS = "\\(\\pi = \\frac{S} {R^2} \\)"
    var piS2 = "\\(S = \\pi {R^2} \\)"

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

    var approxPi1 = "\\( \\frac{\\pi}{4} = \\frac{1}{ 1 + \\frac{1^2}{ 3 + \\frac{2^2}{5 + \\frac{3^2}{7 + {...} }}}} \\)"

    var approxPi2 = "\\( \\frac{\\pi^2}{6} = \\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{3^2} + \\frac{1}{4^2} + {...} \\)"

    var approxPi3 = "\\( \\pi = \\int_{-1}^1 \\frac{dx}{\\sqrt{1 - x^2}} \\)"

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <>
            <p className="Title">Le nombre π</p>
            <Container className="CoursesContainer">    
                <p>Le nombre <MathJaxInline toShow={"$ \\pi $"} /> (pi), aussi appelée constante d'Archimède, est un nombre qui permet de mesurer le périmètre ou l'aire d'un cercle.</p>
                
                <p>Pour le périmètre : </p>
                
                <MathJaxDisplay toShow={pCercle} />
                
                 <Container className="Focus">
                    <MathJaxDisplay toShow={p} />
                </Container>
                <p>Soit</p>
                <MathJaxDisplay toShow={piP} />

                <p>Et pour la surface : </p>
                <MathJaxDisplay toShow={sCercle} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={piS2} />
                 </Container>
                 <p>Soit</p>
                <MathJaxDisplay toShow={piS} />
                
                <p>C'est l'une des constantes les plus importantes des mathématiques, car on la retrouve impliquée dans de nombreuses formules.</p>
                <p>
                    Sa valeur approchée est de <MathJaxInline toShow="$ 3,14116...etc $" /> . 
                    {"\n"}C'est le demi-périmètre d'un cercle de rayon <MathJaxInline toShow="$ R=1 $" />.
                    {"\n"}En revanche, c'est un nombre irrationnel donc on peut le calculer avec une précision à l'infini !
                </p>
                <ImageZoom src={circlePi} name="Pi sur le demi-cercle de rayon R = 1" n={++n} />

                <p>Mais comment fait-on pour calculer la valeur de <MathJaxInline toShow={"$ \\pi $"} /> soi même ? </p>
                <p>En voici un exemple :</p>

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

                <p className="Underline">Première approximation : par le côté du carré interne</p>
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
                
                <p className="Underline"> Deuxième approximation : par la base du triangle isocèle</p>
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
                
                <p className="Underline">Troisième approximation : par la base du triangle isocèle suivant</p>
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

                <p className="Underline">Quatrième approximation : par la base du triangle isocèle suivant</p>
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

                <p className="Underline">Généralisation</p>
                <p>Nous pouvons à présent donner une formule générale pour <MathJaxInline toShow={"$\\pi$"} /></p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={piG} />  
                </Container>
                <p>avec <MathJaxInline toShow="$ n $" /> le nombre de <MathJaxInline toShow="$ 2 $" /> additionnés de manière récursive</p>                
                
                <p className="Underline">Autres formules générales </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPi1} infiniteFrac />  
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPi2} />  
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPi3} />  
                </Container>
            </Container>
        </>
    );

}

export default LeNombrePi;