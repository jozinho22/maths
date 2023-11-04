import { Helmet } from "react-helmet-async";
import Constants from "../Constants";

const CustomHelmet = ( {title, courseItem, metaContent, canonicalUrl, ogType} ) => {

    title = `${Constants.APP_NAME}${courseItem ? ` - ${courseItem.title}` : ''} - ${title}`;
    
    return  <Helmet>
                <title>{title}</title>
                <meta data-rh="true" name="description" content={metaContent} />
                <link rel="canonical" href={canonicalUrl} />
                {/* <meta property="og:title" content={title} />
                <meta property="og:description" content={metaContent} />
                <meta property="og:type" content={ogType} />
                <meta property="og:url" content={canonicalUrl} /> */}
            </Helmet>
}

export default CustomHelmet;