import React from 'react';
import { Form, Container, Button, Table, Row, Col, Alert} from 'react-bootstrap';
import Timer from './Timer';
import './TablesTestQuestionDisplay.css';
import CustomLogger from '../general-content/CustomLogger';

const TablesTestQuestionDisplay = 
        ({ questions, count, next, user, setUser}) => {

    // Timer
    const [endTimer, setEndTimer] = React.useState(false);
    const [minutes, setMinutes] = React.useState(0);
    const [secondes, setSecondes] =  React.useState(0);

    const [inputText, setInputText] =  React.useState("");
    const [redAlert, setRedAlert] = React.useState(
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

        if(userAnswer.input !== undefined) {
            if(userAnswer.input == trueAnswer) {
                userSlice.score += 1;
                userAnswer.isTrue = true;
            }
            userSlice.answers.push(userAnswer);
        } else {
            userSlice.answers.push(null);
        }  

        setUser(userSlice);        
        next();
    }

    function setTimer(timeInSecondes) {
        if(timeInSecondes < 59) {
            setMinutes(0);
        } else {
            setMinutes(timeInSecondes / 60);
        }
        setSecondes(timeInSecondes % 60);  
    }
    // Timer
    React.useEffect(() => {
        setEndTimer(false);

        maxTime = 10;
        if(questions[count].a > 9) {
            maxTime = maxTime + 20;
        }
        if(questions[count].b > 9) {
            maxTime = maxTime + 20;
        }

        setTimer(maxTime)
        if(endTimer) {
            doNext();
        }

    }, [endTimer, count]);

    function updateRedAlertMessage(show, message) {
        let alertUpdate = {...redAlert};
        alertUpdate.show = show;
        alertUpdate.message = message;
        setRedAlert(alertUpdate);
    }

    // Réinit pour chaque question
    React.useEffect(() => {
        setInputText("");
        updateRedAlertMessage(false, '');
    }, [count]);
    
    // Gestion de l'alerte rouge !!!
    React.useEffect(() => {
        if(parseInt(inputText) > 10000) {
            if(parseInt(inputText) > 100000) {
                setInputText(inputText.slice(0, inputText.length-1))
            }
            var message = 'Je pense que ça va non ?';
            updateRedAlertMessage(true, message);
        } else {
            updateRedAlertMessage(false, '');
        }
    }, [inputText]);

    const handleKeyboardInput = (keyboardInput) => {
        console.log('keyboardInput')
        console.log(typeof keyboardInput)
        console.log(keyboardInput)
        console.log('inputText')
        console.log(typeof inputText)
        console.log(inputText)

        if(!isNaN(keyboardInput)) {
            if(inputText === '0' && keyboardInput === 0) {
                updateRedAlertMessage(true, 'Très drôle...');
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
        var row1 = [1, 2, 3];
        var row2 = [4, 5, 6];
        var row3 = [7, 8, 9];
        var row4 = ['C', 0, '<'];

        var rows = [row1, row2, row3, row4];
        return (
            <Container className="CiferKeyboard">
            {
                rows.map(row => (
                    <Row>
                        {row.map(cifer =>(  
                            <Col>
                                <Button 
                                    className="GreenButton"
                                    onClick={() => handleKeyboardInput(cifer)}>
                                    {cifer}
                                </Button>
                            </Col>  
                        ))}
                    </Row>
                ))
            }
            </Container> 
        );

    }

    const RedAlert = () => {
        return (
            <Container className="Alert" >
                {redAlert.show === true ?
                    <div>{redAlert.message}</div> :
                        <></>
                }
            </Container> 
        );
    }

    return (
        <Container >
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
                <RedAlert />
                <CiferKeyboard /> 
            </Container>

            <Container className="ButtonPlacement">
                <Button className="DefaultButton" 
                        /* type="submit" */ 
                        onClick={doNext}>
                        Valider
                </Button>   
            </Container>
        </Container>
    );
}

export default TablesTestQuestionDisplay;