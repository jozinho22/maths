import React from 'react';
import { useLocation } from 'react-router-dom';

import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';

const LesPuissances = () => {

    var chapters = getChapters();

    return (
        <>
            <GenericCourse title={useLocation().state.title} chapters={chapters} state={useLocation().state}/>
        </>
    );
}

export default LesPuissances;