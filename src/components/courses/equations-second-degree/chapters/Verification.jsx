import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const Verification = () => {

    var x1Calculus3 = "\\( x_1  = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a} \\)";
    var x2Calculus3 = "\\( x_2  = \\frac{-b - \\sqrt{b^2 - 4ac}}{2a} \\)";

    var fact = "\\( a (x - x_1)(x - x_2) = 0 \\)";

    var mobile = document.body.offsetWidth < 450;

    var equSecondDegEquals0 = "\\( ax^2 + bx + c = 0 \\)";
    var equSecondDegEquals0Fact = "\\( a \\left(x^2 + \\frac{b}{a}.x + \\frac{c}{a} \\right) = 0 \\)";
    
    var factEntirely = "\\( a \\Biggl( x - \\biggl(\\frac{- b + \\sqrt{b^2 - 4ac}}{2a} \\biggr) \\Biggr) \\Biggl( x - \\biggl(\\frac{- b - \\sqrt{b^2 - 4ac}}{2a} \\biggr) \\Biggr) = 0\\)";
    var factEntirelyMobile = "\\( \\displaylines { a \\Biggl( x - \\biggl(\\frac{- b + \\sqrt{b^2 - 4ac}}{2a} \\biggr) \\Biggr) \\\\ . \\Biggl( x - \\biggl(\\frac{- b - \\sqrt{b^2 - 4ac}}{2a} \\biggr) \\Biggr) = 0 } \\)";
    
    var devAfterFact = "\\( a \\Biggl( x^2 - x . \\biggl(\\frac{- b + \\sqrt{b^2 - 4ac}}{2a} \\biggr) - x . \\biggl( \\frac{- b - \\sqrt{b^2 - 4ac}}{2a} \\biggr)  + \\frac{b^2}{4a^2} - \\frac{b^2 - 4ac}{4a^2}  \\Biggr) = 0 \\)";
    var devAfterFactMobile = "\\( \\displaylines { a \\Biggl( x^2 - x . \\biggl(\\frac{- b + \\sqrt{b^2 - 4ac}}{2a} \\biggr) \\\\ - x . \\biggl( \\frac{- b - \\sqrt{b^2 - 4ac}}{2a} \\biggr)  \\\\ + \\frac{b^2}{4a^2} - \\frac{b^2 - 4ac}{4a^2}  \\Biggr) = 0 } \\)";
    
    var factByX = "\\( a \\Biggl( x^2 - x . \\biggl(\\frac{-2b}{2a} \\biggr) + \\frac{b^2 - b^2 + 4ac}{4a^2} \\Biggr) = 0\\)";
    var factByXMobile = "\\(  \\displaylines { a \\Biggl( x^2 - x . \\biggl(\\frac{-2b}{2a} \\biggr) + \\\\ \\frac{b^2 - b^2 + 4ac}{4a^2} \\Biggr) = 0 } \\)";

    return  <>
                <p>Nous disposions précédemment des deux racines de l'équation :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={x1Calculus3} fRef={4} />
                    <MathJaxDisplay toShow={x2Calculus3} fRef={5} />
                </Container>
                <p>Ainsi que de la forme factorisée :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={fact} fRef={6} />
                </Container>

                <p>Nous allons maintenant redévelopper notre expression pour voir si notre hypothèse s'avère être juste.</p>
                <p>On injecte <MathJaxInline toShow={"$(4)$"} /> et <MathJaxInline toShow={"$(5)$"} /> dans <MathJaxInline toShow={"$(6)$"} />  : </p>
                <MathJaxDisplay toShow={mobile ? factEntirelyMobile : factEntirely} demo />
                <p>On développe : </p>
                <MathJaxDisplay toShow={mobile ? devAfterFactMobile : devAfterFact} demo />
                <p>On factorise par <MathJaxInline toShow={"$x$"} /> à l'intérieur des parenthèses : </p>
                <MathJaxDisplay toShow={mobile ? factByXMobile : factByX} demo />
                <MathJaxDisplay toShow={equSecondDegEquals0Fact} demo /> 
                <p>En redéveloppant, on retrouve bien notre expression de départ.</p>
                <MathJaxDisplay toShow={equSecondDegEquals0} fRef={1} demo />
            </>

}

export default Verification;