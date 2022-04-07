import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';

const LeTheoremeDePythagore = () => {

    var chapters = getChapters();
    var title = "Le théorème de Pythagore";

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
        </>
    );
}

export default LeTheoremeDePythagore;