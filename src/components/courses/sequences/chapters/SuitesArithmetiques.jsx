import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const SuitesArithmetiques = () => {

    var suiteArith = "\\( \\forall n \\in \\mathbb{N}, u_{n+1} = u_n + r \\)";
    var suiteArith2 = "\\( \\forall n \\in \\mathbb{N}, u_{n} = u_0 + nr \\)";

    var suiteArithDemo = "\\( u_1 = u_0 + r \\)";
    var suiteArithDemo2 = "\\( u_2 = u_1 + r \\)";
    var suiteArithDemo3 = "\\( u_{n-1} = u_{n-2} + r \\)";
    var suiteArithDemo4 = "\\( u_{n} = u_{n-1} + r \\)";
    var suiteArithDemo5 = "\\( u_1 + u_2 + ... +  u_{n-1} + \\underline{u_{n}} = \\underline{u_o} +  u_1 + u_2 + ... +  u_{n-1} + u_{n} + \\underline{nr}  \\)";

    return  <>
                <Title1 title={"Définitions"} />
                <p>On dit qu'une suite est arithmétique lorsqu'il existe un réel <MathJaxInline toShow={"$ r $"} /> tel que :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={suiteArith} />  
                </Container>
                <p><MathJaxInline toShow={"$ r $"} /> est appellé raison de la suite <MathJaxInline toShow={"$ (u_n) $"} />.</p>

                <Title1 title={"Théorème"} />
                <p>Si <MathJaxInline toShow={"$ (u_n) $"} /> est une suite arithmétique de premier terme <MathJaxInline toShow={"$ u_0 $"} /> et de raison <MathJaxInline toShow={"$ r $"} />, alors : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={suiteArith2} />  
                </Container>

                <Title1 title={"Démonstration"} />
                <MathJaxDisplay toShow={suiteArithDemo} demo />
                <MathJaxDisplay toShow={suiteArithDemo2} demo />
                <MathJaxDisplay toShow={suiteArithDemo3} demo />
                <MathJaxDisplay toShow={suiteArithDemo4} demo />
                <MathJaxDisplay toShow={suiteArithDemo5} demo />
            </>
}

export default SuitesArithmetiques;