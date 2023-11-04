import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';
import Title1 from '../../helpers/Title1';

const DeriveeDUneFonctionMulitplieeParUneConstante = () => {

    var deriveeFonctionMultConst = "\\( (\\lambda . f(x))' = \\lambda . f'(x) \\)";
    var deriveeRappel = "\\(f'(x) = lim_{ h \\to 0} \\enspace \\frac{f(x+h) - f(x)}{h}\\)";

    var deriveeFonctionMultConstDemo = "\\( g'(x) =  \\big(\\lambda f(x))' = lim_{ h \\to 0} \\enspace \\frac{ \\lambda f(x+h) - \\lambda  f(x) }{h}\\)";
    var deriveeFonctionMultConstDemo2 = "\\(\\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{ \\lambda \\left (f(x+h) -  f(x) \\right) }{h}\\)";
    var deriveeFonctionMultConstDemo3 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace \\lambda \\enspace . \\enspace  lim_{ h \\to 0} \\enspace \\frac{ f(x+h) - f(x)}{h} \\)";

    return  <>
               <p>
                    Lorsqu'on dérive une fonction multipliée par une constante, on peut sortir celle-ci et dériver la fonction à part. 
               </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeFonctionMultConst} />  
               </Container>
               
               <Title1 title={"Démonstration"} />
               <p>Soit <MathJaxInline toShow={"$ \\lambda \\in \\mathbb{R} $"} /> un réel quelconque. </p>
               <p>On souhaite calculer la dérivée d'une fonction <MathJaxInline toShow={"$ g = \\lambda f $"} />.</p>
               <p>Dans <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/presentation`} external>le premier chapitre sur la dérivée</Link> , on a vu que : </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeRappel} />  
               </Container> 
               <p>À partir de cette formule, nous avons alors : </p>
               <MathJaxDisplay toShow={deriveeFonctionMultConstDemo} demo /> 
               <p>On peut factoriser par <MathJaxInline toShow={"$ \\lambda $"} /> :</p> 
               <MathJaxDisplay toShow={deriveeFonctionMultConstDemo2} demo />
               <MathJaxDisplay toShow={deriveeFonctionMultConstDemo3} demo /> 
         
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeFonctionMultConst}  />  
               </Container> 

            </>
}

export default DeriveeDUneFonctionMulitplieeParUneConstante;