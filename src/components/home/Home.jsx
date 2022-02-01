import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Home = () => {

    var dLnx = "\\(\\frac{d(\\ln{x})}{dx} = \\frac{1}{x}\\)";
    var pyth = "\\(x^2 + y^2 = z^2\\)";
    var dSqrt = "\\(\\frac{d(\\sqrt{x^2+1})}{dx} = \\frac{2x}{2\\sqrt{x^2+1}}\\)";
    var tauxVar = "\\(\\frac{d(f(x))}{dx} = \\lim_{h \\to 0 } \\frac{f(x+h)-f(x)}{h}\\)"
    var sinCos = "\\(cos{x^2(x)} + sin{x^2(x)} = 1\\)"
    var integX2 = "\\(\\int x^2 dx = \\frac{1}{3} x^3\\)"
    var alKashi = "\\(c = \\sqrt{a^2 + b^2 - 2abcos\\gamma}\\)"
    var distrib = "\\( a(b+c) = ab + ac \\)"
    var powTimesPow = "\\(x^a x^b = x^{a+b}\\)";
    var powPowPow = "\\( (x^a)^b = x^{ab}\\)";

    var listExp = []
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const RandomMathRender = () => {
        var rows = [];
        var cols = [];
        
        var nbRow = 2;
        var nbCol = 2;

 
        var columnsRenderByRow = [];
        var listExpTemp = {...listExp};

        for(var i = 0; i < nbRow; i++) {
      
            var columnsRender = [];
            for(var i = 0; i < nbCol; i++) {
                var k = getRandomInt(listExpTemp.length);
                var randomExp = listExpTemp[k];
/*                 listExpTemp.remove(k);
 */
                columnsRender.push(
                    <MathJaxDisplay toShow={randomExp} />
                );
                console.log(columnsRender)
            }
            columnsRenderByRow.push(columnsRender);
        }

        console.log(columnsRenderByRow)
        return (
            <Container className="RandomMathRender">
                <Row>
                    {columnsRenderByRow.map(row => (
                        <Col>
                            {row}
                        </Col>   
                    ))}
                </Row>
            </Container>
        );
    }
   
    return (
        <>
            <Container className="HomeContainer">
                <h3>Maths pour tous</h3>
            </Container>
            <Row>
                <Col>
                    <MathJaxDisplay toShow={integX2} />
                </Col>
                <Col></Col>
                <Col></Col>
                <Col>
                    <MathJaxDisplay toShow={pyth} />
                </Col>
                <Col>
                    <MathJaxDisplay toShow={dLnx} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <MathJaxDisplay toShow={alKashi} />
                </Col>
                <Col></Col>
                <Col></Col>

                <Col></Col>
                <Col></Col>

                <Col></Col>
                <Col>
                    <MathJaxDisplay toShow={dSqrt} />
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <MathJaxDisplay toShow={dLnx} />
                </Col>
                <Col>
                    <MathJaxDisplay toShow={tauxVar} />
                </Col>
                <Col></Col>
                <Col>
                    <MathJaxDisplay toShow={sinCos} />
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <MathJaxDisplay toShow={distrib} />
                </Col>
                <Col>
                    <MathJaxDisplay toShow={powPowPow} />
                </Col>
                <Col></Col>
                <Col>
                    <MathJaxDisplay toShow={powTimesPow} />
                </Col>
            </Row>  
            
        {/*             <RandomMathRender />
 */}
        </>
    );
}

export default Home;