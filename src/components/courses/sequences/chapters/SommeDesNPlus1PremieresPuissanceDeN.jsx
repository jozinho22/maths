import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const SommeDesNPlus1PremieresPuissanceDeN = () => {

    var qnResult = "\\( \\sum_{k=0}^n q^n = \\frac{q^{n+1} - 1}{q-1}\\)";

    var qn = "\\( Q_n = q^0 + q^1 + q^2 + ... + q^{n-1} + q^{n} \\)";
    var qn2 = "\\( q.Q_n = q (q^0 + q^1 + q^2 + ... + q^{n-1} + q^{n}) \\)";
    var qn3 = "\\( q.Q_n = q + q^2 + q^3 + ... + q^{n} + q^{n+1} \\)";
    var qn4 = "\\( q.Q_n = Q_{n+1} = \\sum_{k=0}^{n+1} \\enspace q^k \\)";

    var qn5 = "\\( q.Q_n - Q_n = \\underline{q + q^2 + q^3 + ... + q^{n}} + q^{n+1} - (q^0 + \\underline{q + q^2 + ... + q^{n-1} + q^{n}}) \\)";
    var qn6 = "\\( q.Q_n - Q_n = q^{n+1} - q^0 \\)";
    var qn7 = "\\( Q_n = \\frac{q^{n+1} - 1}{q-1}  \\)";


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
                <p>Nous allons alors effectuer un téléscopage ; tous les termes intermédiaires vont s'annhiler un à un.</p>
                <MathJaxDisplay toShow={qn5} demo />
                <MathJaxDisplay toShow={qn6} demo />
                <MathJaxDisplay toShow={qn7} demo />
            </>
}

export default SommeDesNPlus1PremieresPuissanceDeN;