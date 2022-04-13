import { Container, Row, Col } from 'react-bootstrap';
import Link from '../immutable/nav/Link';
import CoursesLinks from '../courses/CoursesLinks';

const PdfTableOfContents = ( {pdfItems} ) => {

    return (
        <>
            <p className="Title">Toutes les BDs de Jean-Pierre Petit</p>
            <p className="AuthorCopyRight">Avec l'accord de Mr Petit - <Link link={CoursesLinks.SAVOIR_SANS_FRONTIERES} >toutes ses BDs</Link></p>     
            <Row>
                {
                    pdfItems.map(pdfItem => (
                        <Container  key={pdfItem.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12}>
                                <div key={pdfItem.id} className="TableOfContentsButton" >
                                    <Link link={`bds-de-jpp/${pdfItem.relativePath}`} >
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