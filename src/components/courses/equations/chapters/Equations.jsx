import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const Equations = () => {

    var equBase = "\\(f(x) = 2x + 3\\)";
    var equBaseEquals0 = "\\(2x + 3 = 0\\)";
    var equBaseMinus3 = "\\(2x + 3 - 3 = 0 - 3\\)";
    var equBaseMinus32 = "\\(2x = - 3\\)";
    var equBaseMinus32divBy2 = "\\(\\frac{2x}{2} = \\frac{-3}{2} \\)";
    var equBaseMinus32divBy22 = "\\(x = \\frac{-3}{2} \\)";

    return  <>
                <p>
                    Les équations (par extensions les inéquations) nous permettent d'avoir une expression contenant des variables.
                    {"\n"} Par la suite, nous allons pouvoir résoudre ces équations en isolant ou ou plusieurs variables.
                </p>
                <p className="Title1">a) Exemple</p>
                <p>Nous allons prendre par exemple cette équation :</p>
                <MathJaxDisplay toShow={equBase} />
                <p>Nous allons essayer de résoudre <MathJaxInline toShow={"$f(x)=0$"} />, et ainsi trouver une valeur pour <MathJaxInline toShow={"$x$"} />.</p>
                <p>On a alors</p>
                <MathJaxDisplay toShow={equBaseEquals0} />
                <p>Le but ici est d'isoler la variable <MathJaxInline toShow={"$x$"} /></p>
                <p>Pour cela, on va d'abord se débarasser du nombre <MathJaxInline toShow={"$3$"} /> en retirant <MathJaxInline toShow={"$3$"} /> de chaque côté :</p>
                <MathJaxDisplay toShow={equBaseMinus3} />
                <p>Ce qui nous donne :</p>
                <MathJaxDisplay toShow={equBaseMinus32} />
                <p>Maintenant, nous allons transformer <MathJaxInline toShow={"$2x$"} /> en <MathJaxInline toShow={"$x$"} /> en divisant par <MathJaxInline toShow={"$2$"} /> de chaque côté :</p>
                <MathJaxDisplay toShow={equBaseMinus32divBy2} />
                <p>Il reste alors <MathJaxInline toShow={"$x$"} /></p>
                <MathJaxDisplay toShow={equBaseMinus32divBy22} />
                <p>En conclusion :</p>
            
                <Container className="Focus">
                    <MathJaxDisplay toShow={equBaseEquals0} />
                </Container>
                <p>Lorsque </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={equBaseMinus32divBy22} />
                </Container>
            </>
}

export default Equations;