import { Container } from 'react-bootstrap';

import Link from '../immutable/nav/Link';
import linksResourceBuilder from "./linksResourceBuilder";
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';

import './Links.css';
import HiddenTitle from '../immutable/seo/HiddenTitle';

const Links = () => {

    var title = 'Liens';
    var metaContent = 'Liens externes : de nombreux liens en rapport avec les mathématiques et autres liens divers.';
    var hiddenTitle = 'Liens externes du site';
    
    var links = linksResourceBuilder();

    return  <>
                <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_URL}/liens/`}/>
                <HiddenTitle title={hiddenTitle} />
                <div className="Links">
                    <p className="MainTitle">Liens</p>
                    <Container className="Links">
                        {
                            links.map(link => (
                                <div key={link.id} >     
                                    <p className="Title">{link.title}</p>
                                    <Link link={link.link}>{link.link}</Link>
                                    <div className="LinksDesc" >   
                                        <p>{link.desc}</p>
                                    </div>
                                    <br></br>  
                                </div>
                            ))
                        }
                    </Container>
                </div>
            </>

}

export default Links;