import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';

import './LeNombreDOr.css'

const LeNombreDOr = () => {

    var chapters = getChapters();
    var title = "Le nombre d'or"

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
        </>
    );
}

export default LeNombreDOr;