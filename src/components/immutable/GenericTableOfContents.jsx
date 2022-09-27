import { Container, Row, Col } from 'react-bootstrap';
import Link from '../immutable/nav/Link';

const GenericTableOfContents = ( {items, prefix, title} ) => {

    return (
        <>
            <p className="MainTitle">{title}</p>
            <Row>
                {
                    items.map(item => (
                        <Container  key={item.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12}>
                                <div key={item.id} className="TableOfContentsLink" >
                                    <Link link={`/${prefix}/${item.relativePath}`} internalLink={true} >
                                        <div>{item.title}</div>
                                    </Link>
                                </div>
                            </Col>
                        </Container>
                    ))
                }
            </Row>
        </>
    )

}

export default GenericTableOfContents;