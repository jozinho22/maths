import React from 'react';
import GenericTableOfContents from '../immutable/GenericTableOfContents';
import Link from '../immutable/nav/Link';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';
import PagesConstants from '../immutable/nav/PagesConstants';
import AppContext from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import pathBuilder from '../helpers/pathBuilder';

const PdfTableOfContents = ( {pdfItems} ) => {

    var prefix = 'bds-de-jpp';
    var title = 'Toutes les BDs de Jean-Pierre Petit';
    var metaContent = 'Les bandes dessinées de Jean-Pierre Petit : une approche de nombreux thèmes scientifiques amenés par approche ludique.'

    const {updatePlayMode} = React.useContext(AppContext)

    const action = () => updatePlayMode(true);

    return (
        <>
            <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_PREFIX}${PagesConstants.PREFIX}${PagesConstants.BDS_DE_JPP}`}/>
            <div className="FlexButton">
                <NavLink to={pathBuilder(PagesConstants.HOME)} >
                    <Button className="DefaultButton GreenButton" >
                        Retour à l'accueil
                    </Button> 
                </NavLink>
            </div> 
            <GenericTableOfContents items={pdfItems} prefix={prefix} title={title} action={action} />
            <p className="AuthorCopyRight">Avec l'accord de Mr Petit - <Link url={Constants.SAVOIR_SANS_FRONTIERES} external>toutes ses BDs</Link></p>     
        </>
    )

}

export default PdfTableOfContents;