import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './chapters/getChapters';

import './LaProgrammation.css';
import Link from '../../../immutable/nav/Link';

const Programmation = () => {

    var chapters = getChapters();
    var title = "La Programmation";
    var jsLink = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
    
    return (
            <>
                <GenericCourse title={title} chapters={chapters} />
                <p>La documentation complète de 
                    <Link link={jsLink}>javascript</Link>
                </p>         
            </>
            );

}

export default Programmation;