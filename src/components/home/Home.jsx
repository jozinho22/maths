import { Container/* , Row, Col */ } from 'react-bootstrap';
/* import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions'; */
import Link from '../immutable/nav/Link';
import './Home.css';

const Home = () => {
  
    return (
        <div>
            <div>
                <Container className="Home">
                    <Container className="HomeTitleContainer">
                        Ma thématique
                    </Container>
                    <Container className="TableOfContents">
                        <div className="TableOfContentsLink" ><Link link={'/cours'} internalLink={true} ><p>- Des cours de mathématiques sur de nombreux sujets</p></Link></div>
                        <div className="TableOfContentsLink" ><Link link={'/bds-de-jpp'} internalLink={true} ><p>- Des BDs de Jean-Petit</p> </Link></div>
                        <div className="TableOfContentsLink" ><Link link={'/jeux'} internalLink={true} ><p>- Des petits jeux pour s'améliorer</p>  </Link></div>         
                    </Container>
                </Container>
            </div>
        </div>
    );
}

export default Home;