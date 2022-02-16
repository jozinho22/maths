import React from 'react';
import { Container } from 'react-bootstrap';

import NavigationButtons from '../NavigationButtons';
import getChapters from './chapters/getChapters';

import '../Courses.css';
import './ProgrammationBasics.css';

const Code = () => {

    var jsLink = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
    var chapters = getChapters();

    const [count, setCount] = React.useState(0);

    window.scrollTo(0, 0);
    
    return (
            <>
                <p className="Title">Bases de la programmation</p>
                <Container className="CoursesContainer">   
                    {chapters[count].component}           
                </Container>
                <NavigationButtons 
                    chapters={chapters}
                    count={count}
                    setCount={setCount} />    
                <a href={jsLink} target="_blank">
                    La documentation complète de javascript ici
                </a>  
            </>
            );

}

export default Code;