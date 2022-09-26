import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';

import './LaDerivee.css'

const LaDerivee = () => {

    var chapters = getChapters();
    var title = "La dérivée"

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
        </>
    );
}

export default LaDerivee;