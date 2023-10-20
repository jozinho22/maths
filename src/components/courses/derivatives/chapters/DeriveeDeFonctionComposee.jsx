import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Aside from '../../helpers/Aside';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import pathBuilder from '../../../helpers/pathBuilder';

const DeriveeDeFonctionComposee = () => {
    
    var fRondG = "\\( \\forall x \\in \\xi(g(x))  \\)";
    var fRondG2 = "\\( (f \\circ g)(x) = f\\left(g(x)\\right) \\)";

    var fRondGDecortX = "\\( x \\longmapsto g(x) \\longmapsto f(g(x)) = (f \\circ g)(x) \\)";

    var derivability = "\\(f'(x) = lim_{h \\to 0} \\enspace  \\frac{f(x+h) - f(x)}{h}\\)";

    var derivabilityInA = "\\( (f \\circ g)'(x)  = lim_{h \\to 0} \\enspace \\frac{(f \\circ g)(x + h) - (f \\circ g)(x)}{h}\\)";
    var derivabilityInA2 = "\\( (f \\circ g)'(x)  = lim_{h \\to 0} \\enspace \\frac{f(g(x+h)) - f(g(x))}{h}\\)";
    var derivabilityInA3 = "\\( (f \\circ g)'(x)  = lim_{h \\to 0} \\enspace  \\frac{f(g(x+h)) - f(g(x))}{h} .  \\frac{g(x+h) - g(x)}{g(x+h) - g(x)} \\)";
    var derivabilityInA4 = "\\( (f \\circ g)'(x)  = lim_{h \\to 0} \\enspace  \\frac{f(g(x+h)) - f(g(x))}{g(x+h) - g(x)} .  \\frac{g(x+h) - g(x)}{h} \\)";
    var derivabilityInA5 = "\\( (f \\circ g)'(x)  = lim_{h \\to 0} \\enspace \\frac{f(g(x+h)) - f(g(x))}{g(x+h) - g(x)} .  lim_{h \\to 0} \\enspace  \\frac{g(x+h) - g(x)}{h} \\)";
    var derivabilityInA6 = "\\( (f \\circ g)'(x)  = \\underbrace { lim_{k \\to 0} \\enspace \\frac{f(g(x+h)) - f(g(x))}{k} }_\\text{ f'(g(x))} . \\underbrace { lim_{h \\to 0} \\enspace  \\frac{g(x+h) - g(x)}{h} }_\\text{ g'(x)} \\)";

    var fRondGPrim = "\\( (f \\circ g)'(x)  = g'(x) . f'(g(x))\\)";

    return  <>
                <p>
                    On définit une fonction composée <MathJaxInline toShow={"$ (f \\circ g) $"} /> par :
                </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={fRondG} />  
                     <MathJaxDisplay toShow={fRondG2} />  
                </Container>
                <p>
                   On peut la décortiquer de la façon suivante :
                </p>
                <MathJaxDisplay toShow={fRondGDecortX} demo/>  
                <p>On applique tout d'abord la fonction <MathJaxInline toShow={"$ g $"} />, puis on applique la fonction <MathJaxInline toShow={"$ f $"} /> au résultat.</p>
                
                <p>Supposons que <MathJaxInline toShow={"$ g $"} /> est continue pour tout <MathJaxInline toShow={"$ x$"} /> .</p>
                <p>Tentons de calculer une formule de la dérivée <MathJaxInline toShow={"$ (f \\circ g)(x) $"} /> :</p>
                <p>On a vu dans <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/presentation`)} external>la présentation</Link> la définition de la dérivée : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={derivability} />  
                </Container>
                <p>Soit dans notre cas :</p>
                <MathJaxDisplay toShow={derivabilityInA} demo/> 
                <MathJaxDisplay toShow={derivabilityInA2} demo/>
                <p>On ajoute un membre équivalent en haut et en bas, ce qui ne change rien :</p>
                <MathJaxDisplay toShow={derivabilityInA3} demo/>
                <MathJaxDisplay toShow={derivabilityInA4} demo/>
                <p>La limite d'un produit est égal au produit des limites, soit on peut écrire :</p>
                <MathJaxDisplay toShow={derivabilityInA5} demo/>
                <Aside>
                    <p>Posons que :</p>
                    <MathJaxInline toShow={"$ g(x+h) - g(x) = k $"} />
                    <p>Cela implique par conséquence que :</p>
                    <p>Si <MathJaxInline toShow={"$ h \\to 0 $"} />, alors <MathJaxInline toShow={"$ k \\to 0 $"} />.</p> 
                </Aside>
                <p>Soit : </p>
                <MathJaxDisplay toShow={derivabilityInA6} demo/>
                <p>Donc on a finalement :</p>

                <Container className="Focus">
                     <MathJaxDisplay toShow={fRondGPrim} />  
                </Container>
            </>
}

export default DeriveeDeFonctionComposee;