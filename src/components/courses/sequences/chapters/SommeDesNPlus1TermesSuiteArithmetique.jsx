import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const SommeDesNPlus1TermesSuiteArithmetique = () => {

     var snGenResult = "\\( \\sum_{k=0}^n \\enspace u_n  = (n+1) \\left( \\frac{u_0 + u_n}{2}\\right) \\)";

    var sn = "\\( A_n = u_0 + u_1 + u_2 + ...+ u_k + ...+ u_{n-1} + u_n \\)";
    var sn2 = "\\( A_n = u_0 + u_0 + r + u_0 + 2r \\enspace + \\enspace ... \\enspace + \\enspace u_0 + kr \\enspace + \\enspace ... \\enspace + u_0 + (n-1)r + u_0 + nr \\)";
    var sn2bis = "\\( A_n = u_0(n+1) + r (1 + 2 \\enspace + \\enspace ... \\enspace + \\enspace k \\enspace + \\enspace ... \\enspace + (n-1) + n) \\)";
    var sn3 = "\\( A_n = u_0(n+1) + r \\left(\\sum_{k=0}^n \\enspace k \\right) \\)";
    var sn4 = "\\( A_n = u_0(n+1) + r \\frac{(n+1) n}{2} \\)";
    var sn5 = "\\( A_n = (n+1)  \\left(u_0 +\\frac{nr}{2}\\right) \\)";
     var sn6 = "\\( A_n = (n+1) \\left( \\frac{2u_0 + nr}{2}\\right)  \\)";
     var sn7 = "\\( A_n = (n+1)\\left( \\frac{u_0 + u_n}{2}\\right)  \\)";


    return  <>
                <p>La somme des <MathJaxInline toShow={"$ (n + 1) $"} /> termes d'une suite arithmétique (à savoir de <MathJaxInline toShow={"$ 0$"} /> à <MathJaxInline toShow={"$ n $"} />) vaut :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={snGenResult} />  
                </Container>

                <Title1 title="Démonstration" />
                <p>Appelons cette somme <MathJaxInline toShow={"$ A_n $"} />.</p>
                <MathJaxDisplay toShow={sn} demo />
                <MathJaxDisplay toShow={sn2} demo />
                <MathJaxDisplay toShow={sn2bis} demo />
                <MathJaxDisplay toShow={sn3} demo />
                <MathJaxDisplay toShow={sn4} demo />
                <MathJaxDisplay toShow={sn5} demo />
                <MathJaxDisplay toShow={sn6} demo />
                <MathJaxDisplay toShow={sn7} demo />
            </>
}

export default SommeDesNPlus1TermesSuiteArithmetique;