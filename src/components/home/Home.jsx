import { Container, Row, Col } from 'react-bootstrap';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import buildFunctionsExpressions from './buildFunctionsExpressions';

import './Home.css';

const Home = () => {

    var listEqu = buildFunctionsExpressions();

    return (
        <Container className="HomeContainer">
            <Container className="HomeTitleContainer">
                Maths pour tous
            </Container>

            <Row>
                {listEqu.map(eq => (
                    <Col key={eq.id}>
                        <MathJaxDisplay toShow={eq.exp} />
                    </Col>
                ))}
            </Row>  
        </Container>
    );
}

export default Home;