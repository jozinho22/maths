import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Aside from '../../helpers/Aside';

const DeriveeDeXPuissanceN = () => {

    var xPuissanceN = "\\( \\forall x \\in (\\mathbb{R} \\enspace si \\enspace x \\geq 0, \\enspace \\mathbb{R^*} \\enspace si \\enspace x < 0), f(x)= x^n \\)";

    var deriveeXPuissanceN = "\\( (x^n)' = n . x^{n-1} \\)";
    var deriveeXPuissanceN2 = "\\( (x^n)' = lim_{ h \\to 0} \\enspace \\frac{ (x+h)^n - x^n }{h} \\)";

    var aPlusBPuissanceN = "\\( (a + b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k \\)";
    var binom = "\\( \\binom{n}{k} = \\frac{n!}{k!(n - k)!} \\)";
    var xPlusHPuissanceN = "\\( (x + h)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} h^k \\)";
    var xPlusHPuissanceN2 = "\\( (x + h)^n =  x^n + \\binom{n}{1} x^{n-1} h + \\binom{n}{2} x^{n-2} h^2 + + \\binom{n}{3}  x^{n-3} h^3 + ... + \\binom{n}{k} x^{n-k} h^k + ... + h^n \\)";
    
    var deriveeXPuissanceN3 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{ x^n + n x^{n-1} h + \\binom{n}{2} x^{n-2}.h^2 + + \\binom{n}{3} x^{n-3}.h^3 + ... + \\binom{n}{k} x^{n-k} h^k + ... + h^n - x^n }{h} \\)";
    var deriveeXPuissanceN4 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace \\frac{ n  x^{n-1}.h + \\binom{n}{2} x^{n-2} h^2 + + \\binom{n}{3} x^{n-3} h^3 + ... + \\binom{n}{k} x^{n-k} h^k + ... + h^n }{h} \\)";
    var deriveeXPuissanceN5 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace h.\\frac{ n  x^{n-1} + \\binom{n}{2} x^{n-2} h + + \\binom{n}{3} x^{n-3} h^2 + ... + \\binom{n}{k} x^{n-k} h^{k-1} + ... + h^{n-1} }{h} \\)";

    var deriveeXPuissanceN6 = "\\( \\Longleftrightarrow lim_{ h \\to 0} \\enspace n x^{n-1} + \\binom{n}{2} x^{n-2} h + + \\binom{n}{3} x^{n-3} h^2 + ... + \\binom{n}{k} x^{n-k} h^{k-1} + ... + h^{n-1}  \\)";

    var exemple1 = "\\( (x^2)' = 2x \\)";
    var exemple2 = "\\( (x^3)' = 3x^2 \\)";
    var exemple3 = "\\( (x^{10})' = 10x^9 \\)";
    var exemple4 = "\\( (x^{-1})' = -x^{-2} = -\\frac{1}{x^2} \\)";

    return  <>
               <p>La fonction de <MathJaxInline toShow={"$ x^n $"} /> est définie comme ceci :</p>
               <MathJaxDisplay toShow={xPuissanceN} demo />  
               <p>Nous allons démontrer que sa dérivée est : </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeXPuissanceN} />  
               </Container>

               <Title1 title={"1) Démonstration"} />
               <p>
                    Par définition, cette dérivée s'écrit au départ : 
               </p>
              <MathJaxDisplay toShow={deriveeXPuissanceN2} fRef={1} demo />

              <Aside>
                    <p>Mais on sait par la formule binomiale de Newton que : </p> 
                    <Container className="Focus">
                         <MathJaxDisplay toShow={aPlusBPuissanceN} />  
                    </Container>
                    <p>La notation <MathJaxInline toShow={"$ \\binom{n}{k} $"} /> correspond au nombre de combinaisons possibles de prendre <MathJaxInline toShow={"$ k $"} /> éléments parmis <MathJaxInline toShow={"$ n $"} /> éléments. On dit "<MathJaxInline toShow={"$ k $"} /> parmis <MathJaxInline toShow={"$ n $"} />" : </p>
                    <MathJaxDisplay toShow={binom} demo/>  
                    <p>Remplaçons <MathJaxInline toShow={"$ a $"} /> et <MathJaxInline toShow={"$ b $"} /> par <MathJaxInline toShow={"$ x $"} /> et <MathJaxInline toShow={"$ k $"} /> dans notre cas. On a alors :</p>
                    <MathJaxDisplay toShow={xPlusHPuissanceN} demo />
                    <MathJaxDisplay toShow={xPlusHPuissanceN2} fRef={2} demo />
               </Aside>

               <p>On injecte <MathJaxInline toShow={"$ (2) $"} /> dans <MathJaxInline toShow={"$ (1) $"} /> :</p>
               <MathJaxDisplay toShow={deriveeXPuissanceN3} demo />
               <p>On voit que les <MathJaxInline toShow={"$ x^n $"} /> s'annulent au numérateur : </p>
               <MathJaxDisplay toShow={deriveeXPuissanceN4} demo />
               <p>On factorise par <MathJaxInline toShow={"$ h $"} /> :</p>
               <MathJaxDisplay toShow={deriveeXPuissanceN5} demo />
               <p>On peut à présent simplifier par <MathJaxInline toShow={"$ h $"} /> :</p>
               <MathJaxDisplay toShow={deriveeXPuissanceN6} demo />
               <p>Quand <MathJaxInline toShow={"$ h \\to 0$"} />, tous les termes avec <MathJaxInline toShow={"$ h $"} /> disparaissent, et il ne reste que : </p>
               <Container className="Focus">
                    <MathJaxDisplay toShow={deriveeXPuissanceN} />  
               </Container>

               <Title1 title={"2) Exemples"} />
               <MathJaxDisplay toShow={exemple1} demo />
               <MathJaxDisplay toShow={exemple2} demo />
               <MathJaxDisplay toShow={exemple3} demo />
               <MathJaxDisplay toShow={exemple4} demo />
            </>
}

export default DeriveeDeXPuissanceN;