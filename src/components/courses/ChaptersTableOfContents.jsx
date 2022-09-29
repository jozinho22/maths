import { Container, Row, Col } from 'react-bootstrap';

const ChaptersTableOfContents = ( {title, chapters, setCount} ) => {

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
                                    <a><u>chapitre {chapter.id}</u> - {chapter.name}</a>
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