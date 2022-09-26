import { Container, Row, Col } from 'react-bootstrap';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions';
import './Home.css';

const Home = () => {
  
    return (
        <>
            <Container className="HomeTitleContainer">
                Maths pour tous
            </Container>
            <Container className="HomeContentContainer">
                <p>- Des cours de mathématiques sur de nombreux sujets</p>
                <p>- Des BDs de Jean-Petit</p>   
                <p>- Des petits jeux pour s'améliorer</p>            
            </Container>


            
        </>
    );
}

export default Home;