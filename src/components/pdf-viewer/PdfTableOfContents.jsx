import { Container, Row, Col } from 'react-bootstrap'

const PdfTableOfContents = ( {pdfItems} ) => {

    return (
        <>
            <p className="Title">Toutes les BDs de Jean-Pierre Petit</p>
            <Row>
                {
                    pdfItems.map(pdfItem => (
                        <Container  key={pdfItem.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12}>
                                <div key={pdfItem.id} className="TableOfContentsButton" href={`bds-de-jpp/${pdfItem.relativePath}`}>
                                    {pdfItem.title}
                                </div>
                            </Col>
                        </Container>
                    ))
                }
            </Row>
        </>
    )

}

export default PdfTableOfContents;