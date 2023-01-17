import { Container } from 'react-bootstrap';

import Link from '../immutable/nav/Link';
import linksResourceBuilder from "./linksResourceBuilder";

import './Links.css';

const Links = () => {

    var links = linksResourceBuilder();

    return (
        <>
            <p className="MainTitle">Liens</p>
            <Container className="TableOfContents Links">
                {
                    links.map(link => (
                        <div key={link.id} >     
                            <div>
                                <p className="Title">{link.title}</p>
                                <Link link={link.link}>{link.link}</Link>
                            </div>
                            <p>{link.desc}</p>
                            <br></br>  
                        </div>
                    ))
                }
            </Container>
        </>
    )

}

export default Links;