import { Container } from 'react-bootstrap';

import Link from '../immutable/nav/Link';
import linksResourceBuilder from "./linksResourceBuilder";

import './Links.css';

const Links = () => {

    var links = linksResourceBuilder();

    return (
        <div className="Links">
            <p className="MainTitle">Liens</p>
            <Container className="TableOfContents Links">
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
    )

}

export default Links;