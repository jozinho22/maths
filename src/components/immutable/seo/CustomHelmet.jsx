import { Helmet } from "react-helmet-async";

const CustomHelmet = ( {title, metaContent} ) => {
    
    return  <Helmet>
                <title>
                    {title}
                </title>
                <meta name="description" content={metaContent} />
            </Helmet>
}

export default CustomHelmet;