import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import Constants from '../../../immutable/Constants';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';
import Aside from '../../helpers/Aside';

const LesIdentitesRemarquables = () => {
   
    var aPlusBCarre = "\\( (a+b)^2 = a^2 + 2ab + b^2 \\)";
    var aMinusBCarre = "\\( (a-b)^2 = a^2 - 2ab + b^2 \\)";
    var aCarreMinusBCarre = "\\( a^2 - b^2 = (a+b)(a-b)  \\)";

    var aPlusBPlusCCarre = "\\( (a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ac \\)";

    var aPlusBCube = "\\( (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 \\)";
    var aMinusBCube = "\\( (a-b)^3 = a^2 - 3a^2b + 3ab^2 - b^3 \\)";
    var aCubeMinusBCube = "\\( a^3 - b^3 = (a-b) (a^2 + ab + b^2) \\)";

    var aCubePlusBCube = "\\(  a^3 + b^3 = (a+b)(a^2 - ab + b^2) \\)";

    var aPlusBPuissanceN = "\\( (a + b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k \\)";
    var aPlusBPuissance4 = "\\( (a + b)^4 = \\sum_{k=0}^4 \\binom{4}{k} a^{4-k} b^k \\)";
    var aPlusBPuissance42 = "\\( (a + b)^4 = \\binom{4}{0} a^{4} + \\binom{4}{1}a^{3}b + \\binom{4}{2}a^{2}b^2  + \\binom{4}{3}ab^3 +  \\binom{4}{4}b^4 \\)";
    var binom = "\\( \\binom{n}{k} = \\frac{n!}{k!(n - k)!} \\)";
    var aPlusBPuissance43 = "\\( (a + b)^4 = \\frac{4!}{0!4!} a^{4} + \\frac{4!}{1!3!}a^{3}b + \\frac{4!}{2!2!}a^{2}b^2  +  \\frac{4!}{3!1!}ab^3 +  \\frac{4!}{4!0!}b^4 \\)";
    var aPlusBPuissance44 = "\\( (a + b)^4 = a^{4} + 4a^{3}b + 6a^{2}b^2  +  4ab^3 +  b^4 \\)";

    var aPuissanceNMinusBPuissanceN = "\\( a^n - b ^n =  (a - b) \\sum_{k=0}^{n-1} a^{n - k - 1}b^k \\)";
    var aPuissance4MinusBPuissance4 = "\\( a^4 - b ^4 = (a - b) \\sum_{k=0}^{3} a^{3 - k}b^k \\)";
    var aPuissance4MinusBPuissance42 = "\\( a^4 - b ^4 = (a - b) (a^3 + a^2b + ab^2 + b^3) \\)";


    return  <>
                <Title1 title={"À la puissance 2"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={aPlusBCarre}/>
                    <MathJaxDisplay toShow={aMinusBCarre}/>
                    <MathJaxDisplay toShow={aCarreMinusBCarre}/>
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={aPlusBPlusCCarre}/>
                </Container>

                <Title1 title={"À la puissance 3"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={aPlusBCube}/>
                    <MathJaxDisplay toShow={aMinusBCube}/>
                    <MathJaxDisplay toShow={aCubeMinusBCube}/>
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={aCubePlusBCube}/>
                </Container>

                <Title1 title={"À la puissance n"} />
                <Title2 title={"a) Addition"} />
                <p>La formule du binôme de Newton ci-dessous est très liée au <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.ELEM_CALCULUS}/le-triangle-de-pascal`} external>triangle de pascal</Link> dans le calcul des coefficients.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={aPlusBPuissanceN}/>
                </Container>
                <p>Exemple :</p>
                <MathJaxDisplay toShow={aPlusBPuissance4} demo />
                <MathJaxDisplay toShow={aPlusBPuissance42} demo />
                <Aside>
                    <p>On utilise la formule du dénombrement "k parmis n".</p>
                    <MathJaxDisplay toShow={binom} demo />
                    <p>Par convention, <MathJaxInline toShow={"$0! = 1$"} />.</p>
                </Aside>
                <MathJaxDisplay toShow={aPlusBPuissance43} demo />
                <MathJaxDisplay toShow={aPlusBPuissance44} demo />

                <Title2 title={"b) Soustraction"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={aPuissanceNMinusBPuissanceN}/>
                </Container>             
                <p>Exemple :</p>
                <MathJaxDisplay toShow={aPuissance4MinusBPuissance4}demo />   
                <MathJaxDisplay toShow={aPuissance4MinusBPuissance42}demo />   
            </>
}

export default LesIdentitesRemarquables; 