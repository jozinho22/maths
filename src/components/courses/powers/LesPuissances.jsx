import React from 'react';

import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';

import RefFormulasContext from '../context/RefFormulasContext';

const LesPuissances = () => {

    var chapters = getChapters();
    var title = "Les puissances";

    const {refFormulas} = React.useContext(RefFormulasContext);

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
        </>
    );
}

export default LesPuissances;