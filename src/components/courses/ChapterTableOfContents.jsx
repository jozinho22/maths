import { Container, Row, Col, Button } from 'react-bootstrap';

const ChapterTableOfContents = ( {chapters, setCount} ) => {

    return (
        <>
            <Row>
                {
                    chapters.map(chapter => (
                        <Container key={chapter.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={6} >
                                <Button 
                                    className="DefaultButton TableOfContentsButton"
                                    onClick={() => setCount(chapter.id)}>
                                    {chapter.id} - {chapter.name}
                                </Button>
                                {chapter.picture ? chapter.picture : <></>}
                            </Col>
                        </Container>
                    ))
                }
            </Row>
        </>
    )

}

export default ChapterTableOfContents;