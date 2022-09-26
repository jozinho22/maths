import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// pb : le clavier se met a jour toutes les secondes;....
const CiferKeyboard = ( {handleKeyboardInput} ) => {

    var rows = [];
    var index = 0;
    for(var k = 0; k < 3; k++) {
        var cols = [];
        for(var l = 0; l < 3; l++) {
            var col = {id: 'col' + index, cifer: index + 1};
            cols.push(col);
            index++;
        }
        rows.push({id: 'row' + k, cols: cols});
    }
    
    rows.push(
        {
            id: 'row' + 4, 
            cols: [
                    {
                        id: 'col' + index++, 
                        cifer: 'C'
                    },
                    {
                        id: 'col' + index++, 
                        cifer: 0
                    },
                    {
                        id: 'col' + index++, 
                        cifer: '<'
                    }
                ]
        }
    );

    const memoizedKeyboard = React.useMemo(() => (
    
            <Container className="CiferKeyboard">
                {
                    rows.map(row => (
                        <Row key={row.id}>
                            {row.cols.map(col =>(  
                                <Col key={col.id}>
                                    <Button 
                                        className="KeyboardButton"
                                        onClick={() => handleKeyboardInput(col.cifer)}>
                                        {col.cifer}
                                    </Button>
                                </Col>  
                            ))}
                        </Row>
                    ))
                }
            </Container> 
    ), []);

    return memoizedKeyboard;
}

export default CiferKeyboard;