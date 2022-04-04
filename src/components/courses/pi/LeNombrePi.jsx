import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';

const LeNombrePi = () => {

    var chapters = getChapters();
    var title = "Le nombre π";

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
        </>
    );
}

export default LeNombrePi;