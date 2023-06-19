import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import derivativeSquareFunction from '../assets/derivativeSquareFunction.png';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import pathBuilder from '../../../helpers/pathBuilder';

const EquationDeLaTangente = () => {

    var n = 0;
    var g = "\\(g(x) = ax + b\\)";

    var eqDroite = "\\(f'(1) = \\frac{g(x) - f(1)}{x - 1 }\\)";
    var eqDroite2 = "\\(g(x) - f(1) = f'(1)(x - 1 )\\)";
    var eqDroite3 = "\\(g(x) = f'(1)(x - 1 ) + f(1)\\)";

    var eqDroiteCalculus = "\\(g(x) = 2(x - 1 ) + 1\\)";
    var eqDroiteCalculus2 = "\\(g(x) = 2x - 2 + 1\\)";
    var eqDroiteCalculus3 = "\\(g(x) = 2x - 1\\)";

    var eqDroiteA = "\\(f'(a) = \\frac{g(x) - f(a)}{x - a }\\)";
    var eqDroiteGen = "\\(g(x) = f'(a)(x -a ) + f(a)\\)";

    return  <>
                <p>
                    Reprenons l'exemple de <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/derivee-de-x-au-carre`)} external>la fonction carrée</Link> vue au chapitre précédent :
                </p>
                
                <p>Pour <MathJaxInline toShow={"$ x= 1 $"} />, on a bien <MathJaxInline toShow={"$ f'(1)=2 $"} />.  </p>
                <ImageZoom src={derivativeSquareFunction} name="Calcul du nombre dérivée de la fonction carrée en x = 1" n={++n} />
                <p>Le nombre <MathJaxInline toShow={"$ f'(1)= 2  $"} /> est la pente de la droite <MathJaxInline toShow={"$ g  $"} /> en rouge.
                   {"\n"} Mais nous pouvons de même calculer son équation.
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
            </>
}

export default EquationDeLaTangente;