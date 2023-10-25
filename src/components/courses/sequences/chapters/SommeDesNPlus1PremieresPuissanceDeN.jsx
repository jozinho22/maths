import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Aside from '../../helpers/Aside';

const SommeDesNPlus1PremieresPuissanceDeN = () => {

    var qnResult = "\\( \\sum_{k=0}^n q^k = \\frac{q^{n+1} - 1}{q-1}\\)";

    var qn = "\\( Q_n = q^0 + q^1 + q^2 + ... + q^{n-1} + q^{n} \\)";
    var qn2 = "\\( q.Q_n = q (q^0 + q^1 + q^2 + ... + q^{n-1} + q^{n}) \\)";
    var qn3 = "\\( q.Q_n = q + q^2 + q^3 + ... + q^{n} + q^{n+1} \\)";
    var qn4 = "\\( q.Q_n = Q_{n+1} = \\sum_{k=0}^{n+1} \\enspace q^k \\)";

    var qnTelesc = "\\( q.Q_n - Q_n = Q_{n+1} - Q_n = \\sum_{k=0}^{n+1} \\enspace (q^{k + 1} - q^{k}) \\)";

    var qn5 = "\\( q.Q_n - Q_n =  \\sum_{k=0}^{n+1} \\enspace (q^{k + 1} - q^{k})  \\)";
    var qn6 = "\\( q.Q_n - Q_n = q^{n+1} - q^0 \\)";
    var qn7 = "\\( Q_n = \\frac{q^{n+1} - 1}{q-1}  \\)";

    var telescopage = "\\( u_n = \\sum_{k=0}^n (a_{k+1} - a_k), \\enspace (avec \\enspace (a_n) \\enspace une \\enspace suite)  \\)";
    var telescopage2 = "\\( \\sum_{k=0}^n (a_{k+1} - a_k) = \\underline{a_1 + a_2 + a_3  + ... + ...+ a_n} + a_{n+1} - (a_0 + \\underline{a_1 + a_2  + ... + ...+ a_n}) \\)";
    var telescopage3 = "\\( \\sum_{k=0}^n (a_{k+1} - a_k) = a^{n+1} - a_0\\)";

    return  <>
                <p>La somme des <MathJaxInline toShow={"$ (n+1) $"} /> premières puissances de <MathJaxInline toShow={"$ n $"} /> (à savoir de <MathJaxInline toShow={"$ 0$"} /> à <MathJaxInline toShow={"$ n $"} />) vaut : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={qnResult} />  
                </Container>

                <Title1 title="Démonstration" />
                <p>Appelons cette somme <MathJaxInline toShow={"$ Q_n $"} />.</p>
                <MathJaxDisplay toShow={qn} demo />
                <p>On multiplie par <MathJaxInline toShow={"$ q$"} /> :</p>
                <MathJaxDisplay toShow={qn2} demo />
                <p>On additionne les deux sommes <MathJaxInline toShow={"$ Q_n $"} /> en faisant correspondre les termes un à un :</p>
                <MathJaxDisplay toShow={qn3} demo />
                <p>On s'aperçoit que : </p>
                <MathJaxDisplay toShow={qn4} demo />
                <p>On a alors : </p>
                <MathJaxDisplay toShow={qnTelesc} demo />

                <Aside>
                    <p>Lorsque nous sommes face à une suite  de type :</p>
                    <MathJaxDisplay toShow={telescopage} demo />
                    <p>Les termes vont un à un s'annihiler et il ne restera que :</p>
                    <MathJaxDisplay toShow={telescopage2} demo />
                    <MathJaxDisplay toShow={telescopage3} demo />
                </Aside>
               
                <MathJaxDisplay toShow={qn5} demo />
                 <p>On effectue le téléscopage avec <MathJaxInline toShow={"$ (a_k = q^k) $"} />.</p>
                <MathJaxDisplay toShow={qn6} demo />
                <MathJaxDisplay toShow={qn7} demo />
            </>
}

export default SommeDesNPlus1PremieresPuissanceDeN;