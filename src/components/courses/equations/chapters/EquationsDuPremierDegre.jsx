import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const EquationsDuPremierDegre = () => {

    var equPremierDeg = "\\(f(x) = ax + b\\)";
    var equBase = "\\(f(x) = 2x + 3\\)";
    var equBaseEquals0 = "\\(2x + 3 = 0\\)";
    var equBaseMinus3 = "\\(2x + 3 {\\color{#E55151}{ - 3}} = 0 {\\color{#E55151}{ - 3}}\\)";
    var equBaseMinus32 = "\\(2x = - 3\\)";
    var equBaseMinus32divBy2 = "\\(\\frac{2x}{{\\color{#E55151}{ 2}}} = \\frac{-3}{{\\color{#E55151}{ 2}}} \\)";
    var equBaseMinus32divBy22 = "\\(x = -\\frac{3}{2} \\)";

    return  <>
                <p>
                    Les équations (par extensions les inéquations) nous permettent d'avoir une expression contenant des variables.
                    {"\n"} Par la suite, nous allons pouvoir résoudre ces équations en isolant une ou plusieurs variables.
                    {"\n"} On appelle cependant équation du premier degré, une équation ne comprenant qu'une seule variable, généralement <MathJaxInline toShow={"$x$"} />, sans autre complexité (exposant, racine carrée...etc).
                </p>
                <p>On aura une expression de ce type:</p>
                <MathJaxDisplay toShow={equPremierDeg} demo />
                <p>Avec <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> des nombres réels :</p>

                <p className="Title1">a) Exemple</p>
                <p>Nous allons prendre par exemple cette fonction :</p>
                <MathJaxDisplay toShow={equBase} demo />
                <p>Nous allons essayer de résoudre <MathJaxInline toShow={"$f(x)=0$"} />, et ainsi trouver une valeur pour <MathJaxInline toShow={"$x$"} />.</p>
                <p>On a alors :</p>
                <MathJaxDisplay toShow={equBaseEquals0} demo />
                <p>Le but ici est d'isoler la variable <MathJaxInline toShow={"$x$"} />.</p>
                <p>Pour cela, on va d'abord se débarasser du nombre <MathJaxInline toShow={"$3$"} /> en le retirant  de chaque côté :</p>
                <MathJaxDisplay toShow={equBaseMinus3} demo />
                <p>Ce qui nous donne :</p>
                <MathJaxDisplay toShow={equBaseMinus32} demo />
                <p>Maintenant, nous allons transformer <MathJaxInline toShow={"$2x$"} /> en <MathJaxInline toShow={"$x$"} /> en divisant par <MathJaxInline toShow={"$2$"} /> de chaque côté :</p>
                <MathJaxDisplay toShow={equBaseMinus32divBy2} demo />
                <p>Soit :</p>
                <MathJaxDisplay toShow={equBaseMinus32divBy22} demo />
                <p>En conclusion :</p>
            
                <Container className="Focus">
                    <MathJaxDisplay toShow={equBaseEquals0} />
                    <MathJaxDisplay toShow={"$Lorsque$"} />
                    <MathJaxDisplay toShow={equBaseMinus32divBy22} />
                </Container>
            </>
}

export default EquationsDuPremierDegre;