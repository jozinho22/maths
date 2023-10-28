import GenericTableOfContents from '../immutable/GenericTableOfContents';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';
import PagesConstants from '../immutable/nav/PagesConstants';
import pathBuilder from '../helpers/pathBuilder';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const GamesTableOfContents = ( {gameItems} ) => {

    var prefix = PagesConstants.JEUX;
    var title = 'Index des jeux du site : additions, multiplications';
    var metaContent = 'Tous les jeux : des jeux créés pour permettre aux élèves de s\'entraîner, notamment pour les tables de multiplications.';

    var ogType = "Table of contents";

    return (
        <>
            <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_PREFIX}${PagesConstants.PREFIX}${PagesConstants.JEUX}`} ogType={ogType}/>
            <div className="FlexButton">
                <NavLink to={pathBuilder(PagesConstants.HOME)}>
                    <Button className="DefaultButton GreenButton" >
                        Retour à l'accueil
                    </Button> 
                </NavLink>
            </div> 
            <GenericTableOfContents items={gameItems} prefix={prefix} title={title} />
        </>
    )

}

export default GamesTableOfContents;