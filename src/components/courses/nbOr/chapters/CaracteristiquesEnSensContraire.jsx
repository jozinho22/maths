import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import FibonacciTableInBothSenses from '../helpers/FibonacciTableInBothSenses';

const CaracteristiquesEnSensContraire = () => {

    var phi22 =  "\\(\\phi^2 = \\phi + 1  \\)";

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

    return (
            <>             
                <p>En effet, avec la formule vu précédemment :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiMain} />
                </Container>
                <p>On peut l'arranger pour aller en sens contraire</p>
                <MathJaxDisplay toShow={phiMainReverse} demo/>
                <p>À ce moment là, on peut calculer par exemple <MathJaxInline toShow={"$F_{0}$"} />, puis  <MathJaxInline toShow={"$F_{-1}$"} />,  <MathJaxInline toShow={"$F_{-2}$"} /> ...etc.</p>
                <MathJaxDisplay toShow={f0} demo/>
                <MathJaxDisplay toShow={f01} demo/>
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={f02} />
                </Container>
                <MathJaxDisplay toShow={fMinus1} demo/>
                <MathJaxDisplay toShow={fMinus11} demo/>
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={fMinus12} />
                </Container>
                <MathJaxDisplay toShow={fMinus2} demo/>
                <MathJaxDisplay toShow={fMinus21} demo/>
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={fMinus22} />
                </Container>
                <MathJaxDisplay toShow={fMinus3} demo/>
                <MathJaxDisplay toShow={fMinus31} demo/>
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={fMinus32} />
                </Container>
                <p>Voici les éléments de la suite ajoutée de leur mirroir</p>
                <FibonacciTableInBothSenses />
                
                <p className="Title2">Calcul de <MathJaxInline toShow={"$\\phi^{-1}$"} /></p>
                <p>On sait que : </p>
                <MathJaxDisplay toShow={phi22} demo/>
                <p>Divisons tout par <MathJaxInline toShow={"$\\phi$"} /> pour transformer <MathJaxInline toShow={"$1$"} /> en <MathJaxInline toShow={"$\\frac{1}{\\phi}$"} /></p>
                <MathJaxDisplay toShow={phiPowMinus1} demo/>
                <MathJaxDisplay toShow={phiPowMinus11} demo/>
                <p>Soit :</p>
                <Container className="Focus LittleFocus">
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
                <Container className="Focus LittleFocus">
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
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={phiPowMinus34} />
                </Container>
            </>

    )

}

export default CaracteristiquesEnSensContraire;