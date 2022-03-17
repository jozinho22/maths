import { Container, Row, Col } from 'react-bootstrap';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions';
import './Home.css';

const Home = () => {
  
    var listEqu = useFunctionsExpressions();

    return (
        <>
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
        </>
    );
}

export default Home;