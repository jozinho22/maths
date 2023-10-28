import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const LeTriangleDePascal = () => {
   
    var aPlusB = "\\( (a+b)^0 = 1 \\)";
    var aPlusB1 = "\\( (a+b)^1 = a+b \\)";
    var aPlusB2 = "\\( (a+b)^2 = a^2 + 2ab + b^2 \\)";
    var aPlusB3 = "\\( (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 \\)";
    var aPlusB4 = "\\( (a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 +  b^4 \\)";

    var aPlusBPuissanceN = "\\( (a + b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k \\)";

    var pascal = "\\( (n = 0) \\enspace \\enspace  1 \\)";
    var pascal2 = "\\( (n = 1) \\enspace \\enspace 1 \\rightarrow 1 \\)";
    var pascal3 = "\\( (n = 2) \\enspace \\enspace 1 \\rightarrow 2 \\rightarrow 1 \\)";
    var pascal4 = "\\( (n = 3) \\enspace \\enspace 1 \\rightarrow 3 \\rightarrow 3  \\rightarrow 1 \\)";
    var pascal5 = "\\( (n = 4) \\enspace \\enspace 1 \\rightarrow 4 \\rightarrow 6 \\rightarrow 4 \\rightarrow 1 \\)";
    var pascal6 = "\\( (n = 5) \\enspace \\enspace 1  \\rightarrow 5  \\rightarrow 10  \\rightarrow 10  \\rightarrow 5  \\rightarrow 1 \\)";
    var pascal6bis = "\\( (n = 5) \\enspace \\enspace \\binom{5}{0}  \\rightarrow \\binom{5}{1}  \\rightarrow \\binom{5}{2}  \\rightarrow \\binom{5}{3}  \\rightarrow \\binom{5}{4}  \\rightarrow \\binom{5}{5} \\)";

    var sumKParmisN = "\\( \\sum_{k=0}^n \\binom{n}{k} = \\binom{n}{0} + \\binom{n}{1} + ... + \\binom{n}{n} = 2^n \\)";

    return  <>
                <p>On a cette suite de résultat les puissances de <MathJaxInline toShow={"$(a+b)$"} />:</p>
                <MathJaxDisplay toShow={aPlusB} demo />
                <MathJaxDisplay toShow={aPlusB1} demo />
                <MathJaxDisplay toShow={aPlusB2} demo />
                <MathJaxDisplay toShow={aPlusB3} demo />
                <MathJaxDisplay toShow={aPlusB4} demo />
                <p>On l'a vu au chapitre des <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.ELEM_CALCULUS}/les-identites-remarquables`} external>identités remarquables</Link>, la formule générale est la suivante :</p>

                <Container className="Focus">
                    <MathJaxDisplay toShow={aPlusBPuissanceN}/>
                </Container>  

                <p>Blaise Pascal a su modéliser le comportement de ces coefficients, en relation avec le binôme de Newton ci-dessus, notamment avec la formule des "<MathJaxInline toShow={"$k \\enspace \\acute{e}l\\acute{e}ments \\enspace parmis \\enspace n $"} />" : <MathJaxInline toShow={"$  \\binom{n}{k} $"} />.</p>  
                <p>À chaque indice <MathJaxInline toShow={"$n$"} />, on additionne les nombres deux à deux de gauche à droite et on inscrit le résultat en dessous.</p>
                <MathJaxDisplay toShow={pascal} demo />
                <MathJaxDisplay toShow={pascal2} demo />
                <MathJaxDisplay toShow={pascal3} demo />
                <MathJaxDisplay toShow={pascal4} demo />
                <MathJaxDisplay toShow={pascal5} demo />
                <MathJaxDisplay toShow={pascal6} demo />
                <p>Chaque coefficient du binome <MathJaxInline toShow={"$(a+b)^n$"} /> est en réalité de le résultat <MathJaxInline toShow={"$\\binom{n}{k}$"} /> pour l'élément <MathJaxInline toShow={"$k$"} />.</p>
                <MathJaxDisplay toShow={pascal6bis} demo />

                <p>Il est possible de <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/raisonnement-par-recurrence`} external>démontrer par récurrence</Link> que :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={sumKParmisN}/>
                </Container>  
            </>
}

export default LeTriangleDePascal; 