import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import Title1 from '../../helpers/Title1';
import CoursesConstants from '../../helpers/CoursesConstants';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import Link from '../../../immutable/nav/Link';
import Title2 from '../../helpers/Title2';

const LesPrioritesDeCalcul = () => {

    var prioExample = "\\( A = \\left(3\\times \\frac{1}{4} + (4 \\times 2 + 12) \\right) \\times 3 \\)";
    var prioExample2 = "\\( A = \\left( \\frac{3}{4} + (8 + 12) \\right) \\times 3 \\)";
    var prioExample3 = "\\( A = \\left( \\frac{3}{4} + 20  \\right) \\times 3 \\)";
    var prioExample4 = "\\( A = \\left( \\frac{3}{4} + \\frac{80}{4}  \\right) \\times 3 \\)";
    var prioExample5 = "\\( A = \\left( \\frac{83}{4}  \\right) \\times 3 \\)";
    var prioExample6 = "\\( A =  \\frac{249}{4}  \\)";

    var parenthesesExample = "\\( A =  2 x + 3 - (3x - 2)  + (2x -1) - (5x +2) \\)";
    var parenthesesExample2 = "\\( A =  2 x + 3 - 3x + 2  + 2x -1 - 5x -2 \\)";
    var parenthesesExample3 = "\\( A =  -4x + 2 \\)";


    return  <>
                <p>Les priorités de calcul sont les suivantes :</p>
                
                <Title1 title={"1) Priorités de calcul"} />
                <p>On se demande à chaque fois si un calcul direct est possible. S'il ne l'est pas, on passe à l'étape suivante pour y revenir une fois que ce sera possible.</p>

                <Container className="Focus">
                    <MathJaxDisplay toShow={"\\( a) l'int\\acute{e}rieur \\enspace des  \\enspace parenth \\overset{‘}{e} ses \\)"} />
                    <MathJaxDisplay toShow={"\\( b) \\times / \\div \\)"} />
                    <MathJaxDisplay toShow={"\\( c) + / - \\)"} />
                </Container>

                <Title2 title={"Exemple"} />
                <MathJaxDisplay toShow={prioExample} demo />
                <p>On s'intéresse à ce qui se trouve dans les deux parenthèses, on y effectue les multiplications</p>
                <MathJaxDisplay toShow={prioExample2} demo />
                <p>On additionne l'intérieur de la petite parenthèse pour rendre le calcul possible de la grande parenthèse</p>
                <MathJaxDisplay toShow={prioExample3} demo />
                <p>On additionne l'intérieur de la parenthèse restante en mettant au même dénominateur (voir <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.ELEM_CALCULUS}/les-fractions`} external>le chapitre sur les fractions</Link>) </p>
                <MathJaxDisplay toShow={prioExample4} demo />
                <MathJaxDisplay toShow={prioExample5} demo />
                <p>On effectue la dernière multiplication</p>
                <MathJaxDisplay toShow={prioExample6} demo />

                <Title1 title={"2) Gestion des parenthèses"} />
                <p>Dans le cas d’une multiplication de facteurs, les parenthèses sont importantes et prioritaires et doivent être laissées tant qu’elles ne sont pas calculées.</p>
                <p>Dans le cas d’une addition de termes, les parenthèses peuvent être retirées.</p>
                <p>Il faut transformer les parenthèses avec un moins devant en changeant tous les signes à l'intérieur de la parenthèse.</p>
                <p>Les autres parenthèses ne sont pas obligatoires.</p>

                <Title2 title={"Exemple"} />
                <MathJaxDisplay toShow={parenthesesExample} demo />
                <MathJaxDisplay toShow={parenthesesExample2} demo />
                <MathJaxDisplay toShow={parenthesesExample3} demo />
            </>
}

export default LesPrioritesDeCalcul; 