import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../ImageZoom';

import derivativeSquareFunction from '../assets/derivativeSquareFunction.png';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../CoursesConstants';

const Exemples = () => {

    var n = 0;

    var fCarree = "\\( \\forall x \\in \\mathbb{R}, f(x)= x^2\\)";
    var fCarreeTauxVar = "\\(a = \\frac{f(x+h) - f(x)}{h }\\)";
    var fCarreeTauxVar2 = "\\(a = \\frac{(x+h)^2 - (x)^2}{h }\\)";
    var fCarreeTauxVar3 = "\\(a = \\frac{x^2 + 2xh + h^2 - x^2}{h }\\)";
    var fCarreeTauxVar4 = "\\(a = \\frac{2xh + h^2}{h }\\)";
    var fCarreeTauxVar5 = "\\(a = h. \\frac{(2x + h)}{h }\\)";
    var fCarreeTauxVar6 = "\\(a = 2x + h\\)";

    var limFCarreeTauxVar = "\\( (x^2)' = lim_{ h \\to 0} \\enspace (2x + h)\\)";
    var limFCarreeTauxVar2 = "\\( (x^2)' = 2x\\)";

    var g = "\\(g(x) = ax + b\\)";

    var eqDroite = "\\(f'(1) = \\frac{g(x) - f(1)}{x - 1 }\\)";
    var eqDroite2 = "\\(g(x) - f(1) = f'(1)(x - 1 )\\)";
    var eqDroite3 = "\\(g(x) = f'(1)(x - 1 ) + f(1)\\)";

    var eqDroiteCalculus = "\\(g(x) = 2(x - 1 ) + 1\\)";
    var eqDroiteCalculus2 = "\\(g(x) = 2x - 2 + 1\\)";
    var eqDroiteCalculus3 = "\\(g(x) = 2x - 1\\)";

    var eqDroiteGen = "\\(g(x) = f'(a)(x -a ) + f(a)\\)";
    
    var fSqr = "\\( \\forall x \\in \\mathbb{R_+^*}, f(x)=  \\sqrt{x}\\)";
    var fSqrTauxVar = "\\( a = \\frac{ \\sqrt{x + h} - \\sqrt{x } }{h} \\)";
    var fSqrTauxVar2 = "\\( a =  \\frac{ \\left( \\sqrt{x + h} - \\sqrt{x } \\right).\\left( \\sqrt{x + h} + \\sqrt{x } \\right) } {h. \\left(\\sqrt{x + h} + \\sqrt{x} \\right)} \\)";
    var fSqrTauxVar3 = "\\( a =  \\frac{ x + h - x } {h. \\left(\\sqrt{x + h} + \\sqrt{x} \\right)} \\)";
    var fSqrTauxVar4 = "\\( a = \\frac{h}{h.\\left( \\sqrt{x + h} + \\sqrt{x } \\right)} \\)";
    var fSqrTauxVar5 = "\\( a = \\frac{1}{ \\sqrt{x + h} + \\sqrt{x }} \\)";
    
    var limFSqrTauxVar = "\\( (\\sqrt{x})' =  lim_{ h \\to 0} \\enspace \\frac{1}{ \\left( \\sqrt{x + h} + \\sqrt{x } \\right)} \\)";
    var limFSqrTauxVar2 = "\\( (\\sqrt{x})' =  \\frac{1}{2. \\sqrt{x }} \\)";

    return  <>
                <p>Nous allons voir dans ce chapitre quelques calculs de dérivée de fonctions usuelles.</p>
                
                <p className="Title1">a) La fonction carrée</p>
                <p>
                    La fonction carrée est définie de la manière suivante :
                </p>
                <MathJaxDisplay toShow={fCarree} demo />  
                <p>
                   Calculons sa dérivée :
                </p>

                <p className="Title2">Calcul de la pente</p>
                <p>On calcule la pente, puis on cherchera la limite quand <MathJaxInline toShow={"$ h \\to 0 $"} /> ( h tend vers 0 ).</p>
                <p>Avec la formule suivante vue plus haut, on a :</p>
                <MathJaxDisplay toShow={fCarreeTauxVar} demo />  
                <MathJaxDisplay toShow={fCarreeTauxVar2} demo />  
                <MathJaxDisplay toShow={fCarreeTauxVar3} demo />  
                <MathJaxDisplay toShow={fCarreeTauxVar4} demo /> 
                <p>On factorise par <MathJaxInline toShow={"$ h $"} /> :</p> 
                <MathJaxDisplay toShow={fCarreeTauxVar5} demo /> 
                <MathJaxDisplay toShow={fCarreeTauxVar6} demo /> 

                <p className="Title2">Calcul de la limite</p>
                <p>Calculons à présent la limite de ce qu’on vient de trouver :</p>
                <MathJaxDisplay toShow={limFCarreeTauxVar} demo /> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={limFCarreeTauxVar2} />  
                </Container>
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

                 <p className="Title1">a) La fonction racine carrée</p>
                <p>
                    La fonction racine carrée est définie de la manière suivante :
                </p>
                <MathJaxDisplay toShow={fSqr} demo />  
                <p>
                   Calculons sa dérivée en procédant de la même manière que plus haut :
                </p>

                <p className="Title2">Calcul de la pente</p>
                <MathJaxDisplay toShow={fSqrTauxVar} demo /> 
                <p>Pour traiter avec les racines, il est souvent utile de faire appel à son conjugué : </p>
                <MathJaxDisplay toShow={fSqrTauxVar2} demo /> 
                <MathJaxDisplay toShow={fSqrTauxVar3} demo /> 
                <MathJaxDisplay toShow={fSqrTauxVar4} demo /> 
                <p>On simplifie les <MathJaxInline toShow={"$ h $"} /> : </p>
                <MathJaxDisplay toShow={fSqrTauxVar5} demo /> 

                <p className="Title2">Calcul de la limite</p>
                <MathJaxDisplay toShow={limFSqrTauxVar} demo /> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={limFSqrTauxVar2} />  
                </Container>

            </>
}

export default Exemples;