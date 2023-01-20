import { Helmet } from "react-helmet-async";

const CustomHelmet = ( {title, metaContent, relativePath} ) => {
    
    return  <Helmet>
                <title>
                    {title}
                </title>
                <meta name="description" content={metaContent} />
                <link rel="canonical" href={relativePath} />
            </Helmet>
}

export default CustomHelmet;