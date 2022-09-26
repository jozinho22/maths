import { Container, Row, Col } from 'react-bootstrap';

const ChapterTableOfContents = ( {title, chapters, setCount} ) => {

    return (
        <>
            <Row>
                {
                    chapters.map(chapter => (
                        <Container key={chapter.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={6} >
                                <div 
                                    className="Clickable NormalFontButton"
                                    onClick={() => setCount(chapter.id)}>
                                    <u>chapitre {chapter.id}</u> - {chapter.name}
                                </div>
                                {/* {chapter.picture ? chapter.picture : <></>} */}
                            </Col>
                        </Container>
                    ))
                }
            </Row>
        </>
    )

}

export default ChapterTableOfContents;