import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import derivativeSquareFunction from '../assets/derivativeSquareFunction.png';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Title1 from '../../helpers/Title1';

const EquationDeLaTangente = () => {

    var n = 0;
    var xCarreeAndDeriv = "\\( \\Biggl\\{ \\begin{gather*} f(x) = x^2 \\\\ f'(x) = 2x \\end{gather*} \\)";
    var xCarreeAndDerivValueIn1 = "\\( \\Biggl\\{ \\begin{gather*} f(1) = 1 \\\\ f'(1) = 2 \\end{gather*} \\)";
    var g = "\\(g(x) = ax + b\\)";

    var eqDroite = "\\(f'(1) = \\frac{g(x) - f(1)}{x - 1 }\\)";
    var eqDroite2 = "\\(g(x) - f(1) = f'(1)(x - 1 )\\)";
    var eqDroite3 = "\\(g(x) = f'(1)(x - 1 ) + f(1)\\)";

    var eqDroiteCalculus = "\\(g(x) = 2(x - 1 ) + 1\\)";
    var eqDroiteCalculus2 = "\\(g(x) = 2x - 2 + 1\\)";
    var eqDroiteCalculus3 = "\\(g(x) = 2x - 1\\)";

    var eqDroiteA = "\\(f'(a) = \\frac{g(x) - f(a)}{x - a }\\)";
    var eqDroiteGen = "\\(g(x) = f'(a)(x -a ) + f(a)\\)";

    var convexe = "\\( f \\enspace convexe \\Longleftrightarrow f(x) \\geq f'(a)(x -a ) + f(a) \\)";
    var concave = "\\( f \\enspace concave \\Longleftrightarrow f(x) \\leq f'(a)(x -a ) + f(a) \\)";

    return  <>
                <p>
                    Prenons l'exemple de <Link url={`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/derivee-de-x-au-carre`} external>la fonction carrée</Link>, définie pour tout <MathJaxInline toShow={"$x \\in \\mathbb{R}$"} />.
                </p>
                <MathJaxDisplay toShow={xCarreeAndDeriv} demo /> 
                <p>Au point <MathJaxInline toShow={"$ x= 1 $"} />, </p>
                <MathJaxDisplay toShow={xCarreeAndDerivValueIn1} demo /> 
                <ImageZoom src={derivativeSquareFunction} name="Calcul du nombre dérivée de la fonction carrée en x = 1" n={++n} />
                <p>Le nombre dérivé <MathJaxInline toShow={"$ f'(1)= 2  $"} /> est la pente de la droite <MathJaxInline toShow={"$ g  $"} /> en rouge.
                   {"\n"} Nous pouvons calculer son équation.
                </p>
                <p>
                    Puisque c'est une droite, nous savons que son équation est de type (voir chapitre sur <Link url={`${PagesConstants.COURS}${CoursesConstants.EQ_1_DEG}`} external>les équations du premier degré</Link>) :
                </p>
                <MathJaxDisplay toShow={g} demo /> 
                <p>
                    Nous savons de même que <MathJaxInline toShow={"$ g(1) = f(1)  $"} /> puisque la droite g est tangente à la courbe <MathJaxInline toShow={"$ f  $"} />.
                </p>
                <p>Si l’on applique la formule de la pente avec deux points <MathJaxInline toShow={"$ A(1, f(1)) $"} /> et <MathJaxInline toShow={"$ B(x, g(x)) $"} />, on a : </p>
                <MathJaxDisplay toShow={eqDroite} demo /> 
                <p>Et en arrangeant : </p>
                <MathJaxDisplay toShow={eqDroite2} demo /> 
                <MathJaxDisplay toShow={eqDroite3} demo /> 
                <p>On a alors en remplaçant par nos valeurs : </p>
                <MathJaxDisplay toShow={eqDroiteCalculus} demo /> 
                <MathJaxDisplay toShow={eqDroiteCalculus2} demo /> 
                <MathJaxDisplay toShow={eqDroiteCalculus3} demo /> 

                <p>Si l'on applique cela à n'importe quel nombre <MathJaxInline toShow={"$ a $"} /> en prenant deux points <MathJaxInline toShow={"$ A(a, f(a)) $"} /> et <MathJaxInline toShow={"$ B(x, g(x)) $"} />, on a : </p>
                <MathJaxDisplay toShow={eqDroiteA} demo /> 
                <p>Nous pouvons alors généraliser l’équation de la tangente à la courbe <MathJaxInline toShow={"$ f $"} /> dont la pente est la dérivée <MathJaxInline toShow={"$ f'(a) $"} /> par </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={eqDroiteGen} />  
                </Container>

                <Title1 title={"Inégalité des tangentes"} />
                <p>Nous avons vu au chapitre sur <Link url={`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/convexite-d-une-fonction`} external>la convexité</Link> qu'une fonction convexe a toujours ses tangentes situées en dessous de sa courbe représentative.</p>
                <p>Soit une fonction <MathJaxInline toShow={"$ f $"} /> convexe sur <MathJaxInline toShow={"$ I = [a, b] $"} />, <MathJaxInline toShow={"$ a $"} /> et <MathJaxInline toShow={"$ b $"} /> deux réels.</p>
                <p><MathJaxInline toShow={"$ \\forall x \\in I $"} />, </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={convexe} />  
                </Container>
                <p>De la même manière, </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={concave} />  
                </Container>
            </>
}

export default EquationDeLaTangente;