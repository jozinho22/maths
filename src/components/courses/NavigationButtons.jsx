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
                    count > 1 ?  
                    <Button 
                        className="DefaultButton NavigationButton"
                        onClick={() => {setCount(count - 1)}} >
                        {
                                mobile ? 
                                    'Précedent' 
                                        :  chapters[count - 2].name 
                        }
                    </Button> 
                        : ''
                } 
            </Col>
            <Col className="CenterText">
                {count} / {chapters.length} 
            </Col>
            <Col style={{textAlign:"left"}}>
                {
                    count < chapters.length ?
                        <Button 
                            className="DefaultButton NavigationButton"
                            onClick={() => {setCount(count + 1)}} >
                            {
                                mobile ? 'Suivant' :
                                    chapters[count].name
                            }
                        </Button>
                            : ''
                }
        
            </Col>
        </Row>
    );
}

export default NavigationButtons;