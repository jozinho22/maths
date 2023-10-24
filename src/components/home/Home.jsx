import MathJaxInline from "../mathjax-display/MathJaxInline";
import { Container } from 'react-bootstrap';
/* import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions'; */
import CustomHelmet from "../immutable/seo/CustomHelmet";
import Constants from '../immutable/Constants';
import PagesConstants from "../immutable/nav/PagesConstants";
import CoursesConstants from "../courses/helpers/CoursesConstants";
import Link from "../immutable/nav/Link";
import MainTitle from "../immutable/MainTitle";
import Title1 from "../courses/helpers/Title1";
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
                        <MainTitle title={"Présentation du site"} hidden />
                        <Title1 title={"Avant-propos"} />
                        <p>Ce site ne prétend pas remplacer un traité de mathématiques, ou un cours avec un professeur.</p>
                        <p>Il est simplement conçu pour présenter certaines notions, notamment de niveau collège/lycée et pour encourager l'apprentissage de la matière.</p>
                        <Title1 title={"Contenu"} />
                        <p>
                            Ce site <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}`} external> aborde de nombreuses notions</Link> allant du collège à la terminale.
                            {"\n"}
                            Il comprend notamment certaines démonstrations de formules, ainsi que des récapitulatifs de cours.
                            {"\n"}
                            Enfin, est proposé aussi certaines thématiques comme les nombres <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PI}`} external><MathJaxInline toShow={"$\\pi$"} /> (Pi)</Link> et <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.NB_OR}`} external><MathJaxInline toShow={"$\\phi$"} /> (Phi, le nombre d'or)</Link>.
                        </p>
                        <p>Je dédie ce site à un grand homme de la science, Jean-Pierre Petit, et je vous partage <Link url={`${PagesConstants.PREFIX}${PagesConstants.BDS_DE_JPP}`} external>ses bandes dessinées pédagogiques</Link> sur le thème de la science avec son accord.</p>
                    </Container>
                </Container>  
            </>;
}

export default Home;