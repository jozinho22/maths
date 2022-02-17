import { Button, Row, Col } from 'react-bootstrap';

const PaginationFullDocument = ({pages, beginIndex, step, addPagesToList}) => {

    const BackButton = ({disabled}) => {
        return (
            <Button 
                className="DefaultButton"
                disabled={disabled} 
                onClick={() => {
                    if(beginIndex >= step) {
                        addPagesToList(beginIndex - step);
                    }
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
                    if(beginIndex < pages) {
                        addPagesToList(beginIndex + step);
                    }
                }} >
                Next
            </Button>
        );
    }

    return (
        <Row>
            <Col style={{textAlign:"right"}}>
                <BackButton disabled={ !(beginIndex > 0) } /> 
            </Col>
            <Col className="CenterText">
                <p>pages : 
                {
                    beginIndex > pages ? 
                        pages : 
                            (beginIndex + 1) 
                            + ' - ' 
                            + ((beginIndex + step) < pages ? (beginIndex + step) : pages)
                } 
                / {pages} </p>
            </Col>
            <Col style={{textAlign:"left"}}>
                <NextButton disabled={ !(beginIndex + step < pages) } /> 
            </Col>
        </Row>
    );
}

export default PaginationFullDocument;