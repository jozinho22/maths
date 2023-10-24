import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const SommeDesNPlus1TermesSuiteGeometrique = () => {

    var gnGenResult = "\\( \\sum_{k=0}^n \\enspace v_n = v_0.\\frac{q^{n+1} - 1}{q-1} \\)";

    var gn = "\\( G_n = v_0 + v_1 + v_2 + ...+ v_{n-1} + v_n \\)";
    var gn2 = "\\( G_n = v_0 + v_0.q +  v_0.q^2 + ... + v_0.q^{n-1} + v_0.q^{n}\\)";
    var gn3 = "\\( G_n = v_0 (1 + q + q^2 + ... +q^{n-1} + q^{n}) \\)";
    var gn4 = "\\( G_n = v_0 .\\left(\\sum_{k=0}^n q^n \\right) \\)";
    var gn5 = "\\( G_n = v_0 .\\frac{q^{n+1} - 1}{q-1} \\)";

    return  <>
                <p>La somme des <MathJaxInline toShow={"$ (n + 1) $"} /> termes d'une suite géométrique (à savoir de <MathJaxInline toShow={"$ 0$"} /> à <MathJaxInline toShow={"$ n $"} />).</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={gnGenResult} />  
                </Container>

                <Title1 title="Démonstration" />
                <p>Appelons cette somme <MathJaxInline toShow={"$ G_n $"} />.</p>
                <MathJaxDisplay toShow={gn} demo />
                <MathJaxDisplay toShow={gn2} demo />
                <MathJaxDisplay toShow={gn3} demo />
                <MathJaxDisplay toShow={gn4} demo />
                <MathJaxDisplay toShow={gn5} demo />
            </>
}

export default SommeDesNPlus1TermesSuiteGeometrique;