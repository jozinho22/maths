import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../ImageZoom';
import FibonacciTable from '../FibonacciTable';
import euclideStuff from '../assets/euclideStuff.png';

const Caracteristiques = () => {

    var n = 0;

    var euclideStuff1 =  "\\(\\frac{BC}{AB } =\\frac{AC}{BC }   \\)";
    var euclideStuff2 =  "\\(\\frac{x}{1} =\\frac{1 + x}{x}   \\)";
    var euclideStuff3 =  "\\(x^2 = 1+x \\)";
    var euclideStuff4 =  "\\(x^2 - x - 1 = 0  \\)";
    /* var euclideStuff4 =  "\\(\\begin{equation} \\label{eq:1} {x^2 - x - 1 = 0}  \\end{equation} \\)"; */

    var idRem = "\\( \\big(x - \\frac{1}{2}\\big)^2 = x^2 - x + \\frac{1}{4} \\)";
    var idRem2 = "\\( x^2 - x - 1 =   x^2 - x + \\frac{1}{4} -  \\frac{5}{4}\\)";
    var idRem3 = "\\( x^2 - x - 1 =  \\big(x - \\frac{1}{2}\\big)^2 -  \\frac{5}{4}\\)";

    var calcNbOr = "\\( \\big(x - \\frac{1}{2}\\big)^2 -  \\frac{5}{4} =   0\\)";
    var calcNbOr2 = "\\( \\big(x - \\frac{1}{2}\\big)^2   =  \\frac{5}{4} \\)";
    var calcNbOr3 = "\\( \\sqrt{\\big(x - \\frac{1}{2}\\big)^2}   =  \\sqrt{\\frac{5}{4}} \\)";
    var calcNbOr4 = "\\( x - \\frac{1}{2}   =  \\sqrt{\\frac{5}{4}} \\)";
    var calcNbOr5 = "\\( x = \\frac{ \\sqrt{5} }{\\sqrt{4}} + \\frac{1}{2} \\)";
    var calcNbOr6 = "\\( x = \\frac{ \\sqrt{5} }{2} + \\frac{1}{2} \\)";
    var calcNbOrR = "\\( x = \\frac{ 1 + \\sqrt{5} }{2} \\)";
    var calcNbOrRwithPhi = "\\( \\phi= \\frac{ 1 + \\sqrt{5} }{2} \\)";

    var phi22 =  "\\(\\phi^2 = \\phi + 1  \\)";
    var phi221 =  "\\(\\phi^2 = \\phi^1 + \\phi^0  \\)";

    var phi33 = "\\(\\phi^3 = \\phi^2 \\phi \\)";
    var phi331 = "\\(\\phi^3 =  (\\phi + 1)  \\phi \\)";
    var phi332 = "\\(\\phi^3 = \\phi^2 +  \\phi \\)";
    var phi333 = "\\(\\phi^3 = \\underbrace { \\phi + 1 }_\\text{ \\(\\phi^2\\)} +  \\phi \\)";
    var phi334 = "\\(\\phi^3 = 2\\phi + 1  \\)";

    var phi44 = "\\(\\phi^4 = \\phi^3 \\phi \\)";
    var phi441 = "\\(\\phi^4 = (2\\phi + 1)  \\phi \\)";
    var phi442 = "\\(\\phi^4 = 2\\phi^2 +  \\phi \\)";
    var phi443 = "\\(\\phi^4 = 2(\\phi + 1) +  \\phi \\)";
    var phi444 = "\\(\\phi^4 = 2\\phi + 2 +  \\phi \\)";
    var phi445 = "\\(\\phi^4 = \\underbrace { 2\\phi + 1 }_\\text{\\(\\phi^3\\)} +  \\underbrace { \\phi + 1 }_\\text{\\(\\phi^2\\)} \\)";
    var phi446 = "\\(\\phi^4 = \\phi^3 +  \\phi^2 \\)";
    var phi447 = "\\(\\phi^4 = 3\\phi + 2 \\)";

    var phiGen =  "\\(\\phi^{n+1} =  F_{n+1}.\\phi +  F_{n} \\)";
    var phiGen2 =  "\\(\\phi^{n+2} =  \\phi^{n+1} +  \\phi^{n} \\)";

    var phiMain = "\\(F_{n+2} = F_{n+1} + F_{n} \\)";
    var phiMainReverse = "\\( F_{n} = F_{n+2} - F_{n+1} \\)";

    var f0 = "\\( F_{0} = F_{2} - F_{1} \\)";
    var f01 = "\\( F_{0} = 1 - 1 \\)";
    var f02 = "\\( F_{0} = 0 \\)";

    var fMinus1 = "\\( F_{-1} = F_{1} - F_{0} \\)";
    var fMinus11 = "\\( F_{-1} = 1 - 0 \\)";
    var fMinus12 = "\\( F_{-1} = 1 \\)";

    var fMinus2 = "\\( F_{-2} = F_{0} - F_{-1} \\)";
    var fMinus21 = "\\( F_{-2} = 0 -1 \\)";
    var fMinus22 = "\\( F_{-2} = -1 \\)";

    var fMinus3 = "\\( F_{-3} = F_{-1} - F_{-2} \\)";
    var fMinus31 = "\\( F_{-3} = 1 - (-1) \\)";
    var fMinus32 = "\\( F_{-3} = 2 \\)";

    var phiPowMinus1 = "\\(\\phi = 1 + \\frac{1}{\\phi} \\)";
    var phiPowMinus11 = "\\(\\frac{1}{\\phi} = \\phi - 1 \\)";
    var phiPowMinus12 = "\\(\\phi^{-1} = \\phi - 1 \\)";

    var phiPowMinus2 = "\\(\\phi^{-1} = \\phi - 1 \\)";
    var phiPowMinus21 = "\\(\\frac{1}{\\phi} = \\phi - 1 \\)";
    var phiPowMinus22 = "\\(\\frac{1}{\\phi^2} = 1 - \\frac{1}{\\phi}  \\)";
    var phiPowMinus23 = "\\(\\phi^{-2} = 1 - (\\phi - 1)  \\)";
    var phiPowMinus24 = "\\(\\phi^{-2} = 2 - \\phi  \\)";

    var phiPowMinus3 = "\\(\\phi^{-2} = 2 - \\phi\\)";
    var phiPowMinus31 = "\\(\\phi^{-3} = \\frac{2}{\\phi} - 1\\)";
    var phiPowMinus32 = "\\(\\phi^{-3} = 2{\\phi}^{-1} - 1\\)";
    var phiPowMinus33 = "\\(\\phi^{-3} = 2  (\\phi - 1) - 1\\)";
    var phiPowMinus34 = "\\(\\phi^{-3} = 2\\phi - 3\\)";

    var phiGenVerifBegin = "\\(\\phi^{-1} = F_{-1}.\\phi + F_{-2}\\)";
    var phiGenVerif = "$F_{-1}.\\phi + F_{-2} $";
    var phiGenVerif2 = "\\(F_{-1}.\\phi + F_{-2} = \\phi - 1 \\)";
    var phiGenVerifOk = "$\\phi^{-1} = \\frac{1}{\\phi} $";
    var phiGenVerifOk2 = "\\(\\phi^{-1} = F_{-1}.\\phi + F_{-2} \\)";

    var phiGen2VerifBegin = "\\(\\phi^{-1} = \\phi^{-2} + \\phi^{-3}\\)";
    var phiGen2Verif = "$\\phi^{-2} + \\phi^{-3} $";
    var phiGen2Verif2 = "\\(\\phi^{-2} + \\phi^{-3} = 2 - \\phi + 2\\phi -3 \\)";
    var phiGen2Verif3 = "\\(\\phi^{-2} + \\phi^{-3} = \\phi -1  \\)";
    var phiGen2VerifOk = "$\\phi - 1 = \\phi^{-1} $";

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
                <p>Avec <a href="/cours/le-produit-en-croix" target="_blank" >le produit en croix</a>, on sait que cela peut s'écrire :</p>
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
                <p>Encore une fois on remplace ^^</p>
                <MathJaxDisplay toShow={phi333} demo />
                <p>On obtient ces deux expressions au suite des calculs :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi334} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi332} />
                </Container>
             
                <p className="Title2">Calcul de <MathJaxInline toShow={"$\\phi^4$"} /></p>
                <MathJaxDisplay toShow={phi44} demo />
                <p>On remplace par ce qu'on connait de <MathJaxInline toShow={"$\\phi^3$"} /> </p>
                <MathJaxDisplay toShow={phi441} demo />
                <MathJaxDisplay toShow={phi442} demo />
                <p>Encore une fois on remplace^^</p>
                <MathJaxDisplay toShow={phi443} demo />
                <MathJaxDisplay toShow={phi444} demo />
                <MathJaxDisplay toShow={phi445} demo />
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi447} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi446} />
                </Container>
                <p>On voit qu'il y a encore une fois un pattern qui se répète avec le nombre d'or.</p>
                <p>On peut alors généraliser ces deux expressions :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiGen} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiGen2} />
                </Container>

                <p className="Title1">Caractéristiques du nombre d'or en sens inverse</p>
                <p>En effet, avec la formule ci-dessous</p>
                <MathJaxDisplay toShow={phiMain} demo/>
                <p>On peut l'arranger pour aller en sens contraire</p>
                <MathJaxDisplay toShow={phiMainReverse} demo/>
                <p>À ce moment là, on peut calculer par exemple <MathJaxInline toShow={"$F_{0}$"} />, puis  <MathJaxInline toShow={"$F_{-1}$"} />,  <MathJaxInline toShow={"$F_{-2}$"} /> ...etc.</p>
                <MathJaxDisplay toShow={f0} demo/>
                <MathJaxDisplay toShow={f01} demo/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={f02} />
                </Container>
                <MathJaxDisplay toShow={fMinus1} demo/>
                <MathJaxDisplay toShow={fMinus11} demo/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={fMinus12} />
                </Container>
                <MathJaxDisplay toShow={fMinus2} demo/>
                <MathJaxDisplay toShow={fMinus21} demo/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={fMinus22} />
                </Container>
                <MathJaxDisplay toShow={fMinus3} demo/>
                <MathJaxDisplay toShow={fMinus31} demo/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={fMinus32} />
                </Container>
                <p>Voici les éléments de la suite ajoutée de leur mirroir</p>
                <FibonacciTable />
                
                <p className="Title2">Calcul de <MathJaxInline toShow={"$\\phi^{-1}$"} /></p>
                <p>On sait que : </p>
                <MathJaxDisplay toShow={phi22} demo/>
                <p>Divisons tout par <MathJaxInline toShow={"$\\phi$"} /> pour transformer <MathJaxInline toShow={"$1$"} /> en <MathJaxInline toShow={"$\\frac{1}{\\phi}$"} /></p>
                <MathJaxDisplay toShow={phiPowMinus1} demo/>
                <MathJaxDisplay toShow={phiPowMinus11} demo/>
                <p>Soit :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiPowMinus12} />
                </Container>
              
                <p className="Title2">Calcul de <MathJaxInline toShow={"$\\phi^{-2}$"} /></p>
                <p>On sait que : </p>
                <MathJaxDisplay toShow={phiPowMinus2} demo/>
                <p>Soit que </p>
                <MathJaxDisplay toShow={phiPowMinus21} demo/>
                <p>On divise encore tout par <MathJaxInline toShow={"$\\phi$"} /></p>
                <MathJaxDisplay toShow={phiPowMinus22} demo/>
                <MathJaxDisplay toShow={phiPowMinus23} demo/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiPowMinus24} />
                </Container>

                <p className="Title2">Calcul de <MathJaxInline toShow={"$\\phi^{-3}$"} /></p>
                <p>On sait que : </p>
                <MathJaxDisplay toShow={phiPowMinus3} demo/>
                <p>Soit que </p>
                <MathJaxDisplay toShow={phiPowMinus31} demo/>
                <p>On divise encore tout par <MathJaxInline toShow={"$\\phi$"} /></p>
                <MathJaxDisplay toShow={phiPowMinus32} demo/>
                <MathJaxDisplay toShow={phiPowMinus33} demo/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiPowMinus34} />
                </Container>

                <p className="Title2">Vérification</p>
                <p>Nous allons vérifier que les formules marchent bien aussi en sens inverse.</p>
                <p>Pour rappel, nous avions :</p>
                
                <p>Si tout se passe bien, nous devrions retrouver notre formule :</p>
                <MathJaxDisplay toShow={phiGen} />
                <p>Nous devrions alors avoir :</p>
                <MathJaxDisplay toShow={phiGenVerifBegin} />
                <p>Calculons d'abord <MathJaxInline toShow={phiGenVerif} /></p>
                <MathJaxDisplay toShow={phiGenVerif2} demo />
                <p>Tout est OK, car <MathJaxInline toShow={phiGenVerifOk} /></p>
                <p>Donc </p>
                <MathJaxDisplay toShow={phiGenVerifOk2}  />

                <p>{"\n"}{"\n"}Vérifions maintenant la seconde formule :</p>
                <MathJaxDisplay toShow={phiGen2} />
                <p>Si tout se passe bien, nous devrions avoir :</p>
                <MathJaxDisplay toShow={phiGen2VerifBegin} />
                <p>Calculons d'abord <MathJaxInline toShow={phiGen2Verif} /></p>
                <MathJaxDisplay toShow={phiGen2Verif2} demo/>
                <MathJaxDisplay toShow={phiGen2Verif3} demo/>
                <p>Tout est OK, car <MathJaxInline toShow={phiGen2VerifOk} /></p>
                <p>Donc</p>
                <MathJaxDisplay toShow={phiGen2VerifBegin} />
            </>

    )

}

export default Caracteristiques;