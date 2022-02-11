import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Timer from './Timer';
import Alert from '../alert/Alert';
import { updateAlert, reInitAlert } from '../alert/alertFunctions';

import './TablesTestQuestionDisplay.css';
import CustomLogger from '../general-content/CustomLogger';

const TablesTestQuestionDisplay = 
        ({ questions, count, next, user, setUser}) => {

    // Timer
    const [endTimer, setEndTimer] = React.useState(false);
    const [minutes, setMinutes] = React.useState(0);
    const [secondes, setSecondes] =  React.useState(0);

    const [inputText, setInputText] =  React.useState("");
    const [alert, setAlert] = React.useState(
        {
            show: false,
            message : ''
        }
    );

    var maxTime = 0;

    const doNext = () => {

        let trueAnswer = questions[count].goodAnswer;

        const userSlice = {...user};
        var userAnswer = {
            input: inputText,
            isTrue: false
        }
  
        var userInputNumber = parseInt(userAnswer.input);

        if(userAnswer.input !== '') {
            if(userInputNumber === trueAnswer) {
                userSlice.score += 1;
                userAnswer.isTrue = true;
            }
        }
        
        userSlice.answers.push(userAnswer);

        setUser(userSlice);        
        next();
    }

    function setTimer(timeInSecondes) {
        if(timeInSecondes < 59) {
            setMinutes(0);
        } else {
            setMinutes(Math.floor(timeInSecondes / 60));
        }
        setSecondes(timeInSecondes % 60);  
    }
    // Timer
    React.useEffect(() => {
        setEndTimer(false);

        maxTime = 10;
        if(questions[count].a > 9) {
            maxTime = maxTime + 30;
        }
        if(questions[count].b > 9) {
            maxTime = maxTime + 30;
        }

        setTimer(maxTime)
        if(endTimer) {
            doNext();
        }

    }, [endTimer, count]);

    // Réinit pour chaque question
    React.useEffect(() => {
        setInputText("");
        setAlert(reInitAlert());
    }, [count]);
    
    // Gestion de l'alerte rouge !!!
    React.useEffect(() => {
        if(parseInt(inputText) > 10000) {
            if(parseInt(inputText) > 100000) {
                setInputText(inputText.slice(0, inputText.length-1))
            }
            var message = 'Je pense que ça va non ?';
            setAlert(updateAlert(true, message));
        } else {
            setAlert(reInitAlert());
        }
    }, [inputText]);

    const handleKeyboardInput = (keyboardInput) => {
        if(!isNaN(keyboardInput)) {
            if(inputText === '0' && keyboardInput === 0) {
                setAlert(updateAlert(true, 'Très drôle...'))
            } else {
                setInputText(inputText + keyboardInput)
            }
        } else if(keyboardInput === 'C') {
            setInputText("")
        } else if(keyboardInput === '<') {
            setInputText(inputText.slice(0, inputText.length - 1))
        }
    }

    // pb : le clavier se met a jour toutes les secondes;....
    const CiferKeyboard = () => {

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
        return (
            <Container className="CiferKeyboard">
            {
                rows.map(row => (
                    <Row key={row.id}>
                        {row.cols.map(col =>(  
                            <Col key={col.id}>
                                <Button 
                                    className="GreenButton"
                                    onClick={() => handleKeyboardInput(col.cifer)}>
                                    {col.cifer}
                                </Button>
                            </Col>  
                        ))}
                    </Row>
                ))
            }
            </Container> 
        );

    }

    return (
        <>
            <Timer className ="Timer"
                maxTime={maxTime}
                secondes={secondes}
                setSecondes={setSecondes} 
                minutes={minutes}
                setMinutes={setMinutes}
                setEndTimer={setEndTimer} />
            <Container className="QuestionContainer" >    
                <Row>
                    <Col className="Enounce">
                        {questions[count].enounce}
                    </Col>
                    <Col className="AnswerDisplay">
                        {inputText}
                    </Col>
                </Row>  
                <Alert 
                    show={alert.show}
                    message={alert.message}
                    component="TablesTestQuestionDisplay" />
                <CiferKeyboard /> 
            </Container>

            <Container className="ButtonPlacement">
                <Button className="DefaultButton" 
                        /* type="submit" */ 
                        onClick={doNext}>
                        Valider
                </Button>   
            </Container>
        </>
    );
}

export default TablesTestQuestionDisplay;