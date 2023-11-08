import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';
import Title2 from '../../helpers/Title2';

const PrincipeDeSuperposition = () => {

    var linDeriv = "\\( d\\acute{e}riv\\acute{e}es : (\\lambda f  + \\mu g)' = \\lambda f'  + \\mu g'  \\)";
    var linPrimitives = "\\( primitives :  \\int_a^b \\Bigl(\\lambda .f(t) + \\mu. g(t)\\Bigr) dt = \\lambda \\int_a^b f(t) dt + \\mu \\int_a^b g(t) dt \\)";

    var edl1 = "\\( y'(x) + a(x).y(x) = f(x) \\)";
    var fEqualsFiX = "\\( f(x) = \\lambda_1. f_1(x) + \\lambda_2 .f_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n .f_n(x)  \\enspace (avec  \\enspace n \\in \\mathbb{N}, \\enspace \\{ \\lambda_1,   \\lambda_2, ... ,  \\lambda_n \\} \\in \\mathbb{R} ) \\)";
 
    var edl1F1X = "\\( y_1'(x) + a(x).y_1(x) = f_1(x) \\)";
    var edl1F2X = "\\( y_2'(x) + a(x).y_2(x) = f_2(x) \\)";
    var edl1FKX_ = "\\( .............................. \\)";
    var edl1FKX = "\\( y_k'(x) + a(x).y_k(x) = f_k(x) \\)";
    var edl1FNX = "\\( y_n'(x) + a(x).y_n(x) = f_n(x) \\)"; 
    var edl1FiXSolutions = "\\( y_k(x) \\enspace solution \\enspace de \\enspace (\\tilde{E_k}) \\Longleftrightarrow \\lambda_1. y_1(x) + \\lambda_2. y_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n .y_n(x)  \\enspace solution  \\enspace particuli\\overset{`}{e}re \\enspace de \\enspace (E) \\)";

    var fEqualsFiXExemple = "\\( f(x) = 3cos(x) - e^x -1  \\)";
    var edl1F1XExemple = "\\( y_1'(x) + a(x).y_1(x) = cos(x) \\)";
    var edl1F2XExemple = "\\( y_2'(x) + a(x).y_2(x) = e^{x} \\)";
    var edl1F3XExemple = "\\( y_3'(x) + a(x).y_3(x) = 1 \\)";

    var edl1FiXSolutionsExemple = "\\( y_t(x) = 3. y_1(x) - y_2(x) - y_3(x) \\enspace solution  \\enspace particuli\\overset{`}{e}re \\enspace de \\enspace (E) \\)";

    return  <>
                <p>Avant de voir le principe de superposition, un point sur la linéarité des équations différentielles.</p>
                
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
                <MathJaxDisplay toShow={fEqualsFiX} fRef={"\\tilde{E}"} demo />

                <p>Nous avons alors une série d'équations suivantes :</p>
                <MathJaxDisplay toShow={edl1F1X} fRef={"\\tilde{E_1}"} demo />
                <MathJaxDisplay toShow={edl1F2X} fRef={"\\tilde{E_2}"} demo />
                <MathJaxDisplay toShow={edl1FKX_} demo />
                <MathJaxDisplay toShow={edl1FKX} fRef={"\\tilde{E_k}"} demo />
                <MathJaxDisplay toShow={edl1FKX_} demo />
                <MathJaxDisplay toShow={edl1FNX} fRef={"\\tilde{E_n}"} demo />
                <p>Où chaque fonction <MathJaxInline toShow={"$ y_k(x) $"} /> est respectivement une solution particulière de chacune des équations <MathJaxInline toShow={"$ (\\tilde{E_k}) $"} />.</p>

                <p>Alors, le principe de superposition nous dit que la solution particulière totale de <MathJaxInline toShow={"$ (E) $"} /> est une combinaison linéaire de ces solutions, en adéquation avec les coefficients relatifs <MathJaxInline toShow={"$ \\lambda_1, \\lambda_2,  ..., \\lambda_n  $"} /> .</p>

                <Container className="Focus">
                    <MathJaxDisplay toShow={edl1FiXSolutions} />
                </Container>

                <Title2 title={"Exemple de superposition"} />
                <p>SI on se tente de résoudre :</p>
                <MathJaxDisplay toShow={fEqualsFiXExemple} fRef={"E"} demo />
                <p>Nous devons d'abord étudier les trois différentes solutions particulières <MathJaxInline toShow={"$ y_1, y_2,y_3 $"} /> des équations <MathJaxInline toShow={"$ (\\tilde{E_1}), (\\tilde{E_2}), (\\tilde{E_3}) $"} /> suivantes :</p>
                <MathJaxDisplay toShow={edl1F1XExemple} fRef={"\\tilde{E_1}"} demo />
                <MathJaxDisplay toShow={edl1F2XExemple} fRef={"\\tilde{E_2}"} demo />
                <MathJaxDisplay toShow={edl1F3XExemple} fRef={"\\tilde{E_3}"} demo />
                <p>On aura alors comme solution particulière la combinaison linéaire :</p>
                <MathJaxDisplay toShow={edl1FiXSolutionsExemple} demo />

                
            </>
}

export default PrincipeDeSuperposition;