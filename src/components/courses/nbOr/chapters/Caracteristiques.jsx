import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import FibonacciTable from '../helpers/FibonacciTable';

import ImageZoom from '../../ImageZoom';
import euclideStuff from '../assets/euclideStuff.png';
import Link from '../../../immutable/nav/Link';
import CoursesLinks from '../../CoursesLinks';

const Caracteristiques = () => {

    var n = 0;

    var euclideStuff1 =  "\\(\\frac{BC}{AB } =\\frac{AC}{BC }   \\)";
    var euclideStuff2 =  "\\(\\frac{x}{1} =\\frac{1 + x}{x}   \\)";
    var euclideStuff3 =  "\\(x^2 = 1+x \\)";
    var euclideStuff4 =  "\\(x^2 - x - 1 = 0  \\)";
    var euclideStuff5 =  "\\(x^2  =  x + 1 \\)";

    /* var euclideStuff4 =  "\\(\\begin{equation} \\label{eq:1} {x^2 - x - 1 = 0}  \\end{equation} \\)"; */

    var idRem = "\\( \\left(x - \\frac{1}{2}\\right)^2 = x^2 - x + \\frac{1}{4} \\)";
    var idRem2 = "\\( x^2 - x - 1 =   x^2 - x + \\frac{1}{4} -  \\frac{5}{4}\\)";
    var idRem3 = "\\( x^2 - x - 1 =  \\left(x - \\frac{1}{2}\\right)^2 -  \\frac{5}{4}\\)";

    var calcNbOr = "\\( \\left(x - \\frac{1}{2}\\right)^2 -  \\frac{5}{4} =   0\\)";
    var calcNbOr2 = "\\( \\left(x - \\frac{1}{2}\\right)^2   =  \\frac{5}{4} \\)";
    var calcNbOr3 = "\\( \\sqrt{\\left(x - \\frac{1}{2}\\right)^2}   =  \\sqrt{\\frac{5}{4}} \\)";
    var calcNbOr4 = "\\( x - \\frac{1}{2}   =  \\sqrt{\\frac{5}{4}} \\)";
    var calcNbOr5 = "\\( x = \\frac{ \\sqrt{5} }{\\sqrt{4}} + \\frac{1}{2} \\)";
    var calcNbOr6 = "\\( x = \\frac{ \\sqrt{5} }{2} + \\frac{1}{2} \\)";
    var calcNbOrR = "\\( x = \\frac{ 1 + \\sqrt{5} }{2} \\)";
    var calcNbOrRwithPhi = "\\( \\phi= \\frac{ 1 + \\sqrt{5} }{2} \\)";

    var phi22 =  "\\(\\phi^2 = \\phi + 1  \\)";
    var phi221 =  "\\(\\phi^2 = \\phi^1 + \\phi^0  \\)";

    var phi33 = "\\(\\phi^3 = \\phi^2 . \\phi \\)";
    var phi331 = "\\(\\phi^3 =  (\\phi + 1) .  \\phi \\)";
    var phi332 = "\\(\\phi^3 = \\phi^2 +  \\phi \\)";
    var phi333 = "\\(\\phi^3 = \\underbrace { \\phi + 1 }_\\text{ \\(\\phi^2\\)} +  \\phi \\)";
    var phi334 = "\\(\\phi^3 = 2\\phi + 1  \\)";
    var phi335 = "\\(\\phi^3 = F_3.\\phi + F_2  \\)";

    var phi44 = "\\(\\phi^4 = \\phi^3 . \\phi \\)";
    var phi441 = "\\(\\phi^4 = (2\\phi + 1) .  \\phi \\)";
    var phi442 = "\\(\\phi^4 = 2\\phi^2 +  \\phi \\)";
    var phi443 = "\\(\\phi^4 = 2(\\phi + 1) +  \\phi \\)";
    var phi444 = "\\(\\phi^4 = 2\\phi + 2 +  \\phi \\)";
    var phi445 = "\\(\\phi^4 = \\underbrace { 2\\phi + 1 }_\\text{\\(\\phi^3\\)} +  \\underbrace { \\phi + 1 }_\\text{\\(\\phi^2\\)} \\)";
    var phi446 = "\\(\\phi^4 = \\phi^3 +  \\phi^2 \\)";
    var phi447 = "\\(\\phi^4 = 3\\phi + 2 \\)";
    var phi448 = "\\(\\phi^4 = F_4.\\phi + F_3 \\)";

    var phiGen =  "\\(\\phi^{n+1} =  F_{n+1}.\\phi +  F_{n} \\)";
    var phiGen2 =  "\\(\\phi^{n+1} =  \\phi^{n} +  \\phi^{n - 1} \\)";

    return (
            <>
                <p className="Title1">Découverte du nombre d'or par Euclide</p>
                <p>
                    Euclide s’est intéressé à ce nombre et voulu le calculer de la manière suivante.
                </p>
                <ImageZoom src={euclideStuff} name="Questionnement d'Euclide" n={++n} />
                <p>{"\n"}Il souhaitait trouver une sorte de ratio "magique"; un nombre qui vérifiait l’équation suivante :</p>
                <MathJaxDisplay toShow={euclideStuff1} />
                <p>Autrement dit que : </p>
                <MathJaxDisplay toShow={euclideStuff2} />
                <p>Avec <Link link={CoursesLinks.PRODUIT_EN_CROIX}>le produit en croix</Link>, on sait que cela peut s'écrire :</p>
                <MathJaxDisplay toShow={euclideStuff3} />
                <p>Soit :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={euclideStuff4} />
                </Container>
                
                <p>On sait grâce aux identités remarquables que :</p>
                <MathJaxDisplay toShow={idRem} demo />
                <p>On peut voir de même que : </p>
                <MathJaxDisplay toShow={idRem2} demo />
                <p>Avec les deux expressions précédentes, on conclut que :</p>
                <MathJaxDisplay toShow={idRem3} demo />
                <p>Si l'on combine cette dernière expression avec celle que nous avons encadrée plus haut, on peut en déduire :</p>
                <MathJaxDisplay toShow={calcNbOr} demo />
                <MathJaxDisplay toShow={calcNbOr2} demo />
                <MathJaxDisplay toShow={calcNbOr3} demo />
                <p>On obtient alors :</p>
                <MathJaxDisplay toShow={calcNbOr4} demo />
                <p>Soit</p>
                <MathJaxDisplay toShow={calcNbOr5} demo />
                <MathJaxDisplay toShow={calcNbOr6} demo />
                 <MathJaxDisplay toShow={calcNbOrR} demo />
                <Container className="Focus">
                    <MathJaxDisplay toShow={calcNbOrRwithPhi} />
                </Container>            

                <p className="Title1">Caractéristiques du nombre d'or</p>
                <p>On a vu plus haut que ce nombre vérifiait l'équation suivante </p>
                <MathJaxDisplay toShow={euclideStuff4} />
                <p>Soit</p>
                <MathJaxDisplay toShow={euclideStuff5} />
                <p>Donc on peut remplacer <MathJaxInline toShow={"$x$"} /> par <MathJaxInline toShow={"$\\phi$"} /></p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi22} />
                </Container>
                <p>On peut aussi l'écrire sous cette forme</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi221} />
                </Container>
                <p className="Title2">Calcul de <MathJaxInline toShow={"$\\phi^3$"} /></p>
                <MathJaxDisplay toShow={phi33} demo />
                <p>On remplace <MathJaxInline toShow={"$\\phi^2$"} /> par <MathJaxInline toShow={"$\\phi + 1$"} /> </p>
                <MathJaxDisplay toShow={phi331} demo />
                <p>On applique la distributivité et on obtient</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi332} />
                </Container>
                <p>On remplace maintenant  <MathJaxInline toShow={"$\\phi + 1$"} />  par <MathJaxInline toShow={"$\\phi^2$"} /></p>
                <MathJaxDisplay toShow={phi333} demo />
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi334} />
                </Container>
                <p>Mais nous avons vu dans le chapitre précédent l'évolution des <MathJaxInline toShow={"$F_n$"} /></p>
                <FibonacciTable />
                <p>Sur cette seconde expression, <MathJaxInline toShow={"$2$"} /> correspond à <MathJaxInline toShow={"$F_3$"} /> et <MathJaxInline toShow={"$1$"} /> correspond à <MathJaxInline toShow={"$F_2$"} /> </p>
                <p>On peut donc écrire que :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi335} />
                </Container>
                <p>On obtient alors ces deux expressions à la suite des calculs :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi332} />
                    <MathJaxDisplay toShow={phi335} />
                </Container>

                <p className="Title2">Calcul de <MathJaxInline toShow={"$\\phi^4$"} /></p>
                <MathJaxDisplay toShow={phi44} demo />
                <p>On remplace par ce qu'on connait de <MathJaxInline toShow={"$\\phi^3$"} /> </p>
                <MathJaxDisplay toShow={phi441} demo />
                <p>On applique la distributivité</p>
                <MathJaxDisplay toShow={phi442} demo />
                <p>On remplace par ce qu'on connaît de <MathJaxInline toShow={"$\\phi^2$"} /> </p>
                <MathJaxDisplay toShow={phi443} demo />
                <MathJaxDisplay toShow={phi444} demo />
                <p>On obtient alors cette première expression</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi447} />
                </Container>
                <p>Mais on sait qu <MathJaxInline toShow={"$3$"} /> correspond à <MathJaxInline toShow={"$F_4$"} /> et <MathJaxInline toShow={"$2$"} /> correspond à <MathJaxInline toShow={"$F_3$"} /> </p>
                <p>On peut donc l'écrire sous la forme :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi448} />
                </Container>
                <p>Par la suite, on peut décomposer l'expression suivante en <MathJaxInline toShow={"$\\phi^3$"} /> et <MathJaxInline toShow={"$\\phi^2$"} /></p>
                <MathJaxDisplay toShow={phi447} demo />
                <MathJaxDisplay toShow={phi445} demo />
                <MathJaxDisplay toShow={phi446} demo />
                <p>On alors comme pour  <MathJaxInline toShow={"$\\phi^3$"} /> ce couple d'équations :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi446} />
                    <MathJaxDisplay toShow={phi448} />
                </Container>

                <p>On voit qu'il y a encore une fois un pattern qui se répète avec le nombre d'or.</p>
                <p>On peut alors généraliser ces deux expressions :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiGen} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiGen2} />
                </Container>
            </>

    )

}

export default Caracteristiques;