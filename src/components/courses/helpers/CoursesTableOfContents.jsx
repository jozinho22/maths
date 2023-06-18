import GenericTableOfContents from '../../immutable/GenericTableOfContents';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CustomHelmet from '../../immutable/seo/CustomHelmet';
import Constants from '../../immutable/Constants';

import pathBuilder from '../../helpers/pathBuilder';
import PagesConstants from '../../immutable/nav/PagesConstants';

const CoursesTableOfContents = ( {courseItems} ) => {

    var prefix = 'cours';
    var title = 'Tous les cours';

    var metaContent = "Tous les cours du site (le produit en croix, le théorème de Pythagore, le nombre d'or...etc";

    return (
        <>
            <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_URL}${PagesConstants.COURS}`} />

            <div className="FlexButton">
                <NavLink to={pathBuilder(`/`)}>
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