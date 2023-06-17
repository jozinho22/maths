import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Aside from '../../Aside';

const EquationsDuSecondDegre = () => {


    var equSecondDeg = "\\(f(x) = ax^2 + bx + c \\)";
    var equSecondDegEquals0 = "\\( ax^2 + bx + c = 0 \\)";
    var equSecondDegEquals0Fact = "\\( a \\left(x^2 + \\frac{b}{a}.x + \\frac{c}{a} \\right) = 0 \\)";
    var equSecondDegEquals0Fact2 = "\\( a \\Biggl( \\biggl(x + \\frac{b}{2a} \\biggr)^2 - \\frac{b^2}{4a^2} +  \\frac{c}{a} \\Biggr) = 0\\)";

    var equToFact = "\\( \\biggl(x + \\frac{b}{2a} \\biggr)^2 = x^2 + \\frac{b}{a}.x + \\frac{b^2}{4a^2} \\)";
    var equToFact2 = "\\(  \\biggl(x + \\frac{b}{2a} \\biggr)^2 - \\frac{b^2}{4a^2}  = x^2 + \\frac{b}{a}.x\\)";
    var equToFact3 = "\\(  x^2 + \\frac{b}{a}.x  = \\biggl(x + \\frac{b}{2a} \\biggr)^2 - \\frac{b^2}{4a^2} \\)";

    var equSecondDegEquals0Fact3 = "\\( a \\Biggl( \\biggl(x + \\frac{b}{2a} \\biggr)^2 - \\frac{b^2 - 4ac}{4a^2}  \\Biggr) = 0\\)";
    var equSecondDegEquals0Fact3WithoutA = "\\( \\biggl(x + \\frac{b}{2a} \\biggr)^2 - \\frac{b^2 - 4ac}{4a^2} = 0\\)";
    var equSecondDegEquals0Fact3WithoutA2 = "\\( \\biggl(x + \\frac{b}{2a} \\biggr)^2  = \\frac{b^2 - 4ac}{4a^2}\\)";

    var X2EqualsKSolution1 = "\\( X_1 = \\sqrt{K} \\)";
    var X2EqualsKSolution2 = "\\( X_2 = - \\sqrt{K} \\)";
    var changeVariableForX = "\\( X = x + \\frac{b}{2a} \\)";

    var x1Calculus = "\\( x_1 + \\frac{b}{2a} = \\sqrt{\\frac{b^2 - 4ac}{4a^2}} \\)";
    var x2Calculus = "\\( x_2 + \\frac{b}{2a} = -\\sqrt{\\frac{b^2 - 4ac}{4a^2}} \\)";
    var x1Calculus2 = "\\( x_1  = - \\frac{b}{2a} + \\frac{\\sqrt{b^2 - 4ac}}{2a} \\)";
    var x2Calculus2 = "\\( x_2  = - \\frac{b}{2a} - \\frac{\\sqrt{b^2 - 4ac}}{2a} \\)";

    var x0 = "\\( x_0  = - \\frac{b}{2a} \\)";

    var delta = "\\( \\Delta = b^2 - 4ac \\)";

    var x1Calculus3 = "\\( x_1  = \\frac{-b + \\sqrt{\\Delta}}{2a} \\)";
    var x2Calculus3 = "\\( x_2  = \\frac{-b - \\sqrt{\\Delta}}{2a} \\)";


    var factX1X2 = "\\( a (x - x_1)(x - x_2) = 0 \\)";
    var factX0 = "\\( a (x - x_0)^2 = 0 \\)";

    var factEntirely = "\\( a \\Biggl( x - \\biggl(\\frac{- b + \\sqrt{b^2 - 4ac}}{2a} \\biggr) \\Biggr) \\Biggl( x - \\biggl(\\frac{- b - \\sqrt{b^2 - 4ac}}{2a} \\biggr) \\Biggr) = 0\\)";
    
    var devAfterFact = "\\( a \\Biggl( x^2 - x . \\biggl(\\frac{- b + \\sqrt{b^2 - 4ac}}{2a} \\biggr) - x . \\biggl( \\frac{- b - \\sqrt{b^2 - 4ac}}{2a} \\biggr)  + \\frac{b^2}{4a^2} - \\frac{b^2 - 4ac}{4a^2}  \\Biggr) = 0 \\)";
    
    var factByX = "\\( a \\Biggl( x^2 - x . \\biggl(\\frac{-2b}{2a} \\biggr) + \\frac{b^2 - b^2 + 4ac}{4a^2} \\Biggr) = 0\\)";

    return  <>
                <p>
                    Les équations du second degré sont des fonctions dont l'exposant de la variable <MathJaxInline toShow={"$x$"} /> est <MathJaxInline toShow={"$2$"} />.
                </p>
                <p>On aura une expression de ce type :</p>
                <MathJaxDisplay toShow={equSecondDeg} demo />
                <p>Elles sont définies sur <MathJaxInline toShow={"$\\mathbb{R}$"} />, l'ensemble des réels.</p>

                <p>La résolution d'une équation du second degré va d'abord consister à chercher les racines du pôlynome, à savoir les valeurs de <MathJaxInline toShow={"$x$"} /> pour lesquelles : </p>
                <p>On aura alors une forme factorisée qui nous permettra de connaître ses variations.</p>
                <MathJaxDisplay toShow={equSecondDegEquals0} fRef={1} demo />
                <p>On factorise l'expression par <MathJaxInline toShow={"$a$"} /> : </p>
                <MathJaxDisplay toShow={equSecondDegEquals0Fact} fRef={2} demo />
                <p>On appelle <MathJaxInline toShow={"$(2)$"} /> la forme canonique.</p>
                
                <Aside>
                    <p>Or on sait que : </p>
                    <MathJaxDisplay toShow={equToFact} demo />
                    <p>Soit que : </p>
                    <MathJaxDisplay toShow={equToFact2} demo />
                    <p>En inversant l'ordre on obtient : </p>
                    <MathJaxDisplay toShow={equToFact3} fRef={3} demo />
                </Aside>
                
                <p>On peut alors transformer <MathJaxInline toShow={"$(2)$"} /> en y injectant <MathJaxInline toShow={"$(3)$"} /> : </p>
                <MathJaxDisplay toShow={equSecondDegEquals0Fact2} demo />
                <MathJaxDisplay toShow={equSecondDegEquals0Fact3} demo />
                <p>Ici, <MathJaxInline toShow={"$a$"} /> est une constante donc elle ne change rien à l'équation, on l'enlève : </p>
                <MathJaxDisplay toShow={equSecondDegEquals0Fact3WithoutA} demo />
                <MathJaxDisplay toShow={equSecondDegEquals0Fact3WithoutA2} demo />
                
                <Aside>
                    <p>Les équations de type <MathJaxInline toShow={"$X^2 = K$"} /> admettent deux solutions : </p>
                    <MathJaxDisplay toShow={X2EqualsKSolution1} demo />
                    <MathJaxDisplay toShow={X2EqualsKSolution2} demo />
                    <p>On effectue un changement de variable en posant : </p>
                    <MathJaxDisplay toShow={changeVariableForX} demo />
                </Aside>
                
                <p>On aura ici alors deux solutions : </p>
                <MathJaxDisplay toShow={x1Calculus} demo />
                <MathJaxDisplay toShow={x2Calculus} demo />
                <p>On isole les variables <MathJaxInline toShow={"$x_1$"} /> et <MathJaxInline toShow={"$x_2$"} /> :</p>
                <MathJaxDisplay toShow={x1Calculus2} demo />
                <MathJaxDisplay toShow={x2Calculus2} demo />
                <p>Par simplicité, on pose que : </p>
                <MathJaxDisplay toShow={delta} demo />
                <p>On obtient alors notre couple de solutions : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={x1Calculus3} fRef={4} />
                    <MathJaxDisplay toShow={x2Calculus3} fRef={5} />
                </Container>
                <p><MathJaxInline toShow={"$x_1$"} /> et <MathJaxInline toShow={"$x_2$"} /> sont alors deux solutions possibles vérifiant <MathJaxInline toShow={"$f(x) = 0$"} />.</p>
                
                <p className="Title2">Trois cas possibles : </p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 1 : \\Delta > 0}$"} /></p>
                <p>Dans le cas où <MathJaxInline toShow={"$\\Delta > 0$"} />, l'équation admet bien deux solutions distinctes. </p>
                <p>On alors peut écrire l'équation <MathJaxInline toShow={"$(1)$"} /> sous la forme : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={factX1X2} fRef={6} />
                </Container>

                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 2 : \\Delta = 0}$"} /></p>
                <p>Dans le cas où <MathJaxInline toShow={"$\\Delta = 0$"} />, les deux racines sont équivalentes à : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={x0} />
                </Container>
                <p>On les appelle racines doubles.</p>
                 <p>On alors peut écrire l'équation <MathJaxInline toShow={"$(1)$"} /> sous la forme : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={factX0} />
                </Container>

                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 3 : \\Delta < 0}$"} /></p>
                <p>Dans le cas où <MathJaxInline toShow={"$\\Delta < 0$"} />, l'équation n'a pas de solutions dans <MathJaxInline toShow={"$\\mathbb{R}$"} /> car la fonction <MathJaxInline toShow={"$\\sqrt{x}$"} /> n'est définie que sur <MathJaxInline toShow={"$ [ 0 ; +\\infty[ (\\mathbb{R^+})$"} />. </p>
    
                <p className="Title2">Vérification de la forme factorisée</p>
                <p>Nous allons maintenant redévelopper notre expression pour voir si notre hypothèse s'avère être juste.</p>
                <p>On injecte <MathJaxInline toShow={"$(4)$"} /> et <MathJaxInline toShow={"$(5)$"} /> dans <MathJaxInline toShow={"$(6)$"} />  : </p>
                <MathJaxDisplay toShow={factEntirely} demo />
                <p>On développe : </p>
                <MathJaxDisplay toShow={devAfterFact} demo />
                <p>On factorise par <MathJaxInline toShow={"$x$"} /> à l'intérieur des parenthèses : </p>
                <MathJaxDisplay toShow={factByX} demo />
                <MathJaxDisplay toShow={equSecondDegEquals0Fact} demo /> 
                <p>En redéveloppant, on retrouve bien notre expression de départ.</p>
                <MathJaxDisplay toShow={equSecondDegEquals0} fRef={1} demo />
            </>

}

export default EquationsDuSecondDegre;