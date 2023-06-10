import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import { LineChart, XAxis, YAxis, ReferenceLine, ResponsiveContainer, CartesianGrid, Tooltip, Line } from 'recharts';
import ImageZoom from '../../ImageZoom';

import derivativeSquareFunction from '../assets/derivativeSquareFunction.png';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../CoursesConstants';

const Exemple = () => {

    var n = 0;

    var fCarree = "\\( \\forall x \\in \\mathbb{R}, f(x)= x^2\\)";
    var tauxVar = "\\(a = \\frac{f(x+h) - f(x)}{h }\\)";
    var tauxVar2 = "\\(a = \\frac{(x+h)^2 - (x)^2}{h }\\)";
    var tauxVar3 = "\\(a = \\frac{x^2 + 2xh + h^2 - x^2}{h }\\)";
    var tauxVar4 = "\\(a = \\frac{2xh + h^2}{h }\\)";
    var tauxVar5 = "\\(a = h. \\frac{(2x + h)}{h }\\)";
    var tauxVar6 = "\\(a = 2xh + h\\)";

    var limTauxVar = "\\(f'(x) = lim_{ x \\to 0} \\enspace (2xh + h)\\)";
    var limTauxVar2 = "\\(f'(x) =2x\\)";

    var g = "\\(g(x) = ax + b\\)";

    var eqDroite = "\\(f'(1) = \\frac{g(x) - f(1)}{x - 1 }\\)";
    var eqDroite2 = "\\(g(x) - f(1) = f'(1)(x - 1 )\\)";
    var eqDroite3 = "\\(g(x) = f'(1)(x - 1 ) + f(1)\\)";

    var eqDroiteCalculus = "\\(g(x) = 2(x - 1 ) + 1\\)";
    var eqDroiteCalculus2 = "\\(g(x) = 2x - 2 + 1\\)";
    var eqDroiteCalculus3 = "\\(g(x) = 2x - 1\\)";

    var eqDroiteGen = "\\(g(x) = f'(a)(x -a ) + f(a)\\)";

    return  <>
                <p>
                    La fonction carrée est définie de la manière suivante :
                </p>
                <MathJaxDisplay toShow={fCarree} demo />  
                <p>
                   Calculons sa dérivée :
                </p>

                <p className="Title1">a) Calcul de la pente</p>
                <p>On calcule la pente, puis on cherchera la limite quand <MathJaxInline toShow={"$ h \\to 0 $"} /> ( h tend vers 0 ).</p>
                <p>Avec la formule suivante vue plus haut, on a :</p>
                <MathJaxDisplay toShow={tauxVar} demo />  
                <MathJaxDisplay toShow={tauxVar2} demo />  
                <MathJaxDisplay toShow={tauxVar3} demo />  
                <MathJaxDisplay toShow={tauxVar4} demo /> 
                <p>On factorise par <MathJaxInline toShow={"$ h $"} /> :</p> 
                <MathJaxDisplay toShow={tauxVar5} demo /> 
                <MathJaxDisplay toShow={tauxVar6} demo /> 

                <p className="Title1">a) Calcul de la limite</p>
                <p>Calculons à présent la limite de ce qu’on vient de trouver :</p>
                <MathJaxDisplay toShow={limTauxVar} demo /> 
                <MathJaxDisplay toShow={limTauxVar2} demo /> 
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
                <p>Si l’on applique la formule de la pente avec deux points <MathJaxInline toShow={"$ A(x, g(x)) $"} /> et <MathJaxInline toShow={"$ B(1, f(1)) $"} />, on a : </p>
                <MathJaxDisplay toShow={eqDroite} demo /> 
                <p>Et en arrangeant : </p>
                <MathJaxDisplay toShow={eqDroite2} demo /> 
                <MathJaxDisplay toShow={eqDroite3} demo /> 
                <p>On a alors en remplaçant par nos valeurs : </p>
                <MathJaxDisplay toShow={eqDroiteCalculus} demo /> 
                <MathJaxDisplay toShow={eqDroiteCalculus2} demo /> 
                <MathJaxDisplay toShow={eqDroiteCalculus3} demo /> 
                <p>Nous pouvons généraliser l’équation de la tangente à la courbe <MathJaxInline toShow={"$ f $"} /> dont la pente est la dérivée <MathJaxInline toShow={"$ f'(a) $"} /> par </p>

                <Container className="Focus">
                     <MathJaxDisplay toShow={eqDroiteGen} />  
                </Container>
            </>
}

export default Exemple;