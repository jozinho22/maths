import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../CoursesConstants';
import Link from '../../../immutable/nav/Link';
import pathBuilder from '../../../helpers/pathBuilder';
import Aside from '../../Aside';

const DeriveeSurDesOperations = () => {

    var deriveeSomme = "\\( \\big(f(x) + g(x) \\big)' = f'(x) + g'(x)  \\)";
    var deriveeRappel = "\\(f'(x) = lim_{ h \\to 0} \\enspace \\frac{f(x+h) - f(x)}{h}\\)";

    var deriveeSommeDemo = "\\( \\big(f(x) + g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h) + g(x+h) - (f(x) + g(x)) }{h}\\)";
    var deriveeSommeDemo2 = "\\( \\big(f(x) + g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h) + g(x+h) - f(x) - g(x) }{h}\\)";
    var deriveeSommeDemo3 = "\\( \\big(f(x) + g(x) \\big)' = lim_{ h \\to 0} \\enspace \\left(\\frac{ f(x+h) - f(x) }{h} + \\frac{ g(x+h) - g(x)}{h} \\right)\\)";
    var deriveeSommeDemo4 = "\\( \\big(f(x) + g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h) - f(x) }{h} + lim_{ h \\to 0} \\enspace \\frac{ g(x+h) - g(x)}{h} \\)";

    var deriveeDiff = "\\( \\big(f(x) - g(x) \\big)' = f'(x) - g'(x)  \\)";

    var deriveeProduit = "\\( \\big(f(x) . g(x) \\big)' = f'(x).g(x) + g'(x).f(x)  \\)";

    var deriveeProduitDemo = "\\( \\big(f(x) . g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h).g(x+h) - f(x) . g(x) }{h}\\)";
    var deriveeProduitDemo2 = "\\( \\big(f(x) . g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h).g(x+h) + f(x + h).g(x) - f(x + h).g(x) - f(x).g(x) }{h} \\)";
    var deriveeProduitDemo3 = "\\( \\big(f(x) . g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h).(g(x + h) - g(x)) + g(x).(f(x + h) - f(x)) }{h}\\)";
    var deriveeProduitDemo4 = "\\( \\big(f(x) . g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h).(g(x + h) - g(x)) }{h} + lim_{ h \\to 0} \\enspace \\frac{ g(x).(f(x + h) - f(x)) }{h} \\)";
    var deriveeProduitDemo5 = "\\( \\big(f(x) . g(x) \\big)' = \\left( lim_{ h \\to 0} \\enspace f(x+h) \\right). \\left( lim_{ h \\to 0} \\enspace \\frac{(g(x + h) - g(x)) }{h} \\right) + \\left( lim_{ h \\to 0} \\enspace g(x) \\right). \\left( lim_{ h \\to 0} \\enspace \\frac{(f(x + h) - f(x)) }{h}\\right) \\)";
    var deriveeProduitDemo6 = "\\( \\big(f(x) . g(x) \\big)' = f(x). g'(x) + g(x). f'(x) \\)";
    var deriveeProduitDemo7 = "\\( \\big(f(x) . g(x) \\big)' =  f'(x). g(x) +  g'(x).f(x) \\)";


    return  <>
               <p className="Title1">a) Dérivée de la somme de fonctions</p>
               <p>
                    La dérivée d'une somme de fonctions n'est autre que la somme des dérivées. 
               </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeSomme} />  
               </Container>
               
               <p className="Title2">Démonstration</p>
               <p>On souhaite calculer la dérivée d'une somme de deux fonctions <MathJaxInline toShow={"$ f $"} /> et <MathJaxInline toShow={"$ g $"} />.</p>
               <p>Dans <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/presentation`)} external>le premier chapitre sur la dérivée</Link> , on a vu que : </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeRappel} />  
               </Container> 
               <p>À partir de cette formule, nous avons alors : </p>
               <MathJaxDisplay toShow={deriveeSommeDemo} demo /> 
               <MathJaxDisplay toShow={deriveeSommeDemo2} demo /> 
               <MathJaxDisplay toShow={deriveeSommeDemo3} demo /> 
               <p>La limite d'une somme est la somme des limites, soit :</p>
               <MathJaxDisplay toShow={deriveeSommeDemo4} demo /> 
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeSomme}  />  
               </Container> 
               <p>Etant donné qu'une addition n'est autre qu'une addition d'un terme négatif, nous avons par extension : </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeDiff}  />  
               </Container> 

               <p className="Title1">b) Dérivée du produit de fonctions</p>
               <p>
                    La dérivée d'un produit de fonctions répond à la formule suivante. 
               </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeProduit}  />  
               </Container>
               <p className="Title2">Démonstration</p>
               <p>En partant comme précédemment de la formule générale de la dérivée, on a : </p>
               <MathJaxDisplay toShow={deriveeProduitDemo} demo /> 
               <p>Nous allons ici user de ruse et ajouter un terme <MathJaxInline toShow={"$ f(x + h).g(x) $"} /> pour le retirer aussitôt, ce qui va faciliter nos affaires.</p>
               
               {/* {
                    width < 450 ?
                         <Aside><p style={{fontStyle: "italic"}}>(À partir d'ici, les formules sont un peu remaniées pour les faire tenir sur mobile (merci de votre compréhension ^^))</p></Aside>
                              : <></>
               } */}
               
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

export default DeriveeSurDesOperations;