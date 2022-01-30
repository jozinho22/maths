import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Home = () => {

    var frac = "\\(\\frac{10}{4x} \\approx 2^{12}\\)";
    var dLog = "\\(\\frac{d(\\ln{x})}{dx} = \\frac{1}{x}\\)";
    var pyth = "\\(x^2 + y^2 = z^2\\)";
    var sqrt = "\\(\\sqrt{x^2+1}\\)";
    var tauxVar = "\\(lim_{h \\to 0 } \\frac{f(x+h)-f(x)}{h}\\)"
    var sinCos = "\\(cos{x^2(x)} + sin{x^2(x)} = 1\\)"
    var integ = "\\(\\int x^2 dx = \\frac{1}{3} x^3\\)"

    var listExp = [frac, dLog, pyth, sqrt, tauxVar, sinCos, integ];

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
            <MathJaxDisplay toShow={integ} />
            <MathJaxDisplay toShow={dLog} />
            <MathJaxDisplay toShow={pyth} />
            <MathJaxDisplay toShow={sqrt} />
            <MathJaxDisplay toShow={tauxVar} />
            <MathJaxDisplay toShow={sinCos} />
            <MathJaxDisplay toShow={sqrt} />
{/*             <RandomMathRender />
 */}
        </>
    );
}

export default Home;