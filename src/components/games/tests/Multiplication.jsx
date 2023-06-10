import OperationsTest from "./OperationsTest";
import CustomHelmet from "../../immutable/seo/CustomHelmet";
import HiddenTitle from "../../immutable/seo/HiddenTitle";

import PagesConstants from "../../immutable/nav/PagesConstants";
import Constants from "../../immutable/Constants";

const Multiplication = () => {

    var title = 'Jeu : réviser ses tables de multiplication';
    var metaContent = 'Jeux des multiplications';
    var canonicalUrl = `${Constants.WEB_APP_URL}${PagesConstants.JEUX}/reviser-ses-tables/`;

    var hiddenTitle = title;

    return  <>
                <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={canonicalUrl}/>
                <HiddenTitle title={hiddenTitle} />
                <OperationsTest operationType={"x"} />
            </>
}

export default Multiplication;