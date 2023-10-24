import React from 'react';
import { Container } from 'react-bootstrap';
import ImageZoom from '../../helpers/ImageZoom';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

import distribFact from '../assets/distribFact.png';

const LaDistributiviteLaFactorisation = () => {

    var n = 0;

    var distrib = "\\( A = a \\times (b + c) \\)";
    var distrib2 = "\\( A = ab + ac \\)";

    var distribBis = "\\( B = (2x + 5) \\times (1 + x) \\)";
    var distribBis2 = "\\( B =  2x + 2x^2 + 5 + 5x \\)";
    var distribBis3 = "\\(  B =  2x^2 + 7x + 5  \\)";

    var idRem1 = "\\( (a + b)^2 = a^2 + 2ab + b^2  \\)";
    var idRem2 = "\\( (a - b)^2 = a^2 - 2ab + b^2  \\)";
    var idRem3 = "\\( (a + b)(a - b) = a^2 - b^2  \\)";

    var idRem1Example = "\\( C = x^2 + 2x + 1 \\)";
    var idRem1Example2 = "\\( C = (x+1)^2 \\)";

    var idRem3Example = "\\( D = x^2 - 9 \\)";
    var idRem3Example2 = "\\( D = (x + 3)(x - 3) \\)";

    var idRemCanonExample = "\\( E = x^2 + 2x \\)";
    var idRemCanonExample2 = "\\( E = C - 1\\)";
    var idRemCanonExample3 = "\\( E = (x+1)^2 - 1\\)";

    return  <>
                <Title1 title={"1) La distributivité"} />
                <p>
                    On appelle ça plus communément le développement d'expressions. Il va s'agir de passer d'une forme factorisée à une forme développée.
                </p>
                <p>Par exemple, prenons l'expression :</p>
                <MathJaxDisplay toShow={distrib} demo />
                <p>Distribuer cette expression consiste à multiplier entre chaque terme de chaque partie, soit :</p>
                <MathJaxDisplay toShow={distrib2} demo />
                <p>Dans cette exemple il n'y avait qu'un terme à gauche, prenons un exemple plus complexe : </p>
                <MathJaxDisplay toShow={distribBis} demo />
                <MathJaxDisplay toShow={distribBis2} demo />
                <MathJaxDisplay toShow={distribBis3} demo />
                
                <Title1 title={"2) La factorisation"} />
                <Title2 title={"2-a) Par un facteur commun"} />
                <p>Reprenons l'expression <MathJaxInline toShow={"$A$"} /> et tentons de la factoriser.</p>
                <MathJaxDisplay toShow={distrib2} demo />
                <p>On s'aperçoit alors que notre facteur commun est <MathJaxInline toShow={"$a$"} />, on le met devant et additionne les éléments qui lui étaient multipliés.</p>
                <MathJaxDisplay toShow={distrib} demo />
                <Title2 title={"2-b) Par une identité remarquable"} />
                <p>Il existe une autre méthode pour factoriser, c'est reconnaître des identités remarquables.</p>
                <p>Les trois identités remarquables du second degré sont : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={idRem1}/>
                    <MathJaxDisplay toShow={idRem2}/>
                    <MathJaxDisplay toShow={idRem3}/>
                </Container>
                <p>Ainsi si l'on aperçoit l'expression :</p>
                <MathJaxDisplay toShow={idRem1Example} demo />
                <p>On peut la factoriser en : </p>
                <MathJaxDisplay toShow={idRem1Example2} demo />
                <p>De même :</p>
                <MathJaxDisplay toShow={idRem3Example} demo />
                <p>Peut être factorisée en : </p>
                <MathJaxDisplay toShow={idRem3Example2} demo />

                <Title1 title={"3) Lien entre développement et factorisation"} />
                <p>On s'aperçoit que le développement va dans un sens, et la factorisation dans l'autre.</p>
                <ImageZoom src={distribFact} name="Relation entre développement et factorisation" n={++n} />
                <p>Ainsi, si on factorise puis on développe, on retombe sur nos pas.</p>

                <Title1 title={"4) Forme canonique"} />
                <p>La forme canonique d'une expression, c'est presque sa forme factorisée, à un terme près.</p>
                <p>Si on reprend par exemple l'expression <MathJaxInline toShow={"$C$"} /> à laquelle on a retiré son dernier terme, on alors une nouvelle expression <MathJaxInline toShow={"$E$"} /> :</p>
                <MathJaxDisplay toShow={idRemCanonExample} demo />
                <p>On voit que <MathJaxInline toShow={"$C$"} /> est presque <MathJaxInline toShow={"$E$"} />, à <MathJaxInline toShow={"$1$"} /> près. </p>
                <MathJaxDisplay toShow={idRemCanonExample2} demo />
                <p>Mais on a vu plus que </p>
                <MathJaxDisplay toShow={idRem1Example2} demo />
                <p>Soit : </p>
                <MathJaxDisplay toShow={idRemCanonExample3} demo />
                <p>Cette façon de factoriser va notamment nous servir pour <Link url={`${PagesConstants.COURS}${PagesConstants.PREFIX}${CoursesConstants.EQ_2_DEG}/resolution`} external>les équations du second degré</Link>.</p>
            </>
}

export default LaDistributiviteLaFactorisation; 