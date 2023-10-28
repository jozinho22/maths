import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

const MultiplicationDePuissances = () => {

    var txtThou = "3 fois ";
    var txtHundred = "2 fois ";
    var thouByHundred = "\\( 10^3 \\times 10^2 = \\underbrace { 10 \\times 10 \\times 10}_\\text{" + txtThou + "} \\times \\underbrace { 10 \\times 10}_\\text{" + txtHundred+ "} \\)";
    var thouByHundred2 = "\\( 10^3\\times 10^2 = 10^5 \\)";
    var powTimesPow = "\\(x^a.x^b = x^{a+b} \\)";

    /* var ePowerLn = "\\(e^{ln(x)} = x \\)";
    var ePowerLnAlpha = "\\(x^\\alpha = \\left(e^{ln(x)}\\right)^\\alpha\\)";
    var ePowerLnAlpha2 = "\\(x^\\alpha = e^{\\alpha.ln(x)}\\)";
    var ePowerLnAlphaBeta = "\\(x^\\alpha. x^\\beta = e^{\\alpha.ln(x)}. e^{\\beta.ln(x)} \\)";
    var ePowerLnAlphaBeta2 = "\\(x^\\alpha. x^\\beta = e^{(\\alpha + \\beta).ln(x)} \\)";
    var ePowerLnAlphaBeta3 = "\\(x^\\alpha. x^\\beta = \\left(e^{ln(x)}\\right)^{\\alpha + \\beta} \\)";
 */
    var xPowAB = "\\(x^a. x^b = x^{a+b} \\)";

    var xPowAOnXPowBDemo = "\\( \\frac{x^a}{x^b} = x^a.x^{-b} = x^{a - b} \\)";
    var xPowAOnXPowB = "\\( \\frac{x^a}{x^b} = x^{a - b} \\)";

    return (
            <>
                <p>Si l'on multiplie des puissances ensemble, voici ce qu'il se passe : </p>
                <MathJaxDisplay toShow={thouByHundred} demo />
                <p>Soit</p>
                <MathJaxDisplay toShow={thouByHundred2} demo />
                <p>On voit que les exposants s'additionnent.
                    {"\n"}Ce qui nous donne la première formule :
                </p>
                
                <MathJaxDisplay toShow={powTimesPow} demo /* fRef={1} */ />
                <p>Ici avec <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> des entiers naturels (l'ensemble <MathJaxInline toShow={"$\\mathbb{N}$"} />) .</p>
                
               {/*  <p>Pour vérifier cette formule pour tout <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> dans <MathJaxInline toShow={"$\\mathbb{R}$"} />, c'est-à-dire n'importe quel nombre réel, il faut passer par une petite astuce.</p> */}
                
                {/* <Title2 title={"Vérification pour tout nombre a et b"} />
                <p>On sait que :</p>
                <MathJaxDisplay toShow={ePowerLn} demo />
                <p>Car <MathJaxInline toShow={"$e^x$"} /> et <MathJaxInline toShow={"$ln(x)$"} /> sont deux fonctions réciproques et bijectives.</p>
                <p>Alors, on peut aussi voir par extension que, pour tout <MathJaxInline toShow={"$\\alpha$"} /> dans <MathJaxInline toShow={"$\\mathbb{R}$"} /> :</p>
                <MathJaxDisplay toShow={ePowerLnAlpha} demo />
                <MathJaxDisplay toShow={ePowerLnAlpha2} demo />
                <p>De même, avec <MathJaxInline toShow={"$\\beta$"} /> aussi dans <MathJaxInline toShow={"$\\mathbb{R}$"} /></p>
                <MathJaxDisplay toShow={ePowerLnAlphaBeta} demo />
                <MathJaxDisplay toShow={ePowerLnAlphaBeta2} demo />
                <MathJaxDisplay toShow={ePowerLnAlphaBeta3} demo />*/}
                <p>Il est alors possible de <Link url={"https://math.stackexchange.com/questions/3766951/how-to-prove-that-amn-amn-where-a-m-n-are-real-numbers-and-a0"} external>démontrer que c'est le cas pour deux réels</Link> (l'ensemble <MathJaxInline toShow={"$\\mathbb{R}$"} />) : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={xPowAB}/>
                    <MathJaxDisplay toShow={"\\( avec (\\enspace a, \\enspace b) \\in \\mathbb{R}^2) \\)"} demo />
                </Container> 

                <Title1 title={"Quotient de puissances"} />
                <p>On déduit alors de cette formule et <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PUISSANCES}/inverse-de-puissances-de-x`} external>cette formule</Link>, une formule pour les quotients.</p>
                <MathJaxDisplay toShow={xPowAOnXPowBDemo} demo />
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xPowAOnXPowB}/>
                    <MathJaxDisplay toShow={"\\( avec (\\enspace a, \\enspace b) \\in \\mathbb{R}^2, \\enspace x \\neq 0 \\)"} demo />
                </Container>
            </>
    );
}

export default MultiplicationDePuissances;