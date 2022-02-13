
import { Button, Row, Col } from 'react-bootstrap';

const PaginationPageByPage = ( {page, pages, setPage} ) => {

    const BackButton = ({disabled}) => {
        return (
            <Button 
                className="DefaultButton"
                disabled={disabled}                 
                onClick={() => {
                    /* setPage(page - 1 > 0 ? page - 1 : 1); */
                    setPage(page - 1);
                }} >
                Prev
            </Button>
        );
    }

    const NextButton = ({disabled}) => {
        return (
            <Button 
                className="DefaultButton"
                disabled={disabled}
                onClick={() => {
                    /* setPage(page + 1 > pages ? pages : page + 1); */
                    setPage(page + 1);
                }} >
                Next
            </Button>
        );
    }

    return (
        <Row>
            <Col style={{textAlign:"right"}}>
                <BackButton disabled={ !(pages > 1 && page > 1) } /> 
            </Col>
            <Col className="CenterText">
                Page : {page} / {pages} 
            </Col>
            <Col style={{textAlign:"left"}}>
                <NextButton disabled={ !(pages > 1 && page < pages) } />  
            </Col>
        </Row>
    );
}

export default PaginationPageByPage;