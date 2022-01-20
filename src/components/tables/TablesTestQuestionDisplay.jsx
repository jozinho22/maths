import React from 'react';
import { Form, Container, Button, Table, Row, Col, Alert} from 'react-bootstrap';
import Timer from './Timer';
import '../general-content/Basic.css';
import './TablesTestQuestionDisplay.css';
import CustomLogger from '../general-content/CustomLogger';

const TablesTestQuestionDisplay = 
        ({ questions, count, next, user, setUser, maxTime}) => {

    // Timer
    const [endTimer, setEndTimer] = React.useState(false);
    const [minutes, setMinutes] = React.useState(0);
    const [secondes, setSecondes] =  React.useState(0);

    const [inputText, setInputText] =  React.useState("");
    const [showRedAlert, setShowRedAlert] = React.useState(false);

    const doNext = () => {

        let trueAnswer = questions[count].answer;

        const userSlice = {...user};
        var answer = {
            input: inputText,
            isTrue: false
        }

        if(answer.input !== undefined) {
            if(answer.input == trueAnswer) {
                userSlice.score += 1;
                answer.isTrue = true;
            }
            userSlice.answers.push(answer);
        } else {
            userSlice.answers.push(0);
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
                <Container className ="Timer">
                    <Timer 
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

                    <h1>{inputText}</h1>   
             
                </Container>

                <Alert variant="danger" show={showRedAlert} >
                        <h1>Numbers only plz !!!</h1>
                </Alert> 

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