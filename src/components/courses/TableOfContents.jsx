import { Row, Col, Button } from 'react-bootstrap';

const TableOfContents = ( {chapters, setCount} ) => {

    return (
        <>
            <Row>
                {
                    chapters.map(chapter => (
                        <Col xs={12} md={6} key={chapter.id}>
                            <Button 
                                className="PrezButton DefaultButton"
                                onClick={() => setCount(chapter.id)}>
                                {chapter.id} - {chapter.name}
                            </Button>
                            {chapter.picture ? chapter.picture : <></>}
                        </Col>
                    ))
                }
            </Row>
        </>
    )

}

export default TableOfContents;