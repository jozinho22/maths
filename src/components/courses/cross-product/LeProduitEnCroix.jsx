import React from 'react';
import { useLocation } from 'react-router-dom';
import GenericCourse from '../GenericCourse';
import getChapters from './getChapters';
import CustomHelmet from '../../immutable/seo/CustomHelmet';

const LeNombreDOr = () => {

    let {item} = useLocation();
    console.log(item) 
    var chapters = getChapters();
    var title = "Le produit en croix";
    var metaContent = "Cours sur le produit en croix : un cours très important pour la vie de tous les jours";

    return (
        <>
            <CustomHelmet title={title} metaContent={metaContent} />
            <GenericCourse title={title} chapters={chapters} />
        </>
    );
}

export default LeNombreDOr;