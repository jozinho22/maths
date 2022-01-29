import React from 'react';
import { Form, Container, Button, Table, Row, Col, Alert} from 'react-bootstrap';
import Timer from './Timer';
import './TablesTestQuestionDisplay.css';
import CustomLogger from '../general-content/CustomLogger';

const TablesTestQuestionDisplay = 
        ({ questions, level, count, next, user, setUser}) => {

    // Timer
    const [endTimer, setEndTimer] = React.useState(false);
    const [minutes, setMinutes] = React.useState(0);
    const [secondes, setSecondes] =  React.useState(0);

    const [inputText, setInputText] =  React.useState("");
    const [showRedAlert, setShowRedAlert] = React.useState(false);

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
    
    // A chaque question
    React.useEffect(() => {
        setInputText("");
        setShowRedAlert(false); 
    }, [count]);
    
    // Gestion de l'alerte rouge !!!
    React.useEffect(() => {
        setShowRedAlert(false); 
        if(isNaN(inputText)) {
            setShowRedAlert(true);
        }
    }, [inputText]);

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
                    <Col>{questions[count].enounce}</Col>
                    <Col className="AnswersContainer">
                        <Form className="AnswersInput">
                            <Form.Group>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Entrez le résultat"
                                    value={inputText}
                                    onChange={e => setInputText(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>             
                <br />
                <Alert variant="danger" show={showRedAlert} style={ {width:"60%", margin:"auto"}} >
                        <h3>Numbers only plz !!!</h3>
                </Alert> 
            </Container>

            <Container className="ButtonPlacementQuestions">
                <Button className="BasicButton ValidateButton" 
                        /* type="submit" */ 
                        onClick={doNext}>
                        Valider
                </Button>   
            </Container>
        </Container>
    );
}

export default TablesTestQuestionDisplay;