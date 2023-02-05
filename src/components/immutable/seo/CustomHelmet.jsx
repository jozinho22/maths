import { Helmet } from "react-helmet-async";

const CustomHelmet = ( {title, metaContent, canonicalUrl} ) => {
    
    return  <Helmet>
                <title>
                    {title}
                </title>
                <meta name="description" content={metaContent} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
}

export default CustomHelmet;