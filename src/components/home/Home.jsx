import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';

const Home = () => {

    var dLnx = "\\(\\frac{d(\\ln{x})}{dx} = \\frac{1}{x}\\)";
    var pyth = "\\(x^2 + y^2 = z^2\\)";
    var dSqrt = "\\(\\frac{d(\\sqrt{x^2+1})}{dx} = \\frac{x}{\\sqrt{x^2+1}}\\)";
    var tauxVar = "\\(\\frac{d(f(x))}{dx} = \\lim_{h \\to 0 } \\frac{f(x+h)-f(x)}{h}\\)"
    var sinCos = "\\(cos{x^2(x)} + sin{x^2(x)} = 1\\)"
    var integX2 = "\\(\\int x^2 dx = \\frac{1}{3} x^3\\)"
    var alKashi = "\\(c = \\sqrt{a^2 + b^2 - 2abcos\\gamma}\\)"
    var distrib = "\\( a(b+c) = ab + ac \\)"
    var distrib2 = "\\( a^2 - b^2 = (a+b)(a-b) \\)"

    var powTimesPow = "\\(x^a x^b = x^{a+b}\\)";
    var powPowPow = "\\( (x^a)^b = x^{ab}\\)";
    var intSqrtX2Minus1 = "\\(\\int \\frac{1}{\\sqrt{x^2+1}} dx = arccosh(x)\\)";
    var dExpX = "\\(\\frac{d(e^{x})}{dx} = e^{x}\\)";
    var dX3 = "\\(\\frac{d(x^{3})}{dx} = 3 x^{2}\\)";
    var dsin = "\\(\\frac{d(sin(x))}{dx} = cos(x)\\)";


    var triangleArea = "\\(S_{triangle} = \\frac{bh}{2}\\)"
    var cubeVolume = "\\(V_{cube} = c^3\\)"
    var coneVolume = "\\(V_{cône} = \\pi r^2 \\frac{h}{3}\\)"
    var cylVolume = "\\(V_{cylindre} = \\pi r^2 h\\)"
    var sphVolume = "\\(V_{sphère} = \\frac{4}{3}\\pi r^3\\)"


    var circleArea = "\\(S_{cercle} = \\pi r^2\\)"
    var circlePerim = "\\(P_{cercle} = 2\\pi r\\)"
    var cosAPlusB = "\\(cos(a+b) = cos(a)cos(b) - sin(a)sin(b)\\)"
    var dUdivV = "\\(\\frac{d(\\frac{u}{v})}{dx} = \\frac{1}{v^2} (\\frac{d(u)}{dx} - \\frac{d(v)}{dx})\\)";
    var phi2 = "\\(\\phi^2 = 2\\phi + 1\\)"

    return (
        <Container className="HomeContainer">
            <Container className="HomeTitleContainer CelticFont">
                <h3>Maths pour tous</h3>
            </Container>

            <Row>
                <Col><MathJaxDisplay toShow={integX2} /></Col>
                <Col><MathJaxDisplay toShow={pyth} /></Col>
                <Col><MathJaxDisplay toShow={alKashi} /></Col>
                <Col><MathJaxDisplay toShow={dSqrt} /></Col>
                <Col><MathJaxDisplay toShow={dLnx} /></Col>
                <Col><MathJaxDisplay toShow={distrib} /></Col>
                <Col><MathJaxDisplay toShow={circleArea} /></Col>
                <Col><MathJaxDisplay toShow={powTimesPow} /></Col>
                <Col><MathJaxDisplay toShow={cubeVolume} /></Col>
                <Col><MathJaxDisplay toShow={powTimesPow} /></Col>
                <Col><MathJaxDisplay toShow={triangleArea} /></Col>
                <Col><MathJaxDisplay toShow={tauxVar} /></Col>
                <Col><MathJaxDisplay toShow={circlePerim} /></Col>
                <Col><MathJaxDisplay toShow={intSqrtX2Minus1} /></Col>
                <Col><MathJaxDisplay toShow={sinCos} /></Col>
                <Col><MathJaxDisplay toShow={powPowPow} /></Col>
{/*                 <Col><MathJaxDisplay toShow={cosAPlusB} /></Col>
 */}                <Col><MathJaxDisplay toShow={dExpX} /></Col>
                <Col><MathJaxDisplay toShow={dX3} /></Col>
                <Col><MathJaxDisplay toShow={coneVolume} /></Col>
                <Col><MathJaxDisplay toShow={dsin} /></Col>
                <Col><MathJaxDisplay toShow={distrib2} /></Col>
                <Col><MathJaxDisplay toShow={cylVolume} /></Col>
                <Col><MathJaxDisplay toShow={dUdivV} /></Col>
                <Col><MathJaxDisplay toShow={phi2} /></Col>
                <Col><MathJaxDisplay toShow={sphVolume} /></Col>
            </Row>  
        </Container>
    );
}

export default Home;