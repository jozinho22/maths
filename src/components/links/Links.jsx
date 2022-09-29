import { Container, Row, Col } from 'react-bootstrap';

import Link from '../immutable/nav/Link';
import linksResourceBuilder from "./linksResourceBuilder";

const Links = () => {

    var links = linksResourceBuilder();

    return (
        <>
            <p className="Title">Liens</p>
            <Row>
                {
                    links.map(link => (
                        <Container key={link.id} className="TableOfContents">
                            <Col xs={12} md={12}>
                                <div>
                                    <p className="Underline">{link.title}</p>
                                    <Link link={link.link}>{link.link}</Link>
                                </div>
                                <p className="BasicText">{link.desc}</p>
                                <br></br>
                            </Col>
                        </Container>
                    ))
                }
            </Row>
        </>
    )

}

export default Links;