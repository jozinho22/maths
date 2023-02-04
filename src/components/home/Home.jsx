import MathJaxInline from "../mathjax-display/MathJaxInline";
import { Container } from 'react-bootstrap';
/* import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions'; */
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  
    return (
        <>
            <Container className="Home">
                <Container className="HomeTitleContainer">
                    Ma thématique
                </Container>
                <Container className="HomeDescContainer">
                    <p>Ce site est dédié à l'apprentissage des mathématiques pour tous.</p>
                    <p>
                        Il comprend <NavLink to={'/cours'}>de nombreux cours</NavLink> allant du collège à la terminale.
                        {"\n"}
                        Ces cours incluent notamment certaines explications et démonstrations des formules que l'on apprend en cours.
                        {"\n"}
                        Je vous propose de même une présentation des nombres <NavLink to={'/cours/le-nombre-pi'}><MathJaxInline toShow={"$\\pi$"} /> (Pi)</NavLink> et <NavLink to={'/cours/le-nombre-d-or'}><MathJaxInline toShow={"$\\phi$"} /> (Phi, le nombre d'or)</NavLink>.
                    </p>
                    <p>Je dédie ce site à un grand homme de la science, Jean-Pierre Petit, et je vous partage <NavLink to={'/bds-de-jpp'}>ses bandes dessinées pédagogiques</NavLink> sur le thème de la science avec son accord.</p>
                    <p>Pour en apprendre plus sur qui je suis, rendez-vous sur <NavLink to={'/contact'}>cette page.</NavLink></p>
                </Container>
            </Container>  
        </>
    );
}

export default Home;