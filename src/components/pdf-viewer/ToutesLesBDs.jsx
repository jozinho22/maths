import { Container, Row, Col, Button } from 'react-bootstrap'

const ToutesLesBDs = ( {pdfItems} ) => {

    return (
        <>
            <p className="Title">Toutes les BDs de Jean-Pierre Petit</p>
            <Row>
                {
                    pdfItems.map(pdfItem => (
                        <Container  key={pdfItem.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12}>
                                <Button key={pdfItem.id} className="DefaultButton TableOfContentsButton" href={`bds-de-jpp/${pdfItem.relativePath}`}>
                                    {pdfItem.title}
                                </Button>
                            </Col>
                        </Container>
                    ))
                }
            </Row>
        </>
    )

}

export default ToutesLesBDs;