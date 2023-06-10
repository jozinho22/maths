import OperationsTest from "./OperationsTest";
import CustomHelmet from "../../immutable/seo/CustomHelmet";
import HiddenTitle from "../../immutable/seo/HiddenTitle";
import PagesConstants from "../../immutable/nav/PagesConstants";
import Constants from "../../immutable/Constants";

const Addition = () => {

    var title = 'Jeu : s\'entraîner aux additions';
    var metaContent = 'Jeux des additions';
    var canonicalUrl = `${Constants.WEB_APP_URL}${PagesConstants.JEUX}/additionner/`;

    var hiddenTitle = title;

    return  <>
                <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={canonicalUrl}/>
                <HiddenTitle title={hiddenTitle} />
                <OperationsTest operationType={"+"} />
            </>
}

export default Addition;