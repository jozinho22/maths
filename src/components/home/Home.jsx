import { Container, Row, Col } from 'react-bootstrap';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import buildFunctionsExpressions from './buildFunctionsExpressions';
import initDimensions from '../immutable/initDimensions';
import './Home.css';

const Home = () => {
  
    var listEqu = buildFunctionsExpressions();

    return (
        <Container className="HomeContainer">
            <Container className="HomeTitleContainer">
                Maths pour tous
            </Container>
            <Container className="ExpressionsContainer">
                <Row>
                    {listEqu.map(eq => (
                        <Col key={eq.id}>
                            <MathJaxDisplay toShow={eq.exp} />
                        </Col>
                    ))}
                </Row>  
            </Container>
        </Container>
    );
}

export default Home;