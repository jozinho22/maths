import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

import getChapters from './getChapters';

import './ProgrammationBasics.css';

const Code = () => {

    var jsLink = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
    var chapters = getChapters();

    const [count, setCount] = React.useState(0);

    console.log(count);

    const NavigationButtons = () => {
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

    return (
            <>
                <p className="Title">Bases de la programmation</p>
                <Container className="ProgrammationBasicsContainer">   
                    {chapters[count].component} 
                    <NavigationButtons />    
                    <a href={jsLink} target="_blank">
                        La documentation complète de javascript ici
                    </a>              
                </Container>
                
              
            </>
            );

}

export default Code;