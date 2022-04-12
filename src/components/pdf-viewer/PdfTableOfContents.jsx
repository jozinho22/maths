import { Container, Row, Col } from 'react-bootstrap';

const PdfTableOfContents = ( {pdfItems} ) => {

    return (
        <>
            <p className="Title">Toutes les BDs de Jean-Pierre Petit</p>
            <p className="AuthorCopyRight">Avec l'accord de Mr Petit - <a href="http://www.savoir-sans-frontieres.com/JPP/telechargeables/free_downloads.htm" target="_blank" rel="noopener">toutes ses BDs</a></p>     
            <Row>
                {
                    pdfItems.map(pdfItem => (
                        <Container  key={pdfItem.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12}>
                                <div key={pdfItem.id} className="TableOfContentsButton" >
                                    <a href={`bds-de-jpp/${pdfItem.relativePath}`} rel="noopener">
                                        {pdfItem.title}
                                    </a>
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