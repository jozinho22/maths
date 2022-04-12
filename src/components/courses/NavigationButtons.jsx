import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import SizeContext from '../context/SizeContext';

const NavigationButtons = ( {chapters, count, setCount} ) => {

    var [width] = React.useContext(SizeContext);
    var mobile = width < 450; 
    
    return (
        <Row>
            <Col style={{textAlign:"right"}}>
                {
                    count >= 0 ?  
                    <Button 
                        className="DefaultButton NavigationButton"
                        onClick={() => {setCount(count >= 0 ? count - 1 : -1)}} >
                        {
                            count > 0 ? 
                                mobile ? 'Précedent' :
                                    chapters[count - 1].name : 'Sommaire'
                        }
                    </Button> 
                        : ''
                } 
            </Col>
            <Col className="CenterText">
                {count + 1} / {chapters.length} 
            </Col>
            <Col style={{textAlign:"left"}}>
                {
                    count < chapters.length - 1 ?
                        <Button 
                            className="DefaultButton NavigationButton"
                            onClick={() => {setCount(count + 1)}} >
                            {
                                mobile ? 'Précedent' :
                                    chapters[count + 1].name
                            }
                        </Button>
                            : ''
                }
        
            </Col>
        </Row>
    );
}

export default NavigationButtons;