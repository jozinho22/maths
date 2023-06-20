import { Helmet } from "react-helmet-async";
import Constants from "../Constants";

const CustomHelmet = ( {title, metaContent, canonicalUrl} ) => {
    
    return  <Helmet>
                <title>
                    {`${Constants.APP_NAME} : ${title}`}
                </title>
                <meta data-rh="true" name="description" content={metaContent} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
}

export default CustomHelmet;