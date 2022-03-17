import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../mathjax-display/MathJaxInline';
import UnsplashCopyRight from '../UnsplashCopyRight';
import ImageZoom from '../ImageZoom';
import rabbits from './assets/rabbits.png';
import rabbitsEvolution from './assets/rabbitsEvolution.png';

import AppContext from '../../context/AppContext';
import RabbitsEvolutionTable from './RabbitsEvolutionTable';
import RatioTable from './RatioTable';
import FibonacciTable from './FibonacciTable';

import euclideStuff from './assets/euclideStuff.png';
import LeProduitEnCroix from '../cross-product/LeProduitEnCroix';

import './LeNombreDOr.css'

const LeNombreDOr = () => {

    const {updateComponent} = React.useContext(AppContext);

    var n = 0;
    var phiMain = "\\(F_{n+2} = F_{n+1} + F_{n} \\)";
    var ratio = "$\\frac{F_{n+1}}{F_{n}}$";
    var ratioValue = "\\(\\phi = lim_{n \\to +\\infty} \\enspace \\frac{F_{n+1}}{F_{n}}\\)";

    var ratioValueR = "\\(\\phi \\approx 1,618  \\)";

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

    var phiGen2 =  "\\(\\phi^{n+2} =  \\phi^{n+1} +  \\phi^{n} \\)";
    var phiGen =  "\\(\\phi^{n+1} =  F_{n+1}.\\phi +  F_{n} \\)";

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
    var phiPowMinus23 = "\\(\\frac{1}{\\phi^2} = 1 - (\\phi - 1)  \\)";
    var phiPowMinus24 = "\\(\\frac{1}{\\phi^2} = 2 - \\phi  \\)";

    var phiPowMinus3 = "\\(\\phi^{-2} = 2 - \\phi\\)";
    var phiPowMinus31 = "\\(\\phi^{-3} = \\frac{2}{\\phi} - 1\\)";
    var phiPowMinus32 = "\\(\\phi^{-3} = 2{\\phi}^{-1} - 1\\)";
    var phiPowMinus33 = "\\(\\phi^{-3} = 2  (\\phi - 1) - 1\\)";
    var phiPowMinus34 = "\\(\\phi^{-3} = 2(\\phi - 1) - 1\\)";
    var phiPowMinus35 = "\\(\\phi^{-3} = 2\\phi - 3\\)";


    var phiGen2VerifBegin = "\\(\\phi^{-1} = \\phi^{-2} + \\phi^{-3}\\)";
    var phiGen2Verif = "$\\phi^{-2} + \\phi^{-3} $";
    var phiGen2Verif2 = "\\(\\phi^{-2} + \\phi^{-3} = 2 - \\phi + 2\\phi -3 \\)";
    var phiGen2Verif3 = "\\(\\phi^{-2} + \\phi^{-3} = \\phi -1  \\)";
    var phiGen2VerifOk = "$\\phi - 1 = \\phi^{-1} $";

    var phiGenVerifBegin = "\\(\\phi^{-1} = F_{-1}.\\phi + F_{-2}\\)";
    var phiGenVerif = "$F_{-1}.\\phi + F_{-2} $";
    var phiGenVerif2 = "\\(F_{-1}.\\phi + F_{-2} = \\phi - 1 \\)";

    var approxPhi1Begin =  "$\\phi^2 = \\phi + 1  $";
    var approxPhi1 = "\\( \\phi = \\sqrt{1 + \\sqrt{1 + \\sqrt{1 + \\sqrt{1 + {...} }}}} \\)"

    var approxPhi2Begin =  "$ \\phi^{-1} = \\phi - 1 $";
    var approxPhi2 = "\\( \\phi = 1 + \\frac{1}{ 1 + \\frac{1}{ 1 + \\frac{1}{1 + \\frac{1}{1 + {...} }}}} \\)"
    

    React.useEffect(() => {
        if(process.env.NODE_ENV !== 'development') {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <p className="Title">Le nombre d'or</p>
            <Container className="CoursesContainer">  
                <p>
                    Voici le problème que s’est posé Fibonacci, un mathématicien italien en 1 202.
                    {"\n"}Il voulait étudier la progression de naissances de lapins, à partir d’un couple donné.
                 </p>
                 <ImageZoom src={rabbits} name="Couples de lapins" n={++n} />
                 <p>
                    {"\n"}Le 1 er mois, un jeune couple de lapins est réuni
                    {"\n"}Le 2 ème mois, ce couple donne naissance à un couple de lapereaux
                    {"\n"}{"\n"}Ensuite, les naissances répondent à la règle est la suivante :
                    {"\n"}- Un couple de lapereaux doit attendre un mois avant d’être mature et de pouvoir
                    donner naissance à un couple de lapereaux
                    {"\n"}- Un couple de lapins adultes donne naissance à un couple de lapereaux tous les mois
                    {"\n"}{"\n"}
                </p>
                <p className="Title1">Évolution du nombre de couples de lapins chaque mois</p>
               
                <RabbitsEvolutionTable />
                <ImageZoom src={rabbitsEvolution} name="Évolution du nombre de couple de lapins sur un an" n={++n} />
                <p>
                    On remarque l'évolution suit une certaine tendance.
                    {"\n"}En effet, le couple de lapins présents au mois <MathJaxInline toShow={"$n$"} /> est toujours égal à l'addition de ceux présents les deux mois précédents.
                    {"\n"}{"\n"}On alors cette modélisation :
                </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiMain} />
                </Container>
                <p><MathJaxInline toShow={"$F_n$"} /> étant le nombre de lapins au mois <MathJaxInline toShow={"$n$"} /></p>
                <p>
                    Pour les mois avant la naissance des premiers specimens, on prendra comme valeur <MathJaxInline toShow={"$0$"} />.
                    La suite de nombres correspondant au naissances de lapins s'appelle la suite de Fibonacci.
                </p>
                <p>
                    Fibonacci s'est ensuite intéressé au ratio entre le nombre au mois suivant et le mois courant.
                    {"\n"}Soit <MathJaxInline toShow={ratio} />
                </p>
                <RatioTable />
                <p>On s'aperçoit que l'on tend vers une certaine valeur, mais sa valeur exacte est  :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={ratioValue} />
                </Container>
                <p>Sa valeur approchée est : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={ratioValueR} />
                </Container>
                <p>
                    Ce nombre est le nombre d’or, autrement appelée la divine proportion, désigné par la
                    lettre grecque <MathJaxInline toShow={"$\\phi$"} /> . 
                    {"\n"}Un des plus célèbres nombres utilisés dans les mathématiques, notamment avec le nombre <MathJaxInline toShow={"$\\pi$"} /> . 
                    {"\n"}Il est célèbre pour ces fascinantes caractéristiques mais aussi sa présence dans la nature.
                </p>

                <p className="Title1">Découverte du nombre d'or par Euclide</p>
                <p>
                    Euclide s’est intéressé à ce nombre et voulu le calculer de la manière suivante.
                </p>
                <ImageZoom src={euclideStuff} name="Questionnement d'Euclide" n={++n} />
                <p>{"\n"}Il souhaitait trouver une sorte de ratio "magique"; un nombre qui vérifiait l’équation suivante :</p>
                <MathJaxDisplay toShow={euclideStuff1} />
                <p>Autrement dit que : </p>
                <MathJaxDisplay toShow={euclideStuff2} />
                <p>Avec le produit en croix, on sait que cela peut s'écrire :</p>
                <MathJaxDisplay toShow={euclideStuff3} />
                <Button 
                    className="DefaultButton" 
                    onClick={() => updateComponent(<LeProduitEnCroix />)}>
                        Chapitre sur le produit en croix
                </Button>
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
                <p>On a vu plus haut que cenombre vérifiait l'équation suivante </p>
                <MathJaxDisplay toShow={euclideStuff4} />
                <p>Donc on peut remplacer <MathJaxInline toShow={"$x$"} /> par <MathJaxInline toShow={"$\\phi$"} /></p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi22} />
                    <MathJaxDisplay toShow={phi221} />
                </Container>
                
                <p className="Underline">Calcul de <MathJaxInline toShow={"$\\phi^3$"} /></p>
                <MathJaxDisplay toShow={phi33} demo />
                <p>On remplace <MathJaxInline toShow={"$\\phi^2$"} /> par <MathJaxInline toShow={"$\\phi + 1$"} /> </p>
                <MathJaxDisplay toShow={phi331} demo />
                <p>Encore une fois on remplace ^^</p>
                <MathJaxDisplay toShow={phi333} demo />
                <p>On obtient ces deux expressions au suite des calculs :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi332} />
                    <MathJaxDisplay toShow={phi334} />
                </Container>
                
                <p className="Underline">Calcul de <MathJaxInline toShow={"$\\phi^4$"} /></p>
                <MathJaxDisplay toShow={phi44} demo />
                <p>On remplace par ce qu'on connait de <MathJaxInline toShow={"$\\phi^3$"} /> </p>
                <MathJaxDisplay toShow={phi441} demo />
                <MathJaxDisplay toShow={phi442} demo />
                <p>Encore une fois on remplace^^</p>
                <MathJaxDisplay toShow={phi443} demo />
                <MathJaxDisplay toShow={phi444} demo />
                <MathJaxDisplay toShow={phi445} demo />
                <Container className="Focus">
                    <MathJaxDisplay toShow={phi446} />
                    <MathJaxDisplay toShow={phi447} />
                </Container>
                <p>On voit qu'il y a encore une fois un pattern qui se répète avec le nombre d'or.</p>
                <p>On peut alors généraliser ces deux expressions :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiGen2} />
                    <MathJaxDisplay toShow={phiGen} />
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
                
                <p className="Underline">Calcul de <MathJaxInline toShow={"$\\phi^{-1}$"} /></p>
                <p>On sait que : </p>
                <MathJaxDisplay toShow={phi22} demo/>
                <p>Divisons tout par <MathJaxInline toShow={"$\\phi$"} /> pour transformer <MathJaxInline toShow={"$1$"} /> en <MathJaxInline toShow={"$\\frac{1}{\\phi}$"} /></p>
                <MathJaxDisplay toShow={phiPowMinus1} demo/>
                <MathJaxDisplay toShow={phiPowMinus11} demo/>
                <p>Soit :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiPowMinus12} demo/>
                </Container>
              
                <p className="Underline">Calcul de <MathJaxInline toShow={"$\\phi^{-2}$"} /></p>
                <p>On sait que : </p>
                <MathJaxDisplay toShow={phiPowMinus2} demo/>
                <p>Soit que </p>
                <MathJaxDisplay toShow={phiPowMinus21} demo/>
                <p>On divise encore tout par <MathJaxInline toShow={"$\\phi$"} /></p>
                <MathJaxDisplay toShow={phiPowMinus22} demo/>
                <MathJaxDisplay toShow={phiPowMinus23} demo/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiPowMinus24} demo/>
                </Container>

                <p className="Underline">Calcul de <MathJaxInline toShow={"$\\phi^{-3}$"} /></p>
                <p>On sait que : </p>
                <MathJaxDisplay toShow={phiPowMinus3} demo/>
                <p>Soit que </p>
                <MathJaxDisplay toShow={phiPowMinus31} demo/>
                <p>On divise encore tout par <MathJaxInline toShow={"$\\phi$"} /></p>
                <MathJaxDisplay toShow={phiPowMinus32} demo/>
                <MathJaxDisplay toShow={phiPowMinus33} demo/>
                <MathJaxDisplay toShow={phiPowMinus34} demo/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiPowMinus35} demo/>
                </Container>


                <p className="Underline">Vérification</p>
                <p>Nous allons vérifier que les formules marchent bien aussi en sens inverse.</p>
                <p>Pour rappel, nous avions :</p>
                <MathJaxDisplay toShow={phiGen2} />
                <p>Si tout se passe bien, nous devrions retrouver :</p>
                <MathJaxDisplay toShow={phiGen2VerifBegin} />
                <p>Calculons d'abord <MathJaxInline toShow={phiGen2Verif} /></p>
                <MathJaxDisplay toShow={phiGen2Verif2} demo/>
                <MathJaxDisplay toShow={phiGen2Verif3} demo/>
                <p>Tout est OK, car <MathJaxInline toShow={phiGen2VerifOk} />,  vérifions maintenant la seconde formule :</p>
                <MathJaxDisplay toShow={phiGen} />
                <p>De même, si tout se passe bien, nous devrions avoir :</p>
                <MathJaxDisplay toShow={phiGenVerifBegin} />
                <p>Calculons d'abord <MathJaxInline toShow={phiGenVerif} /></p>
                <MathJaxDisplay toShow={phiGenVerif2} demo />
                <p>De même, tout est OK</p>
                <p className="Title1">Autres formules générales</p>
                <p>À partir de la formule <MathJaxInline toShow={approxPhi1Begin}/>, on a :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPhi1} />
                </Container>
                <p>À partir de la formule <MathJaxInline toShow={approxPhi2Begin}/>, on a :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={approxPhi2} infiniteFrac />
                </Container>
            </Container>
            <UnsplashCopyRight item="Images" />
        </>
    );
}

export default LeNombreDOr;