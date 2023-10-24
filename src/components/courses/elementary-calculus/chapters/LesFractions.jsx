import React from 'react';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

import Fraction from "fractions";

const LesFractions = () => {

    var oneHalf = new Fraction("1/2");

    var ratioNumDen = "\\( si \\enspace d\\acute{e}n > num, \\enspace alors \\enspace \\frac{d\\acute{e}n}{num} > 1, \\enspace effectivement \\enspace \\frac{5}{4} = 1.25 > 1 \\)";
    var ratioNumDen2 = "\\( si \\enspace d\\acute{e}n < num \\enspace alors \\enspace \\frac{d\\acute{e}n}{num} < 1, \\enspace effectivement \\enspace \\frac{3}{4} = 0.75 < 1 \\)";
    var ratioNumDen3 = "\\( si \\enspace d\\acute{e}n = num \\enspace alors \\enspace \\frac{d\\acute{e}n}{num} = 1, , \\enspace effectivement \\enspace \\frac{4}{4} = 1 \\)";

    var addExample = "\\( A = \\frac{1}{2} + \\frac{3}{4} \\)";
    var addExample2 = "\\( A = \\frac{1 \\times 2}{2 \\times 2} + \\frac{3}{4} \\)";
    var addExample3 = "\\( A = \\frac{2}{4} + \\frac{3}{4} \\)";
    var addExample4 = "\\( A = \\frac{2 + 3}{4} = \\frac{5}{4} \\)";

    var multiplyExample = "\\( B = \\frac{3}{8} \\times \\frac{4}{7} \\)";
    var multiplyExample2 = "\\( B = \\frac{3 \\times 4}{8 \\times 7}  \\)";
    var multiplyExample3 = "\\( B = \\frac{12}{56}  \\)";

    var multiplyExample3Reduc  = "\\( B = \\frac{6 \\times 2}{28 \\times 2}  \\)";
    var multiplyExample3Reduc2  = "\\( B = \\frac{6}{28}  \\)";
    var multiplyExample3Reduc3  = "\\( B = \\frac{3 \\times 2 }{14 \\times 2}  \\)";
    var multiplyExample3Reduc4  = "\\( B = \\frac{3}{14}  \\)";

    var complexFrac  = "\\( C = \\frac{1}{6} \\times \\left( 3 + \\frac{7}{10} \\right) \\)";
    var complexFrac2  = "\\( C = \\frac{1}{6} \\times \\left( \\frac{30}{10} + \\frac{7}{10} \\right) \\)";
    var complexFrac3  = "\\( C = \\frac{1}{6} \\times \\left( \\frac{37}{10} \\right) \\)";
    var complexFrac4  = "\\( C = \\frac{37}{60}  \\)";

    return  <>
                <p>
                    Les fractions sont d'une très grande utilité, notamment pour calculer des rapports ou des proportions précises entre les choses.
                    {"\n"}Elles permettent notamment de conserver une valeur théorique exacte, conservant ainsi toute l'information de la valeur.
                    {"\n"}La partie supérieure s'appelle le numérateur (<MathJaxInline toShow={"$num$"} />). Sa partie inférieure est le dénominateur (<MathJaxInline toShow={"$d\\acute{e}n$"} />).
                </p>
                <p>
                    Entre le numérateur et le dénominateur, on a les trois relations suivantes :
                </p>
                <MathJaxDisplay toShow={ratioNumDen} demo />
                <MathJaxDisplay toShow={ratioNumDen2} demo />
                <MathJaxDisplay toShow={ratioNumDen3} demo />

                <p>
                    Nous avons au chapitre sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.ELEM_CALCULUS}/les-operations-de-base`} external>les opérations de base</Link> que l'on observait des comportement communs entre :
                    {"\n"} - l'addition et la soustraction
                    {"\n"} - la multiplication et la division
                </p>
                <p>Cela va notamment s'appliquer pour les fractions.</p>

                <Title1 title={"1) L'addition / la soustraction"} />
                <p>Pour additionner des fractions, il faut les mettre sous le même dénominateur.</p>
                <MathJaxDisplay toShow={addExample} demo />
                <p>On souhaite avoir <MathJaxInline toShow={"$4$"} /> comme dénominateur commun donc on multiplie le haut et le bas par <MathJaxInline toShow={"$2$"} /> (ce qui ne change rien car cela revient à multiplier par <MathJaxInline toShow={"$1$"} />) </p>
                <MathJaxDisplay toShow={addExample2} demo />
                <MathJaxDisplay toShow={addExample3} demo />
                <MathJaxDisplay toShow={addExample4} demo />

                <Title1 title={"2) La multiplication / la division"} />
                <p>Pour multiplier des fractions, il suffit de multiplier les nombres du haut avec les nombres du bas.</p>
                <MathJaxDisplay toShow={multiplyExample} demo />
                <MathJaxDisplay toShow={multiplyExample2} demo />
                <MathJaxDisplay toShow={multiplyExample3} demo />

                <Title1 title={"3) La réduction"} />
                <p>Lors de l'exemple précédent, on avait la fraction suivante :</p>
                <MathJaxDisplay toShow={multiplyExample3} demo />
                <p>Cette fraction est réductible par de plus petits nombres, plus parlants.</p>
                <p>Ici, on remarque que ce sont deux nombres pairs, ils sont divisibles par <MathJaxInline toShow={"$2$"} />, on alors :</p>
                <MathJaxDisplay toShow={multiplyExample3Reduc} demo />
                <p>On peut encore la réduire par <MathJaxInline toShow={"$2$"} />.</p>
                <MathJaxDisplay toShow={multiplyExample3Reduc2} demo />
                <MathJaxDisplay toShow={multiplyExample3Reduc3} demo />
                <MathJaxDisplay toShow={multiplyExample3Reduc4} demo />

                <Title1 title={"4) Fractions complexes"} />
                <p>Pour les expressions de fractions contenant à la fois des additions/soustractions et des multiplications/divisions, <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.ELEM_CALCULUS}/les-operations-de-base`} external>les règles de priorités</Link> s'appliquent.</p>
                <MathJaxDisplay toShow={complexFrac} demo />
                <MathJaxDisplay toShow={complexFrac2} demo />
                <MathJaxDisplay toShow={complexFrac3} demo />
                <MathJaxDisplay toShow={complexFrac4} demo />
            </>

}

export default LesFractions;