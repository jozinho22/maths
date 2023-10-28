import OperationsTest from "../OperationsTest";
import CustomHelmet from "../../../immutable/seo/CustomHelmet";

import PagesConstants from "../../../immutable/nav/PagesConstants";
import Constants from "../../../immutable/Constants";

const Addition = () => {

    var title = 'Jeu : s\'entraîner aux additions';
    var metaContent = 'Jeux des additions, un jeu pour s\'entraîner à calculer';
    var canonicalUrl = `${Constants.WEB_APP_PREFIX}${PagesConstants.PREFIX}${PagesConstants.JEUX}/additionner/`;

    var ogType = 'Game';

    return  <>
                <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={canonicalUrl} ogType={ogType}/>
                <OperationsTest operationType={"+"} />
            </>
}

export default Addition;