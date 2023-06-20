import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const DeriveeDUnProduit = () => {

    var deriveeProduit = "\\( \\big(f(x) . g(x) \\big)' = f'(x).g(x) + g'(x).f(x)  \\)";

    var deriveeProduitDemo = "\\( \\big(f(x) . g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h).g(x+h) - f(x) . g(x) }{h}\\)";
    var deriveeProduitDemo2 = "\\( \\big(f(x) . g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h).g(x+h) + f(x + h).g(x) - f(x + h).g(x) - f(x).g(x) }{h} \\)";
    var deriveeProduitDemo3 = "\\( \\big(f(x) . g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h).(g(x + h) - g(x)) + g(x).(f(x + h) - f(x)) }{h}\\)";
    var deriveeProduitDemo4 = "\\( \\big(f(x) . g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h).(g(x + h) - g(x)) }{h} + lim_{ h \\to 0} \\enspace \\frac{ g(x).(f(x + h) - f(x)) }{h} \\)";
    var deriveeProduitDemo5 = "\\( \\big(f(x) . g(x) \\big)' = \\left( lim_{ h \\to 0} \\enspace f(x+h) \\right). \\left( lim_{ h \\to 0} \\enspace \\frac{(g(x + h) - g(x)) }{h} \\right) + g(x). \\left( lim_{ h \\to 0} \\enspace \\frac{(f(x + h) - f(x)) }{h}\\right) \\)";
    var deriveeProduitDemo6 = "\\( \\big(f(x) . g(x) \\big)' = f(x). g'(x) + g(x). f'(x) \\)";
    var deriveeProduitDemo7 = "\\( \\big(f(x) . g(x) \\big)' =  f'(x). g(x) +  g'(x).f(x) \\)";

    return  <>
               <p>
                    La dérivée d'un produit de fonctions répond à la formule suivante :
               </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeProduit}  />  
               </Container>

               <Title1 title={"Démonstration"} />
               <p>En partant comme précédemment de la formule générale de la dérivée, on a : </p>
               <MathJaxDisplay toShow={deriveeProduitDemo} demo /> 
               <p>Nous allons ici user de ruse et ajouter un terme <MathJaxInline toShow={"$ f(x + h).g(x) $"} /> pour le retirer aussitôt, ce qui va faciliter nos affaires.</p>     
               <MathJaxDisplay toShow={deriveeProduitDemo2} demo /> 
               <p>On factorise par <MathJaxInline toShow={"$ f(x + h) $"} /> et <MathJaxInline toShow={"$ g(x) $"} />:</p>
               <MathJaxDisplay toShow={deriveeProduitDemo3} demo  />  
               <p>La limite d'une somme est la somme des limites : </p>
               <MathJaxDisplay toShow={deriveeProduitDemo4} demo />
               <p>De même, la limite d'un produit est le produit des limites : </p>
               <MathJaxDisplay toShow={deriveeProduitDemo5} demo /> 
               <p>Soit au final :</p>
               <MathJaxDisplay toShow={deriveeProduitDemo6} demo /> 
               <p>Mais on la voit souvent sous cette forme :</p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeProduitDemo7}  />  
               </Container>
            </>
}

export default DeriveeDUnProduit;