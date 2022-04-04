import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';

const LesPuissances = () => {

    var chapters = getChapters();
    var title = "Les puissances";

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
        </>
    );
}

export default LesPuissances;