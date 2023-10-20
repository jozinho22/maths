import React from 'react';
import GenericTableOfContents from '../immutable/GenericTableOfContents';
import Link from '../immutable/nav/Link';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';
import PagesConstants from '../immutable/nav/PagesConstants';
import AppContext from '../context/AppContext';

const PdfTableOfContents = ( {pdfItems} ) => {

    var SAVOIR_SANS_FRONTIERES = 'http://www.savoir-sans-frontieres.com/JPP/telechargeables/free_downloads.htm';
    var prefix = 'bds-de-jpp';
    var title = 'Toutes les BDs de Jean-Pierre Petit';
    var metaContent = 'Les bandes dessinées de Jean-Pierre Petit : une approche de nombreux thèmes scientifiques amenés par approche ludique.'

    const {updatePlayMode} = React.useContext(AppContext)

    const action = () => updatePlayMode(true);

    return (
        <>
            <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_URL}${PagesConstants}`}/>
            <GenericTableOfContents items={pdfItems} prefix={prefix} title={title} action={action} />
            <p className="AuthorCopyRight">Avec l'accord de Mr Petit - <Link link={SAVOIR_SANS_FRONTIERES} >toutes ses BDs</Link></p>     
        </>
    )

}

export default PdfTableOfContents;