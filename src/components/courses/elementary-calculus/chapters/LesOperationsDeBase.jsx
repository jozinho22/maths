import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';
import Constants from '../../../immutable/Constants';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const LesOperationsDeBase = () => {
   
    var oppose = "\\( oppos \\acute{e}(n) = -n \\)";
    var oppose2 = "\\( oppos \\acute{e}(-n) = n \\)";

    var nombPlusOppose = "\\( nombre + oppos \\acute{e} = 0\\)";
    var nombPlusOppose2 = "\\( 1 + (-1) = 0\\)";

    var inverse = "\\( inverse(n) = \\frac{1}{n} \\)";
    var inverse2 = "\\( inverse(\\frac{1}{n}) = n \\)";

    var nombFoisInverse = "\\( nombre \\times inverse = 1\\)";
    var nombFoisInverse2 = "\\( 5 \\times \\frac{1}{5}  = 1\\)";

    var prioExample = "\\( A = \\left(3\\times \\frac{1}{4} + (4 \\times 2 + 12) \\right) \\times 3 \\)";
    var prioExample2 = "\\( A = \\left( \\frac{3}{4} + (8 + 12) \\right) \\times 3 \\)";
    var prioExample3 = "\\( A = \\left( \\frac{3}{4} + 20  \\right) \\times 3 \\)";
    var prioExample4 = "\\( A = \\left( \\frac{3}{4} + \\frac{80}{4}  \\right) \\times 3 \\)";
    var prioExample5 = "\\( A = \\left( \\frac{83}{4}  \\right) \\times 3 \\)";
    var prioExample6 = "\\( A =  \\frac{249}{4}  \\)";


    return  <>
                <p>
                    Les quatres opérations de base sont l'addition (<MathJaxInline toShow={"$+$"} />), la soustraction (<MathJaxInline toShow={"$-$"} />), la multiplication (<MathJaxInline toShow={"$\\times$"} />) et la division (<MathJaxInline toShow={"$/$"} />).
                </p>
                <Title1 title={"1) L'addition / la soustraction"} />
                <p>Dans les cas de l'addition ou de la soustraction, on dit qu'on additionne ou on soustrait des termes.</p>
                <p>De même, on appelle l'opposé d'un nombre, ce nombre avec son signe opposé.</p>
                <MathJaxDisplay toShow={oppose}/>
                <MathJaxDisplay toShow={oppose2}/>
                <p>Soustraire un nombre revient à additionner son opposé.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={nombPlusOppose}/>
                </Container>
                <p>Exemple : </p>
                <MathJaxDisplay toShow={nombPlusOppose2}/>
                <p>Pour l’addition/soustraction, on appelle le nombre <MathJaxInline toShow={"$0$"} /> l’élément neutre.</p>
                <p>L'addition et la soustraction peuvent donc être considérées comme une seule et même chose. Il existe le même principe pour la multiplication/division.</p>

                <Title1 title={"2) La multiplication / la division"} />
                <p>Dans le cas de la multiplications, on dit que l'on multiplie des facteurs.</p>
            
                <p>On appelle l'inverse d'un nombre, ce nombre retourné sous forme de fractions.</p>
                <MathJaxDisplay toShow={inverse}/>
                <MathJaxDisplay toShow={inverse2}/>
                <p>Diviser un nombre revient à le multiplier par son inverse.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={nombFoisInverse}/>
                </Container>
                <p>Exemple : </p>
                <MathJaxDisplay toShow={nombFoisInverse2}/>
                <p>Pour la multiplication/division, on appelle le nombre <MathJaxInline toShow={"$1$"} /> l’élément neutre.</p>
                <p>De même alors, la multiplication et la division peuvent être considérées comme une seule et même chose.</p>

                <Title1 title={"3) La division"} />
                <p>Dans le cas de la division, on appelle :
                    {"\n"} - dividende : le nombre à diviser
                    {"\n"} - diviseur : le nombre par lequel on divise
                    {"\n"} - quotient : le résultat
                    {"\n"} - reste : le reste de la division euclidienne
                </p>
                
                <p style={{color: Constants.RED_COLOR}}>À noter : il est interdit de diviser par 0 !</p>
            
                <Title1 title={"4) Priorités de calcul"} />
                <p>On se demande à chaque fois si un calcul direct est possible. S'il ne l'est pas, on passe à l'étape suivante pour y revenir une fois que ce sera possible.</p>
                {/* <Title2 title={"a) L'intérieur des parenthèses"} />
                <Title2 title={"b) Multiplication / division"} />
                <Title2 title={"c) Addition / soustraction"} /> */}
                <Container className="Focus">
                    <MathJaxDisplay toShow={"\\( a) \\enspace L'int\\acute{e}rieur \\enspace des  \\enspace parenth\\grave{e}ses \\)"} />
                    <MathJaxDisplay toShow={"\\( b) \\times / \\div \\)"} />
                    <MathJaxDisplay toShow={"\\( c) + / - \\)"} />
                </Container>

                <Title1 title={"5) Exemple"} />
                <MathJaxDisplay toShow={prioExample}/>
                <p>On s'intéresse à ce qui se trouve dans les deux parenthèses, on y effectue les multiplications</p>
                <MathJaxDisplay toShow={prioExample2}/>
                <p>On additionne l'intérieur de la petite parenthèse pour rendre le calcul possible de la grande parenthèse</p>
                <MathJaxDisplay toShow={prioExample3}/>
                <p>On additionne l'intérieur de la parenthèse restante en mettant au même dénominateur (voir <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.ELEM_CALCULUS}/les-fractions`} external>le chapitre sur les fractions</Link>) </p>
                <MathJaxDisplay toShow={prioExample4}/>
                <MathJaxDisplay toShow={prioExample5}/>
                <p>On effectue la dernière multiplication</p>
                <MathJaxDisplay toShow={prioExample6}/>
            </>
}

export default LesOperationsDeBase; 