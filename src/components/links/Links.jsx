import { Container, Row, Col } from 'react-bootstrap';

import linksResourceBuilder from "./linksResourceBuilder";

const Links = () => {

    var links = linksResourceBuilder();

    return (
        <>
            <p className="Title">Liens</p>
            <Row>
                {
                    links.map(link => (
                        <Container key={link.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12}>
                                <div className="TableOfContentsButton" >
                                    <p className="Underline">{link.title}</p>
                                    <a href={link.link} target="_blank" rel="noopener">{link.link}</a>
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