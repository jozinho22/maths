import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const PrincipeDeSuperposition = () => {

    var linDeriv = "\\( d\\acute{e}riv\\acute{e}es : (\\lambda f  + \\mu g)' = \\lambda f'  + \\mu g'  \\)";
    var linPrimitives = "\\( primitives :  \\int_a^b \\Bigl(\\lambda .f(t) + \\mu. g(t)\\Bigr) dt = \\lambda \\int_a^b f(t) dt + \\mu \\int_a^b g(t) dt \\)";

    var edl1 = "\\( y'(x) + a(x).y(x) = f(x) \\)";
    var fEqualsFiX = "\\( f(x) = \\lambda_1. f_1(x) + \\lambda_2 .f_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n .f_n(x)  \\enspace (avec  \\enspace n \\in \\mathbb{N}, \\enspace \\{ \\lambda_1,   \\lambda_2, ... ,  \\lambda_n \\} \\in \\mathbb{R} ) \\)";
 
    var edl1FiXSolutions = "\\( y_k(x) \\enspace solution \\enspace de \\enspace (E_k) \\Longleftrightarrow \\lambda_1. y_1(x) + \\lambda_2. y_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n .y_n(x)  \\enspace solution  \\enspace de \\enspace (E) \\)";

    return  <>
                <p>Avant de passer à la résolution, un point sur la linéarité des équations différentielles.</p>
                
                <Title1 title={"Linéarité"} />
                <p><Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/tableau-recap-operations-sur-les-derivees`} external>Les dérivées</Link> ainsi que <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PRIMITIVES_INTEGRATION}/linearite`} external> les primitives/intégrales</Link> possèdent toutes les deux cette propriété,  que l'on peut résumer par :</p>
                <p>Soit <MathJaxInline toShow={"$ (\\lambda, \\enspace \\mu) \\in \\mathbb{R}^2 $"} />, </p>
               
                <Container className="Focus">
                    <MathJaxDisplay toShow={linDeriv}  />
                    <MathJaxDisplay toShow={linPrimitives}  />
                </Container>

                <Title1 title={"Principe de superposition"} />
                <p>Soit <MathJaxInline toShow={"$ y(x) $"} />, une fonction et <MathJaxInline toShow={"$ y'(x) $"} /> sa dérivée.</p>
                <p><MathJaxInline toShow={"$ a(x) $"} /> et <MathJaxInline toShow={"$f(x) $"} /> deux fonctions.</p>
                <p>Si une équation différentielle linéaire du premier ordre est de la forme :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={edl1} fRef={"E"} demo  />
                </Container>
                <p>Et si <MathJaxInline toShow={"$ f(x) $"} /> est une combinaison linéaire telle que :</p>
                <MathJaxDisplay toShow={fEqualsFiX} fRef={"E"} demo />
                <p>Alors, le principe de superposition nous dit que la solution particulière totale de <MathJaxInline toShow={"$ (E) $"} /> est une combinaison linéaire de ces solutions, en adéquation avec les coefficients relatifs <MathJaxInline toShow={"$ \\lambda_1, \\lambda_2,  ..., \\lambda_n  $"} /> .</p>

                <Container className="Focus">
                    <MathJaxDisplay toShow={edl1FiXSolutions} />
                </Container>
            </>
}

export default PrincipeDeSuperposition;