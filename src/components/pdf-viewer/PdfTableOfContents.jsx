import { Container, Row, Col } from 'react-bootstrap';
import Link from '../immutable/nav/Link';

const PdfTableOfContents = ( {pdfItems} ) => {

    var SAVOIR_SANS_FRONTIERES = 'http://www.savoir-sans-frontieres.com/JPP/telechargeables/free_downloads.htm';

    return (
        <>
            <p className="Title">Toutes les BDs de Jean-Pierre Petit</p>
            <p className="AuthorCopyRight">Avec l'accord de Mr Petit - <Link link={SAVOIR_SANS_FRONTIERES} >toutes ses BDs</Link></p>     
            <Row>
                {
                    pdfItems.map(pdfItem => (
                        <Container  key={pdfItem.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12}>
                                <div key={pdfItem.id} className="TableOfContentsLink" >
                                    <Link link={`bds-de-jpp/${pdfItem.relativePath}`} internalLink={true} >
                                        {pdfItem.title}
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

export default PdfTableOfContents;