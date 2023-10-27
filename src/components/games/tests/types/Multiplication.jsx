import OperationsTest from "../OperationsTest";
import CustomHelmet from "../../../immutable/seo/CustomHelmet";

import PagesConstants from "../../../immutable/nav/PagesConstants";
import Constants from "../../../immutable/Constants";

const Multiplication = () => {

    var title = 'Jeu : réviser ses tables de multiplications';
    var metaContent = 'Jeux des multiplications : un jeu pour réviser ses tables.';
    var canonicalUrl = `${Constants.WEB_APP_PREFIX}${PagesConstants.PREFIX}${PagesConstants.JEUX}/reviser-ses-tables/`;

    return  <>
                <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={canonicalUrl}/>
                <OperationsTest operationType={"x"} />
            </>
}

export default Multiplication;