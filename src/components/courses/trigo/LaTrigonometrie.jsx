import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';

const LaTrigonometrie = () => {

    var chapters = getChapters();
    var title = "La trigonométrie";

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
        </>
    );
}

export default LaTrigonometrie;