import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

const ChangementDeVariable = () => {

    var chgtDeVar = "\\( \\int^x (f \\circ \\phi(t)) . \\phi'(t) dt = \\int^{\\phi(x)} f(u). du \\)";
    var FRondPhiPrim = "\\( (F \\circ \\phi)'(t) =  \\phi'(t).(F' \\circ \\phi)(t) \\)";
    var FRondPhiPrim2 = "\\( \\phi'(t).(F' \\circ \\phi)(t) =  \\phi'(t).(f \\circ \\phi)(t) \\)";

    var exemple = "\\( A(x) = \\int^x \\frac{ln(t)}{t + t.ln^2(t)}.dt\\)";
    var exemple2 = "\\( A(x) =\\int^{ln(x)} \\frac{u}{1 + u^2}.du\\)";
    var exemple3 = "\\( A(x) =\\frac{1}{2} \\int^{ln(x)} \\frac{2u}{(1 + u^2)}.du\\)";
    var exemple4 = "\\( A(x) = \\frac{1}{2} \\Biggl[ ln(1 + u^2) \\Biggr]^{ln(x)} \\)";
    var exemple5 = "\\( A(x) = \\frac{1}{2} ln\\left(1 + ln^2(x)\\right) \\)";

    return  <>
                <p>Un technique pour calculer des primitives qui semblent compliquées de prime abord est le changement de variable. </p>
                <p>On note la formule générale :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={chgtDeVar} />  
                </Container>
                <p>Où <MathJaxInline toShow={"$ u = \\phi(t) $"} /> et <MathJaxInline toShow={"$ du = \\phi'(t)dt $"} />. </p>
                <p>À noter que l'on a aussi remplacé les bornes de l'intégrale par l'image de <MathJaxInline toShow={"$ x $"} /> par <MathJaxInline toShow={"$ \\phi(x) $"} />.</p> 
                
                <Title1 title="Explication" />
                <p>En effet, nous avons au chapitre sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/derivee-de-fonction-composee`} external>la dérivée d'une composition de fonctions</Link> que :</p>
               <MathJaxDisplay toShow={FRondPhiPrim} demo />  
               <p>Dans notre cas, <MathJaxInline toShow={"$ F' = f $"} />, soit </p>
                <MathJaxDisplay toShow={FRondPhiPrim2} demo /> 
               <p>En posant <MathJaxInline toShow={"$ u = \\phi(t) $"} />, on a bien </p>
               <MathJaxDisplay toShow={chgtDeVar} demo />  
            
               <Title1 title="Exemple" />
               <p>Tentons de calculer la primitive suivante : </p>
               <MathJaxDisplay toShow={exemple} demo />
               <p>On pose <MathJaxInline toShow={"$ u = ln(t) $"} />.</p>
               <p>On a alors par dérivation : <MathJaxInline toShow={"$ du = \\frac{dt}{t} $"} /></p>
               <p>On remplace alors les nouvelles variables dans l'expression, en n'oubliant pas de modifier de même les bornes.</p>
               <MathJaxDisplay toShow={exemple2} demo />
               <p>On s'arrange pour avoir une expression de <MathJaxInline toShow={"$ f(u) $"} /> de la forme <MathJaxInline toShow={"$ f(u) = \\frac{v'}{v} $"} />, avec <MathJaxInline toShow={"$ v = 1 + u^2 $"} />.</p>
               <MathJaxDisplay toShow={exemple3} demo />
               <MathJaxDisplay toShow={exemple4} demo />
               <MathJaxDisplay toShow={exemple5} demo />
            </>
}

export default ChangementDeVariable;