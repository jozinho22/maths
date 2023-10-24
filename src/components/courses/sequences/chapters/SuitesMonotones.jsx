import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const SuitesMonotones = () => {

    var example1 = "\\( u_n = 2^n + n \\)";
    var example12 = "\\( u_{n+1} = 2^{n+1} + n+1 \\)";
    var example13 = "\\( u_{n+1} - u_n = 2^{n+1} + n+1 - (2^n + n) \\)";
    var example14 = "\\( u_{n+1} - u_n = 2^{n+1} - 2^n + 1 \\)";
    var example15 = "\\( u_{n+1} - u_n = 2^n + 1 \\)";
    var example16 = "\\( u_{n+1} - u_n \\geq 0 \\)";

    var example2 = "\\( v_n = \\frac{1}{2^n}\\)";
    var example22 = "\\( v_{n+1} = \\frac{1}{2^{n+1}} \\)";
    var example23 = "\\( \\frac{v_{n+1}}{v_n} = \\frac{\\frac{1}{2^{n+1}}}{ \\frac{1}{2^n}} \\)";
    var example25 = "\\( \\frac{v_{n+1}}{v_n} = \\frac{2^n}{2^{n+1}}    \\)";
    var example26 = "\\( \\frac{v_{n+1}}{v_n} = \\frac{1}{2}    \\)";
    var example27 = "\\( \\frac{v_{n+1}}{v_n} \\leq 1    \\)";

    return  <>
                <p>Une suite <MathJaxInline toShow={"$(u_n)$"} /> est croissante si et seulement si <MathJaxInline toShow={"$ u_n \\leq u_{n+1} $"} />.</p>
                <p>Une suite <MathJaxInline toShow={"$(u_n)$"} /> est décroissante si et seulement si <MathJaxInline toShow={"$ u_n \\geq u_{n+1} $"} />.</p>
                <p>Une suite est monotone lorsqu'elle est croissante ou décroissante.</p>

                <Title1 title={"Différentes méthodes pour étudier les variations"} />
                <Title2 title={"1) Différence des termes"} />
                <p>On étudie le signe de <MathJaxInline toShow={"$ u_{n+1} - u_n$"} />.</p>
                <p><MathJaxInline toShow={"$ - \\enspace \\underline{cas \\enspace 1 :} \\enspace  u_{n+1} - u_n \\geq 0 $"} />, </p>
                <p>la suite est croissante.</p>
                <p><MathJaxInline toShow={"$ - \\enspace \\underline{cas \\enspace 2 :} \\enspace  u_{n+1} - u_n \\leq 0 $"} />, </p>
                <p>la suite est décroissante.</p>
                <p><MathJaxInline toShow={"$ - \\enspace \\underline{cas \\enspace 3 :} \\enspace  u_{n+1} - u_n = 0 $"} />, </p>
                <p>la suite est dite stationnaire.</p>

                <Title2 title={"2) Rapport des termes"} />
                <p>Si les termes de la suite sont positifs, on étudie le rapport <MathJaxInline toShow={"$ \\frac{u_{n+1}}{u_n} $"} />.</p>
                <p><MathJaxInline toShow={"$ - \\enspace  \\underline{cas \\enspace 1 :} \\enspace \\frac{u_{n+1}}{u_n} \\geq 1 $"} />,</p>
                <p> la suite est croissante.</p>
                <p><MathJaxInline toShow={"$ - \\enspace \\underline{cas \\enspace 2 :} \\enspace \\frac{u_{n+1}}{u_n} \\leq 1 $"} />, </p>
                <p>la suite est décroissante.</p>
                <p><MathJaxInline toShow={"$ - \\enspace \\underline{cas \\enspace 3 :} \\enspace \\frac{u_{n+1}}{u_n} = 1 $"} />,</p>
                <p> la suite est dite stationnaire.</p>
                <p>Cette méthode peut être utile dans le cas de <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/suites-geometriques`} external>suites géométriques</Link>.</p>

                <Title2 title={"3) Étude des variations de la fonction"} />
                <p>Si <MathJaxInline toShow={"$ u_n = f(n) $"} />, on pourra étudier <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/variations-d-une-fonction`} external>les variations de la fonction</Link> <MathJaxInline toShow={"$ f $"} />. </p>
                
                <Title1 title={"Exemple"} />
                <MathJaxDisplay toShow={example1} demo /> 
                <p>Alors,</p>
                <MathJaxDisplay toShow={example12} demo /> 
                <p>On calcule la différence.</p>
                <MathJaxDisplay toShow={example13} demo /> 
                <MathJaxDisplay toShow={example14} demo />
                <MathJaxDisplay toShow={example15} demo /> 
                <p>On voit que :</p>
                <MathJaxDisplay toShow={example16} demo />
                <p>On en conclue que la suite <MathJaxInline toShow={"$ (u_n) $"} /> est croissante.</p>

                <Title1 title={"Exemple 2"} />
                <MathJaxDisplay toShow={example2} demo /> 
                <p>Alors,</p>
                <MathJaxDisplay toShow={example22} demo /> 
                <p>On calcule la différence.</p>
                <MathJaxDisplay toShow={example23} demo /> 
                <MathJaxDisplay toShow={example25} demo /> 
                <MathJaxDisplay toShow={example25} demo /> 
                <MathJaxDisplay toShow={example26} demo /> 
                <p>On voit que :</p>
                <MathJaxDisplay toShow={example27} demo />
                <p>On en conclue que la suite <MathJaxInline toShow={"$ (v_n) $"} /> est décroissante.</p>
            </>
}

export default SuitesMonotones;