import { Container/* , Row, Col */ } from 'react-bootstrap';
/* import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions'; */
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  
    return (
            <Container className="Home">
                <Container className="HomeTitleContainer">
                    Ma thématique
                </Container>
                <Container className="TableOfContents">
                    <div className="TableOfContentsLink" ><NavLink to={'/cours'} ><p>- Des cours de mathématiques sur de nombreux sujets</p></NavLink></div>
                    <div className="TableOfContentsLink" ><NavLink to={'/bds-de-jpp'} ><p>- Des BDs de Jean-Pierre Petit</p> </NavLink></div>
                    <div className="TableOfContentsLink" ><NavLink to={'/jeux'} ><p>- Des petits jeux pour s'entraîner</p>  </NavLink></div>         
                </Container>
            </Container>  
    );
}

export default Home;