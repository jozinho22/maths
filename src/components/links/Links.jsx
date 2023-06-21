import { Container } from 'react-bootstrap';

import Link from '../immutable/nav/Link';
import linksResourceBuilder from "./linksResourceBuilder";
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';

import PagesConstants from '../immutable/nav/PagesConstants';
import MainTitle from '../immutable/MainTitle';
import './Links.css';

const Links = () => {

    var title = 'Liens';
    var metaContent = 'Liens externes : de nombreux liens en rapport avec les mathématiques et autres liens divers.';
    
    var links = linksResourceBuilder();

    return  <>
                <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_URL}${PagesConstants.LIENS}`}/>
                <div className="Links">
                    <MainTitle title={"Liens"} />
                    <Container className="Links">
                        {
                            links.map(link => (
                                <div key={link.id} >     
                                    <h3 className="CenterTitle">{link.title}</h3>
                                    <Link url={link.url} external>{link.url}</Link>
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