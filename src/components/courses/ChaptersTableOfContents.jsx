import { Container, Row, Col } from 'react-bootstrap';

const ChaptersTableOfContents = ( {title, chapters, setCount} ) => {

    return (
        <>
            <Row>
                {
                    chapters.map(chapter => (
                        <Container key={chapter.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12} >
                                <div 
                                    className="Clickable TableOfContentsLink"
                                    onClick={() => setCount(chapter.id)}>
                                    <div><u>chapitre {chapter.id}</u> - {chapter.name}</div>
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

export default ChaptersTableOfContents;