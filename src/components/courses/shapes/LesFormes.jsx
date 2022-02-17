import React from 'react';
import GenericCourse from '../GenericCourse';
import getChapters from './chapters/getChapters';

import './LesFormes.css';

const LesFormes = () => {

    var chapters = getChapters();
    var title = "Les formes"

    return (
        <>
            <GenericCourse title={title} chapters={chapters} />
            <p className="TextureCopyRight">Textures : Copyright &copy; 
                <a href="http://unsplash.com" target="_blank" rel="noreferrer">unsplash.com</a>
            </p>           
        </>
    );

}

export default LesFormes;