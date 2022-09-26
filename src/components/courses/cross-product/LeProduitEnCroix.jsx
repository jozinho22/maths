import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';

const LeNombreDOr = () => {

    var chapters = getChapters();
    var title = "Le produit en croix"

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
        </>
    );
}

export default LeNombreDOr;