import { Container, Row, Col, Button } from 'react-bootstrap';

const TableOfContents = ( {chapters, setCount} ) => {


    return (
        <>
            <Row>
            {
                chapters.map(chapter => (
                    <Col xs={12} md={6} key={chapter.id}>
                        <Container className="ShapesContainer">
                            <Button 
                                className="PrezButton DefaultButton"
                                onClick={() => setCount(chapter.id)}>
                                {chapter.name}
                            </Button>
                            {chapter.picture}
                        </Container>
                    </Col>
                ))
            }
            </Row>
        </>
    )

}

export default TableOfContents;