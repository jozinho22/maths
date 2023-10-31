import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const Exemple = () => {

    var limDevPol = "\\( f_{n, 0}(x) = a_0 + a_1.x + a_2.x^2 + ... + a_{n-1}.x^{n-1} + a_n.x^n \\)";

    var limDev = "\\( f_{n, 0}(x) = f(x) + \\frac{f^{(1)}(x)}{1!} + + \\frac{f^{(2)}(x)^2}{2!} + ... + \\frac{f^{(n)}(x)^n}{n!}  + o(x^{n+1})\\)";

    var a0 = "\\( a_ 0 = f^{(0)}(0) = sin(0) = 0 \\)";
    var a1 = "\\( a_ 1 = f^{(1)}(0) = cos(0) = 1 \\)";
    var a2 = "\\( a_ 2 = f^{(2)}(0) = -sin(0) = 0 \\)";
    var a3 = "\\( a_ 3 = f^{(3)}(0)) = -cos(0) = -1 \\)";
    var a4 = "\\( a_ 4 = f^{(4)}(0) = sin(0) = 0 \\)";
    var a5 = "\\( a_ 5 = f^{(5)}(0) = ...etc \\)";

    var limDevSin = "\\( sin(x) =  x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7} + ... + (-1)^n . \\frac{x^{2n+1}}{(2n+1)!}+ o(x^{2n+1})\\)";

    return  <>
                <p>Tentons de calculer un <MathJaxInline toShow={"$DL_n(0) $"} /> se <MathJaxInline toShow={"$sin(x)$"} />.</p>
                <p>On a la formule ci-dessous comme équivalent : </p>
                <MathJaxDisplay toShow={limDevPol} demo />
                <p>Il ne nous reste plus qu'à calculer tous les coefficients <MathJaxInline toShow={"$ a_k = \\frac{f^{(k)}(x)}{k!} $"} />.</p>
                <MathJaxDisplay toShow={limDev} demo />
                <p>Posons <MathJaxInline toShow={"$ f(x) = sin(x) $"} />.</p>
                <MathJaxDisplay toShow={a0} demo />
                <MathJaxDisplay toShow={a1} demo />
                <MathJaxDisplay toShow={a2} demo />
                <MathJaxDisplay toShow={a3} demo />
                <MathJaxDisplay toShow={a4} demo />
                 <MathJaxDisplay toShow={a5} demo />
                <p>On voit que les valeurs vont se répéter, on peut alors conclure.</p>
                <p>On obtient : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={limDevSin} />
                </Container>
            </>
}

export default Exemple;