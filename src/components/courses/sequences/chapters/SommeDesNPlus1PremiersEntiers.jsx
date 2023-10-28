import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const SommeDesNPlus1PremiersEntiers = () => {

    var snGenResult = "\\( \\sum_{k=0}^n \\enspace k = \\frac{n(n+1) }{2} \\)";

    var sn = "\\( S_n = \\underbrace{0 + 1 + 2 + \\enspace ... \\enspace +  (n-1) + n} _\\text{(n+1) termes} \\)";
    var sn2 = "\\( S_n = \\underbrace{n + (n-1) + \\enspace ... \\enspace + 2 + 1  + 0} _\\text{(n+1) termes} \\)";

    var sumSn = "\\( 2S_n = n(n+1)  \\)";
    var sumSn2 = "\\( S_n =  \\frac{n(n+1)}{2} \\)";

    return  <>
                <p>La somme des <MathJaxInline toShow={"$ (n+1) $"} /> premiers entiers (à savoir de <MathJaxInline toShow={"$ 0$"} /> à <MathJaxInline toShow={"$ n $"} />) vaut :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={snGenResult} />  
                </Container>

                <Title1 title="Démonstration" />
                <p>Appelons cette somme <MathJaxInline toShow={"$ S_n $"} />.</p>
                <MathJaxDisplay toShow={sn} demo />
                <p>On réécrit la même somme à l'envers :</p>
                <MathJaxDisplay toShow={sn2} demo />
                <p>On additionne les deux sommes <MathJaxInline toShow={"$ S_n $"} /> en faisant correspondre les termes un à un :</p>
                <MathJaxDisplay toShow={sumSn} demo />
                <MathJaxDisplay toShow={sumSn2} demo />
            </>
}

export default SommeDesNPlus1PremiersEntiers;