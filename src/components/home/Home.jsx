import { Container/* , Row, Col */ } from 'react-bootstrap';
/* import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions'; */
import Link from '../immutable/nav/Link';
import './Home.css';

const Home = () => {
  
    return (
        <>
            <Container className="HomeTitleContainer">
                Ma Thématique
            </Container>
            <Container className="TableOfContentsLink">
                <p><Link link={'/cours'} internalLink={true} >- Des cours de mathématiques sur de nombreux sujets</Link></p>
                <p><Link link={'/bds-de-jpp'} internalLink={true} >- Des BDs de Jean-Petit</Link></p>   
                <p><Link link={'/jeux'} internalLink={true} >- Des petits jeux pour s'améliorer</Link></p>            
            </Container>
        </>
    );
}

export default Home;