import { Button, Row, Col } from 'react-bootstrap';

const PaginationFullDocument = ({pages, beginIndex, step, addPagesToList}) => {

    const BackButton = () => {
        return (
            <Button 
                className="DefaultButton"
                onClick={() => {
                    if(beginIndex >= step) {
                        addPagesToList(beginIndex - step);
                    }
                }} >
                Précédent
            </Button>
        );
    }

    const NextButton = () => {
        return (
            <Button 
                className="DefaultButton"
                onClick={() => {
                    if(beginIndex < pages) {
                        addPagesToList(beginIndex + step);
                    }
                }} >
                Suivant
            </Button>
        );
    }

    return (
        <Row>
            <Col style={{textAlign:"right"}}>
                { beginIndex > 0 ?
                    <BackButton /> 
                        : <></>
                }
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
                {
                    beginIndex + step < pages ? 
                        <NextButton /> 
                            : <></>
                }
            </Col>
        </Row>
    );
}

export default PaginationFullDocument;