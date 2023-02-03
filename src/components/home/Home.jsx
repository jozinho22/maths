import React, {Fragment} from "react";
import HomeTitleContainer from "./HomeTitleContainer";
import HomeDescContainer from "./HomeDescContainer";

import { Container/* , Row, Col */ } from 'react-bootstrap';
/* import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions'; */
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  
    return (
        <Fragment>
            <Container className="Home">
                <Container className="HomeTitleContainer">
                    Ma thématique
                </Container>
                <Container className="HomeDescContainer">
                    <p>Ce site est dédié à l'apprentissage des mathématiques pour tous.</p>
                    <p>
                        Il comprend <NavLink to={'/cours'}>de nombreux cours</NavLink> allant du collège à la terminale.
                        {"\n"}
                        Il comprend de même certaines explications et démonstrations des formules que l'on apprend en cours.
                    </p>
                    <p>Je dédie ce site à un grand homme de la science, Jean-Pierre Petit, et je vous partage <NavLink to={'/bds-de-jpp'}>ses bandes dessinées pédagogiques</NavLink> sur le thème de la science avec son accord.</p>
                    <p>Pour en apprendre plus sur qui je suis, rendez-vous sur <NavLink to={'/contact'}>cette page.</NavLink></p>
                </Container>
            </Container>  
        </Fragment>
    );
}

export default Home;