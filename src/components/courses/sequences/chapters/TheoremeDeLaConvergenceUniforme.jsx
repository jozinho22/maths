import React from 'react';
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
    var sequencesRecur = "\\( \\Biggl\\{ \\begin{gather*} u_0 = 0 \\\\  \\enspace \\enspace \\enspace u_{n + 1} = \\sqrt{u_n + 2} \\end{gather*} \\)";

    var enc =   "\\( u_0 = 0, u_1 = \\sqrt{2}\\)";
    var enc1 =   "\\( u_0  < u_1 \\)";
    var enc2 =   "\\( f(u_0)  < f(u_1) \\Longleftrightarrow u_1  < u_2 \\)";
    var enc3 =   "\\( f(u_{n-1}) < f(u_n) \\)";
    var enc4 =   "\\(  u_n < u_{n+1} \\)";


    var limUnRecurr = "\\( lim_{h \\to +\\infty} \\enspace u_n = lim_{h \\to +\\infty} \\enspace u_{n+1} = lim_{h \\to +\\infty} \\enspace f(u_n) = l \\)";
    var limUnRecurr4 = "\\( l  = f(l) \\)";

    var limUnRecurr5 = "\\( x = \\sqrt{x + 2} \\)";
    var limUnRecurr6 = "\\( x^2 = x + 2 \\)";
    var limUnRecurr7 = "\\( x^2 - x - 2 = 0 \\)";

    var limUnRecurr8 = "\\( x_1 = -1, x_2 = 2 \\)";

    var limUnRecurr9 = "\\( lim_{h \\to +\\infty} \\enspace u_n = 2 \\)";

    return  <>
                <Title1 title={"Théorème de la convergence uniforme"} />
                <p>Toute suite croissante et majorée converge.</p>
                <p>De même, toute suite décroissante et minorée converge.</p>

                <p>Le théorème affirme que la suite converge, mais ne dit pas vers quoi.</p>
                <p>Attention, car il existe des cas de suites convergentes qui n'entrent pas dans les deux cas précédents.</p>
                <p>Par exemple, <MathJaxInline toShow={"$ u_n = \\left(-\\frac{1}{2}\\right)^n $"} /> converge vers <MathJaxInline toShow={"$0$"} /> mais n'a pas de sens de variations.</p>

                <Title2 title={"Exemple"} />
                <p>Reprenons le même exemple que précédemment :</p>
                <MathJaxDisplay toShow={sequencesRecur} demo />  
                <ImageZoom src={recurrentSequences} name="Suite récurrente convergente" n={++n} />

                <p>Le graphique suggère que <MathJaxInline toShow={"$ (u_n) $"} /> converge vers <MathJaxInline toShow={"$ 2 $"} />, démonstrons-le !</p>

                <p>1) Étude de la fonction <MathJaxInline toShow={"$ f $"} /></p>
                <p>Calculons la <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}`} external>dérivée</Link> de <MathJaxInline toShow={"$ f $"} /> :</p>
                <MathJaxDisplay toShow={sequencesRecur} demo />
                <p>Cette fonction est toujours positive donc <MathJaxInline toShow={"$ f $"} /> est toujours croissante.</p> 
                <p>On a :</p> 
                <MathJaxDisplay toShow={enc} demo />
                <MathJaxDisplay toShow={enc1} demo />
                <MathJaxDisplay toShow={enc2} demo />
                <MathJaxDisplay toShow={enc3} demo />
                <MathJaxDisplay toShow={enc4} demo />
                <p>La suite <MathJaxInline toShow={"$ (u_n) $"} /> est croissante. </p>
                
                <p>2) Montrer qu'elle est majorée par 2</p>
                <p>Par <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/raisonnement-par-recurrence`} external>récurrence</Link>, on montre que :</p>
                <p>a) Pour son premier terme, <MathJaxInline toShow={"$ u_0 = 0 \\ leq 2  $"} /></p>
                <p>b) On suppose que <MathJaxInline toShow={"$ u_n \\leq 2 $"} /></p>
                <p>c) <MathJaxInline toShow={"$ f $"} /> est croissante donc :</p>

                <p>3) Calculer la limite</p>
                <p>Comme exposé dans le chapitre sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/limites-de-suite`} external>limites de suites</Link>, on a l'équivalence :</p>
                <MathJaxDisplay toShow={limUnRecurr} demo />
                <MathJaxDisplay toShow={limUnRecurr4} demo />
                <p>On résoud :</p>
                <MathJaxDisplay toShow={limUnRecurr5} demo />
                <MathJaxDisplay toShow={limUnRecurr6} demo />
                <MathJaxDisplay toShow={limUnRecurr7} demo />
                <p>On résoud cette <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_2_DEG}`} external>équation du seconde degré</Link> et on trouve : </p>
                <MathJaxDisplay toShow={limUnRecurr8} demo />
                <p>C'est la racine positive du polynôme qui nous intéresse ici.</p>
                <p>On a montre que </p>
                <MathJaxDisplay toShow={limUnRecurr9} demo />
            </>
}

export default TheoremeDeLaConvergenceUniforme;