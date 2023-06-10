import GenericTableOfContents from '../immutable/GenericTableOfContents';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';
import HiddenTitle from '../immutable/seo/HiddenTitle';
import PagesConstants from '../immutable/nav/PagesConstants';


const GamesTableOfContents = ( {gameItems} ) => {

    var prefix = 'jeux';
    var title = 'Tous les jeux';
    var metaTitle = 'Tous les jeux';
    var metaContent = 'Tous les jeux : des jeux créés pour permettre aux élèves de s\'entraîner, notamment pour les tables de multiplications.';
    var hiddenTitle = 'Tous les jeux du site';

    return (
        <>
            <CustomHelmet title={metaTitle} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_URL}${PagesConstants.JEUX}`}/>
            <HiddenTitle title={hiddenTitle} />

            <GenericTableOfContents items={gameItems} prefix={prefix} title={title} />
        </>
    )

}

export default GamesTableOfContents;