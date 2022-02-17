import {Row, Col, Button} from 'react-bootstrap';

const NavigationButtons = ( {chapters, count, setCount} ) => {
        return (
            <Row>
                <Col style={{textAlign:"right"}}>
                    {
                         count >= 0 ?  
                            <Button 
                                className="DefaultButton"
                                onClick={() => {setCount(count >= 0 ? count - 1 : -1)}} >
                                {count > 0 ? chapters[count - 1].name : 'Sommaire'}
                            </Button> 
                                : ''
                    } 
                </Col>
                <Col className="CenterText">
                    chapitre : {count + 1} / {chapters.length} 
                </Col>
                <Col style={{textAlign:"left"}}>
                    {
                        count < chapters.length - 1 ?
                            <Button 
                                className="DefaultButton"
                                onClick={() => {setCount(count + 1)}} >
                                {chapters[count + 1].name}
                            </Button>
                                : ''
                    }
         
                </Col>
            </Row>
        );
}

export default NavigationButtons;