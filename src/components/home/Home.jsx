import React, {Fragment} from "react";
import HomeTitleContainer from "./HomeTitleContainer";
import HomeTableOfContents from "./HomeTableOfContents";

import { Container/* , Row, Col */ } from 'react-bootstrap';
/* import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import useFunctionsExpressions from './useFunctionsExpressions'; */
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  
    return (
        <Fragment>
            <Container className="Home">
                <HomeTitleContainer>
                    Ma thématique
                </HomeTitleContainer>
                <HomeTableOfContents>
                    <div className="TableOfContentsLink" ><NavLink to={'/cours'} ><p>- Des cours de mathématiques sur de nombreux sujets</p></NavLink></div>
                    <div className="TableOfContentsLink" ><NavLink to={'/bds-de-jpp'} ><p>- Des BDs de Jean-Pierre Petit</p> </NavLink></div>
                    <div className="TableOfContentsLink" ><NavLink to={'/jeux'} ><p>- Des petits jeux pour s'entraîner</p>  </NavLink></div>         
                </HomeTableOfContents>
            </Container>  
        </Fragment>
    );
}

export default Home;