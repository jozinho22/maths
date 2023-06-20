import MathJaxInline from "../mathjax-display/MathJaxInline";
import { Container } from 'react-bootstrap';
/* import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions'; */
import CustomHelmet from "../immutable/seo/CustomHelmet";
import Constants from '../immutable/Constants';
import pathBuilder from "../helpers/pathBuilder";
import PagesConstants from "../immutable/nav/PagesConstants";
import CoursesConstants from "../courses/helpers/CoursesConstants";
import Link from "../immutable/nav/Link";
import MainTitle from "../immutable/MainTitle";
import './Home.css';

const Home = () => {

    var metaTitle = 'Page d\'accueil';
    var metaContent = 'Des cours de mathématiques du primaire au lycée, des bandes dessinées de Jean-Pierre Petit, des jeux pour s\'entraîner et la possibilité de cours particuliers.';
    
    return  <>         
                <Container className="Home">
                    <CustomHelmet title={metaTitle} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_URL}`}/>
                    <Container className="HomeTitleContainer">
                        Ma thématique
                    </Container>
                    <Container className="HomeDescContainer">
                        <MainTitle title={"Présentation du site"} />
                        <p>Ce site est dédié à l'apprentissage des mathématiques pour tous.</p>
                        <p>
                            Il comprend <Link url={pathBuilder(PagesConstants.COURS)} external>de nombreux cours</Link> allant du collège à la terminale.
                            {"\n"}
                            Ces cours incluent notamment certaines explications et démonstrations des formules que l'on apprend en cours.
                            {"\n"}
                            Je vous propose de même une présentation des nombres <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.PI}`)} external><MathJaxInline toShow={"$\\pi$"} /> (Pi)</Link> et <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.NB_OR}`)} external><MathJaxInline toShow={"$\\phi$"} /> (Phi, le nombre d'or)</Link>.
                        </p>
                        <p>Je dédie ce site à un grand homme de la science, Jean-Pierre Petit, et je vous partage <Link url={pathBuilder(PagesConstants.BDS_DE_JPP)} external>ses bandes dessinées pédagogiques</Link> sur le thème de la science avec son accord.</p>
                        <p>Pour en apprendre plus sur qui je suis, rendez-vous sur <Link url={pathBuilder(PagesConstants.CONTACT)} external>cette page.</Link></p>
                    </Container>
                </Container>  
            </>;
}

export default Home;