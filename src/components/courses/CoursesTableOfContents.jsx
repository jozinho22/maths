import { Container, Row, Col } from 'react-bootstrap';
import Link from '../immutable/nav/Link';

const CoursesTableOfContents = ( {courseItems} ) => {

    return (
        <>
            <p className="Title">Tous les cours</p>
            <Row>
                {
                    courseItems.map(courseItem => (
                        <Container key={courseItem.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12}>
                                <div key={courseItem.id} className="TableOfContentsLink" >
                                    <Link link={`cours/${courseItem.relativePath}`} internalLink={true} >
                                        {courseItem.title}
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

export default CoursesTableOfContents;