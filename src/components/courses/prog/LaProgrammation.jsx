import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './chapters/getChapters';

import './LaProgrammation.css';

const Programmation = () => {

    var chapters = getChapters();
    var title = "La Programmation";
    var jsLink = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
    
    return (
            <>
                <GenericCourse title={title} chapters={chapters} />
                <p>La documentation complète de 
                    <a href={jsLink} target="_blank" rel="noreferrer">javascript</a>  
                </p>         
            </>
            );

}

export default Programmation;