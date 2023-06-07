import MathJaxInline from "../mathjax-display/MathJaxInline";
import { Container } from 'react-bootstrap';
/* import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions'; */
import { NavLink } from 'react-router-dom';
import CustomHelmet from "../immutable/seo/CustomHelmet";
import HiddenTitle from '../immutable/seo/HiddenTitle';
import Constants from '../immutable/Constants';
import pathBuilder from "../helpers/pathBuilder";
import './Home.css';

const Home = () => {

    var metaTitle = 'Ma Thématique : page d\'accueil';
    var metaContent = 'Des cours de mathématiques du primaire au lycée, des bandes dessinées de Jean-Pierre Petit, des jeux pour s\'entraîner et la possibilité de cours particuliers.';
    var hiddenTitle = 'Page d\'accueil de Ma Thématique : présentation des contenus.'
    
    return  <>         
                <Container className="Home">
                    <CustomHelmet title={metaTitle} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_URL}`}/>
                    <HiddenTitle title={hiddenTitle} />
                    <Container className="HomeTitleContainer">
                        Ma thématique
                    </Container>
                    <Container className="HomeDescContainer">
                        <p>Ce site est dédié à l'apprentissage des mathématiques pour tous.</p>
                        <p>
                            Il comprend <NavLink to={pathBuilder('/cours')}>de nombreux cours</NavLink> allant du collège à la terminale.
                            {"\n"}
                            Ces cours incluent notamment certaines explications et démonstrations des formules que l'on apprend en cours.
                            {"\n"}
                            Je vous propose de même une présentation des nombres <NavLink to={pathBuilder('/cours/le-nombre-pi')}><MathJaxInline toShow={"$\\pi$"} /> (Pi)</NavLink> et <NavLink to={'/cours/le-nombre-d-or'}><MathJaxInline toShow={"$\\phi$"} /> (Phi, le nombre d'or)</NavLink>.
                        </p>
                        <p>Je dédie ce site à un grand homme de la science, Jean-Pierre Petit, et je vous partage <NavLink to={pathBuilder('/bds-de-jpp')}>ses bandes dessinées pédagogiques</NavLink> sur le thème de la science avec son accord.</p>
                        <p>Pour en apprendre plus sur qui je suis, rendez-vous sur <NavLink to={pathBuilder('/contact')}>cette page.</NavLink></p>
                    </Container>
                </Container>  
            </>;
}

export default Home;