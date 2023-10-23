import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const DeriveeDunQuotient = () => {

    var deriveeQuotient = "\\( \\left( \\frac{f(x)}{g(x)} \\right)' = \\frac{f'(x).g(x) - g'(x).f(x)}{ (g(x))^2}   \\)";
    var deriveeQuotientDemo = "\\( \\left( \\frac{f(x)}{g(x)} \\right)' = lim_{ h \\to 0} \\enspace \\frac{ \\frac{f(x+h)}{g(x+h)} - \\frac{f(x)}{g(x)} }{h} \\)";
    var deriveeQuotientDemo2 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace  \\frac{f(x+h).g(x) - f(x).g(x + h)}{h.(g(x+h)g(x))}  \\)";
    var deriveeQuotientDemo3 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{f(x+h).g(x) - f(x).g(x + h) + f(x).g(x) - f(x).g(x)}{h.(g(x+h)g(x))}  \\)";
    var deriveeQuotientDemo4 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{(f(x+h) - f(x)).g(x) - f(x).(g(x + h) - g(x)) }{h.(g(x+h)g(x))}  \\)";
    var deriveeQuotientDemo5 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace \\left[ \\frac{(f(x+h) - f(x)).g(x)}{h} - \\frac{ f(x).(g(x + h) - g(x)) }{h} \\right]. \\left(\\frac{1}{{(g(x+h).g(x))}} \\right) \\)";
    var deriveeQuotientDemo6 = "\\( \\Longleftrightarrow \\left( lim_{ h \\to 0} \\enspace \\frac{(f(x+h) - f(x)).g(x)}{h} \\right) - \\left( lim_{ h \\to 0} \\enspace \\frac{ f(x).(g(x + h) - g(x)) }{h} \\right). \\left( lim_{ h \\to 0} \\enspace \\frac{1}{{(g(x+h).g(x))}} \\right) \\)";
    var deriveeQuotientDemo7 = "\\( \\Longleftrightarrow \\left( lim_{ h \\to 0} \\enspace \\frac{(f(x+h) - f(x))}{h} \\right).g(x) - f(x).\\left( lim_{ h \\to 0} \\enspace \\frac{ (g(x + h) - g(x)) }{h} \\right). \\left( lim_{ h \\to 0} \\enspace \\frac{1}{{(g(x+h).g(x))}} \\right) \\)";

    var deriveeQuotientDemo8 = "\\( \\Longleftrightarrow \\frac{ f'(x).g(x) - f(x).g'(x) }{ (g(x))^2 } \\)";

    return  <>
               <p>
                    La dérivée d'un produit de fonctions répond à la formule suivante :
               </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeQuotient}  />  
               </Container>

               <Title1 title={"Démonstration"} />
               <MathJaxDisplay toShow={deriveeQuotientDemo}  />  
               <p>On met le numérateur sous le même dénominateur : </p>
               <MathJaxDisplay toShow={deriveeQuotientDemo2}  /> 
               <p>Comme pour la calcul du produit plus haut, on ajoute et on retire le terme <MathJaxInline toShow={"$ f(x).g(x) $"} /> : </p>
               <MathJaxDisplay toShow={deriveeQuotientDemo3}  />  
               <p>On factorise par <MathJaxInline toShow={"$ f(x) $"} /> et par <MathJaxInline toShow={"$ g(x) $"} /> : </p>
               <MathJaxDisplay toShow={deriveeQuotientDemo4}  />  
               <MathJaxDisplay toShow={deriveeQuotientDemo5}  />  
               <MathJaxDisplay toShow={deriveeQuotientDemo6}  />  
               <MathJaxDisplay toShow={deriveeQuotientDemo7}  />
               <MathJaxDisplay toShow={deriveeQuotientDemo8}  /> 

               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeQuotient}  />  
               </Container> 

            </>
}

export default DeriveeDunQuotient;