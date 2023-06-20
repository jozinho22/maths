import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';
import pathBuilder from '../../../helpers/pathBuilder';
import Title1 from '../../helpers/Title1';

const DeriveeDUneSomme = () => {

    var deriveeSomme = "\\( \\big(f(x) + g(x) \\big)' = f'(x) + g'(x)  \\)";
    var deriveeRappel = "\\(f'(x) = lim_{ h \\to 0} \\enspace \\frac{f(x+h) - f(x)}{h}\\)";

    var deriveeSommeDemo = "\\( \\big(f(x) + g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h) + g(x+h) - (f(x) + g(x)) }{h}\\)";
    var deriveeSommeDemo2 = "\\( \\big(f(x) + g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h) + g(x+h) - f(x) - g(x) }{h}\\)";
    var deriveeSommeDemo3 = "\\( \\big(f(x) + g(x) \\big)' = lim_{ h \\to 0} \\enspace \\left(\\frac{ f(x+h) - f(x) }{h} + \\frac{ g(x+h) - g(x)}{h} \\right)\\)";
    var deriveeSommeDemo4 = "\\( \\big(f(x) + g(x) \\big)' = lim_{ h \\to 0} \\enspace \\frac{ f(x+h) - f(x) }{h} + lim_{ h \\to 0} \\enspace \\frac{ g(x+h) - g(x)}{h} \\)";

    var deriveeDiff = "\\( \\big(f(x) - g(x) \\big)' = f'(x) - g'(x)  \\)";

    return  <>
               <p>
                    La dérivée d'une somme de fonctions n'est autre que la somme des dérivées. 
               </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeSomme} />  
               </Container>
               
               <Title1 title={"Démonstration"} />
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

               <Title1 title={"Dérivée d'une différence de fonctions"} />
               <p>Etant donné qu'une addition n'est autre qu'une addition d'un terme négatif, nous avons par extension : </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeDiff}  />  
               </Container> 
            </>
}

export default DeriveeDUneSomme;