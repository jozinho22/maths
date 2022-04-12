
import { Button, Row, Col } from 'react-bootstrap';

const PaginationPageByPage = ( {page, pages, setPage} ) => {

    const BackButton = () => {
        return (
            <Button 
                className="DefaultButton"
                onClick={() => {
                    setPage(page - 1);
                }} >
                Prev
            </Button>
        );
    }

    const NextButton = () => {
        return (
            <Button 
                className="DefaultButton"
                onClick={() => {
                    setPage(page + 1);
                }} >
                Next
            </Button>
        );
    }

    return (
        <Row>
            <Col style={{textAlign:"right"}}>
                {
                    pages > 1 && page > 1 ? 
                        <BackButton />
                            :  <></>
                }
            </Col>
            <Col className="CenterText">
                page : {page} / {pages} 
            </Col>
            <Col style={{textAlign:"left"}}>
                {
                    pages > 1 && page < pages ? 
                        <NextButton />
                            :  <></>
                }
            </Col>
        </Row>
    );
}

export default PaginationPageByPage;