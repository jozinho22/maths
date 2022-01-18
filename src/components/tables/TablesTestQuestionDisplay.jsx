import React from 'react';
import { Form, Container, Button, Table, Row, Col, Alert} from 'react-bootstrap';
import Timer from './Timer';
import '../general-content/Basic.css';
import './TablesTestQuestionDisplay.css';

const TablesTestQuestionDisplay = 
        ({ questions, count, next, user, setUser, maxTime}) => {

    // Timer
    const [endTimer, setEndTimer] = React.useState(false);
    const [minutes, setMinutes] = React.useState(0);
    const [secondes, setSecondes] =  React.useState(0);

    const [inputText, setInputText] =  React.useState("");
    const [showRedAlert, setShowRedAlert] = React.useState(false);

    const doNext = () => {
/*         let indexCheckedAnswer = questions[count].answers.findIndex(answer => answer.id === checkedAnswerId);
        let checkedAnswer = questions[count].answers[indexCheckedAnswer];

        if(checkedAnswer !== undefined) {
            userSlice.checkedAnswers.push(checkedAnswer);
            if(checkAnswerIsTrue(checkedAnswer.id)) {
                userSlice.score += 1;
            }
        } else {
            userSlice.checkedAnswers.push(0);
        }  

        setUser(userSlice);
        // reinit sinon conserve la valeur précédente
        setCheckedAnswerId(0); */
        
        console.log('doNext')
        next();
    }

    const handleCheck = (id) => {
/*         setCheckedAnswerId(id);
 */    }

    function checkAnswerIsTrue(id) {        
/*         const answersSlice = [...questions[count].answers];
        const index = answersSlice.findIndex(answer => answer.id === id);
        return (answersSlice[index].isTrue); */
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
                <Container className="QuestionContainer">    
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