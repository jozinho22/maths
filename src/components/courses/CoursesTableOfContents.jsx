import React from 'react';
import GenericTableOfContents from '../immutable/GenericTableOfContents';
import { Button } from 'react-bootstrap';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';

import pathBuilder from '../helpers/pathBuilder';
import PagesConstants from '../immutable/nav/PagesConstants';

import { NavLink } from 'react-router-dom';

const CoursesTableOfContents = ( {courseItems} ) => {

    var prefix = 'cours';
    var title = 'Tous les cours du site';

    var metaContent = "Tous les cours du site (calcul élémentaire, équations, le théorème de Pythagore, dérivées, primitives/intégration, le nombre d'or...etc)";

    return (
        <>
            <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_PREFIX}${PagesConstants.PREFIX}${PagesConstants.COURS}`} />

            <div className="FlexButton">
                <NavLink to={pathBuilder(PagesConstants.HOME)}>
                    <Button className="DefaultButton GreenButton" >
                        Retour à l'accueil
                    </Button> 
                </NavLink>
            </div> 
            <GenericTableOfContents items={courseItems} prefix={prefix} title={title} />
        </>
    )

}

export default CoursesTableOfContents;