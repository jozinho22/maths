import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import recurrentSequences from '../assets/recurrentSequences.png';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';
import ImageZoom from '../../helpers/ImageZoom';

const TheoremeDeLaConvergenceUniforme = () => {

    var n = 0;
    var convergenceU = "\\( (u_n) \\ croissante \\enspace et \\enspace \\forall n \\in \\mathbb{N}, \\enspace u_n \\leq M \\Longrightarrow (u_n) \\enspace converge \\)";
    var convergenceUNeg = "\\( (u_n) \\ d \\acute{e} croissante \\enspace et \\enspace \\forall n \\in \\mathbb{N}, \\enspace u_n \\geq m \\Longrightarrow (u_n) \\enspace converge \\)";

    var sequencesRecur = "\\( \\Biggl\\{ \\begin{gather*} u_0 = 0 \\\\  \\enspace \\enspace \\enspace u_{n + 1} = \\sqrt{u_n + 2} \\end{gather*} \\)";

    var f =   "\\( f(x) = \\sqrt{x + 2}\\)";
    var fPrim =   "\\( \\Longrightarrow f'(x) = \\frac{1}{2\\sqrt{x + 2}} > 0\\)";
    var enc1 =   "\\( u_0  < u_1 \\)";
    var enc2 =   "\\( f(u_0)  < f(u_1) \\Longleftrightarrow u_1  < u_2 \\)";
    var enc3 =   "\\( f(u_{n-1}) < f(u_n) \\)";
    var enc4 =   "\\(  u_n < u_{n+1} \\)";

    var hypRecurr = "\\( \\forall n \\geq 0, \\enspace u_k \\leq 2 \\)";

    var limUnRecurr4 = "\\( l  = f(l) \\)";

    var limUnRecurr5 = "\\( x = \\sqrt{x + 2} \\)";
    var limUnRecurr6 = "\\( \\Longleftrightarrow x^2 = x + 2 \\)";
    var limUnRecurr7 = "\\( \\Longleftrightarrow  x^2 - x - 2 = 0 \\)";

    var limUnRecurr8 = "\\( S = \\{ x_1 = -1, \\enspace x_2 = 2 \\} \\)";

    var limUnRecurr9 = "\\( lim_{n \\to +\\infty} \\enspace (u_n) = 2 \\)";

    return  <>
                <Title1 title={"Théorème de la convergence uniforme"} />
                <p>Toute suite croissante et majorée converge.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={convergenceU} />  
                </Container>
                <p>De même, toute suite décroissante et minorée converge.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={convergenceUNeg} />  
                </Container>

                <p>Le théorème affirme que la suite converge, mais ne dit pas vers quoi.</p>
                <p>Attention, car il existe des cas de suites convergentes qui n'entrent pas dans les deux cas précédents.</p>
                <p>Par exemple, <MathJaxInline toShow={"$ u_n = \\left(-\\frac{1}{2}\\right)^n $"} /> converge vers <MathJaxInline toShow={"$0$"} /> mais n'a pas de sens de variations.</p>

                <Title1 title={"Exemple"} />
                <p>Reprenons le même exemple que précédemment :</p>
                <MathJaxDisplay toShow={sequencesRecur} demo />  
                <ImageZoom src={recurrentSequences} name="Suite récurrente convergente" n={++n} />

                <p>Le graphique suggère que <MathJaxInline toShow={"$ (u_n) $"} /> converge vers <MathJaxInline toShow={"$ 2 $"} />, démonstrons-le !</p>
                
                <Title2 title={"1) Étude des variations de la suite"} />
                <p>Calculons la <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/presentation`} external>dérivée</Link> de <MathJaxInline toShow={"$ f $"} /> :</p>
                <MathJaxDisplay toShow={f} demo />
                <MathJaxDisplay toShow={fPrim} demo />
                <p>Cette fonction est toujours positive donc <MathJaxInline toShow={"$ f $"} /> est toujours croissante.</p> 
                <p>On a :</p> 
                <MathJaxDisplay toShow={enc1} demo />
                <MathJaxDisplay toShow={enc2} demo />
                <MathJaxDisplay toShow={enc3} demo />
                <MathJaxDisplay toShow={enc4} demo />
                <p>La suite <MathJaxInline toShow={"$ (u_n) $"} /> est croissante. </p>
                
                <Title2 title={"2) Montrer qu'elle est majorée par 2"} />
                <p>Par <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/raisonnement-par-recurrence`} external>récurrence</Link>, on montre que cette proposition <MathJaxInline toShow={"$ P(k) $"} /> est vraie :</p>
                <MathJaxDisplay toShow={hypRecurr} fRef={"P(k)"} demo />  
                <p>a) Pour son premier terme : <MathJaxInline toShow={"$ u_0 = 0 \\leq 2  $"} />. <MathJaxInline toShow={"$ P(0) $"} /> est vraie.</p>
                <p>b) On suppose que la proposition <MathJaxInline toShow={"$ P(k) $"} /> est vraie pour son terme de rang <MathJaxInline toShow={"$ k $"} />.</p>
                <p>c) On montre que <MathJaxInline toShow={"$ P(k) $"} /> est vraie pour son terme de rang <MathJaxInline toShow={"$ (k + 1) $"} />, soit que :  <MathJaxInline toShow={"$ u_{k+1} = f(u_k) \\leq 2 $"} />. </p>
                <p><MathJaxInline toShow={"$ f $"} /> est croissante donc <MathJaxInline toShow={"$ f(u_k) \\leq f(2) = 2 $"} />.</p>
                <p>Dans l'hypothèse où <MathJaxInline toShow={"$ P(k) $"} /> est vraie au rang <MathJaxInline toShow={"$ k $"} />, elle l'est aussi au rang <MathJaxInline toShow={"$ (k+1) $"} />.</p>
                <p>Comme <MathJaxInline toShow={"$ P(k) $"} /> est vraie pour son premier terme <MathJaxInline toShow={"$ u_0$"} />, et que si elle est vraie pour son terme de rang <MathJaxInline toShow={"$ k $"} />, elle l'est également pour son terme de rang <MathJaxInline toShow={"$(k+1) $"} />, alors elle est vraie de proche en proche et pour tout <MathJaxInline toShow={"$ k $"} />.</p>
                <p>Nous venons de montrer par récurrence que <MathJaxInline toShow={"$ (u_n) $"} /> est majorée par <MathJaxInline toShow={"$ m = 2 $"} />.</p>
                
                <Title2 title={"3) Calculer la limite"} />
                <p>Comme exposé dans le chapitre sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/limites-de-suite`} external>limites de suites</Link>, on est amené à résoudre :</p>
                <MathJaxDisplay toShow={limUnRecurr4} demo />
                <p>Soit :</p>
                <MathJaxDisplay toShow={limUnRecurr5} demo />
                <MathJaxDisplay toShow={limUnRecurr6} demo />
                <MathJaxDisplay toShow={limUnRecurr7} demo />
                <p>On résoud cette <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_2_DEG}`} external>équation du seconde degré</Link> et on trouve : </p>
                <MathJaxDisplay toShow={limUnRecurr8} demo />
                <p>C'est la racine positive du polynôme qui nous intéresse ici.</p>
                <p>On a montré que :</p>
                <MathJaxDisplay toShow={limUnRecurr9} demo />
            </>
}

export default TheoremeDeLaConvergenceUniforme;