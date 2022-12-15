import { Container, Row, Col } from 'react-bootstrap';

const ChaptersTableOfContents = ( {chapters, setCount} ) => {

    return (
        <>
            <Row>
                {
                    chapters.map(chapter => (
                        <Container key={chapter.id} className="TableOfContents">
                            <div 
                                className="Clickable TableOfContentsLink"
                                onClick={() => setCount(chapter.id)}>
                                <p><u>chapitre {chapter.id}</u> - {chapter.name}</p>
                            </div>
                        </Container>
                    ))
                }
            </Row>
        </>
    )

}

export default ChaptersTableOfContents;