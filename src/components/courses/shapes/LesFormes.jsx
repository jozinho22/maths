import React from 'react';
import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';
import UnsplashCopyRight from '../UnsplashCopyRight';
import './LesFormes.css';

const LesFormes = () => {

    var chapters = getChapters();
    var title = "Les formes"

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
            {/* <UnsplashCopyRight item="Textures" /> */}
        </>
    );

}

export default LesFormes;