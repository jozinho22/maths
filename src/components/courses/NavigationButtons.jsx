import {Row, Col, Button} from 'react-bootstrap';

const NavigationButtons = ( {chapters, count, setCount} ) => {
        return (
            <Row>
                <Col style={{textAlign:"right"}}>
                    {
                         count > 0 ?  
                            <Button 
                                className="DefaultButton BlueButton"
                                onClick={() => {setCount(count - 1)}}
                                disabled={ !(chapters.length > 1 && count > 0) } >
                                {chapters[count - 1].name}
                            </Button> 
                                : ''
                    } 
                </Col>
                <Col className="CenterText">
                    Page : {count + 1} / {chapters.length} 
                </Col>
                <Col style={{textAlign:"left"}}>
                    {
                        count < chapters.length - 1 ?
                            <Button 
                                className="DefaultButton BlueButton"
                                onClick={() => {setCount(count + 1)}}
                                disabled={ !(chapters.length > 1 && count < chapters.length) } >
                                {chapters[count + 1].name}
                            </Button>
                                : ''
                    }
         
                </Col>
            </Row>
        );
}

export default NavigationButtons;