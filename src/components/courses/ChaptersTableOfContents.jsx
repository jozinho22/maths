import { Container, Row, Col } from 'react-bootstrap';

const ChaptersTableOfContents = ( {chapters, setCount} ) => {

    return (
        <>
            <Row>
                {
                    chapters.map(chapter => (
                        <Container key={chapter.id} className="TableOfContents">
                            <Col xs={12} md={12} >
                                <div 
                                    className="Clickable TableOfContentsLink"
                                    onClick={() => setCount(chapter.id)}>
                                    <p><u>chapitre {chapter.id}</u> - {chapter.name}</p>
                                </div>
                            </Col>
                        </Container>
                    ))
                }
            </Row>
        </>
    )

}

export default ChaptersTableOfContents;