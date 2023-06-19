import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const DeriveeDeFonctionComposee = () => {
    
    var fRondG = "\\( (f \\circ g)(x) = f\\left(g(x)\\right)\\)";

    var fRondGDecortX = "\\( x \\longmapsto g(x) = y \\longmapsto f(y) = (f \\circ g)(x) \\)";
    var fRondGDecortA = "\\( a\\longmapsto g(a) = b \\longmapsto f(b) = (f \\circ g)(a) \\)";

    var derivabilityInAGen = "\\( f'(x) = lim_{x  \\to a} \\enspace \\frac{f(x) - f(a)}{x-a}\\)";

    var derivabilityInA = "\\( (f \\circ g)'(x)  = lim_{x  \\to a} \\enspace \\frac{(f \\circ g)(x ) - (f \\circ g)(a)}{x-a}\\)";
    var derivabilityInA2 = "\\( (f \\circ g)'(x)  = lim_{x  \\to a} \\enspace \\frac{f(y) - f(b)}{x-a}\\)";
    var derivabilityInA3 = "\\( (f \\circ g)'(x)  = lim_{x  \\to a} \\enspace  \\frac{y-b}{x-a} . \\frac{f(y) - f(b)}{y-b} \\)";
    var derivabilityInA4 = "\\( (f \\circ g)'(x)  = lim_{x  \\to a} \\enspace  \\frac{g(x)-g(a)}{x-a} . \\frac{f(y) - f(b)}{y-b} \\)";
    var derivabilityInA5 = "\\( (f \\circ g)'(x)  = lim_{x  \\to a} \\enspace lim_{x  \\to a} \\enspace \\frac{g(x)-g(a)}{x-a} . \\frac{f(y) - f(b)}{y-b} \\)";

    var derivabilityInA_fPrim = "\\( lim_{x  \\to a} \\enspace \\frac{f(y) - f(b)}{y-b} = lim_{y \\to b} \\enspace \\frac{g(y) - g(b)}{y-b} \\)";
    
    var derivabilityInA6 = "\\( (f \\circ g)'(x)  = lim_{x  \\to a} \\enspace \\frac{g(x)-g(a)}{x-a} . lim_{y  \\to b} \\enspace \\frac{f(y) - f(b)}{y-b} \\)";
    var derivabilityInA7 = "\\( (f \\circ g)'(a)  = g'(a) . f'(b)\\)";
    var derivabilityInA8 = "\\( (f \\circ g)'(a)  = g'(a) . f'(g(a))\\)";

    var fRondGPrim = "\\( (f \\circ g)'(x)  = g'(x) . f'(g(x))\\)";

    return  <>
                <p>
                    On définit une fonction composée <MathJaxInline toShow={"$ f \\circ g $"} /> de la façon suivante :
                </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={fRondG} />  
                </Container>
                <p>
                   On peut la décortiquer de la façon suivante :
                </p>
                <MathJaxDisplay toShow={fRondGDecortX} demo/>  
                <MathJaxDisplay toShow={fRondGDecortA} demo/>  
                
                <Title1 title={"Dérivabilité en a"} />
                <p>Supposons que <MathJaxInline toShow={"$ g $"} /> est dérivable en <MathJaxInline toShow={"$ a $"} /> et que <MathJaxInline toShow={"$ f $"} /> est dérivable en <MathJaxInline toShow={"$ b $"} />.</p>
                <p>Voyons si <MathJaxInline toShow={"$ f \\circ g $"} /> est dérivable en <MathJaxInline toShow={"$ a $"} /> :</p>
                <p>La formule générale de la dérivée peut aussi se rencontrer sous cette forme : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={derivabilityInAGen} />  
                </Container>
                <p>Soit dans notre cas :</p>
                <MathJaxDisplay toShow={derivabilityInA} demo/> 
                <MathJaxDisplay toShow={derivabilityInA2} demo/>
                <MathJaxDisplay toShow={derivabilityInA3} demo/>
                <MathJaxDisplay toShow={derivabilityInA4} demo/>
                <MathJaxDisplay toShow={derivabilityInA5} demo/>
                <p>Mais : </p>
                <MathJaxDisplay toShow={derivabilityInA_fPrim} demo/>
                <p>Car si <MathJaxInline toShow={"$ x \\to a $"} />, alors <MathJaxInline toShow={"$ y = g(x) \\to g(a) = b $"} />.</p>
                <p>Donc on a finalement :</p>
                <MathJaxDisplay toShow={derivabilityInA6} demo/>
                <p>Et on reconnaît alors les dérivées des deux fonctions :</p>
                <MathJaxDisplay toShow={derivabilityInA7} demo/>
                <MathJaxDisplay toShow={derivabilityInA8} demo/>  

                <Title1 title={"Conclusion"} />
                <p>La composée de deux fonctions dérivables l'est aussi et sa dérivée est : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={fRondGPrim} />  
                </Container>
            </>
}

export default DeriveeDeFonctionComposee;