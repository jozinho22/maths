import { Helmet } from "react-helmet-async";

const CustomHelmet = ( {title, metaContent, canonicalPath} ) => {
    
    return  <Helmet>
                <title>
                    {title}
                </title>
                <meta name="description" content={metaContent} />
                <link rel="canonical" href={canonicalPath} />
            </Helmet>
}

export default CustomHelmet;