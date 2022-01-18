import React from 'react';
import { Container } from 'react-bootstrap';

import TablesTestQuestionDisplay from './TablesTestQuestionDisplay';
import '../general-content/Basic.css';
import TablesTestManager from './TablesTestManager';

import CustomLogger from '../general-content/CustomLogger';

const TablesTest = () => {

    const [maxTime, setMaxTime] =  React.useState(6000);
    const [gameStarted, setGameStarted] =  React.useState(false);

    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState(
        {
            name: '',
            score: 0,
            checkedAnswers: []
        }
    );

    const [questions, setQuestions] = React.useState([]);

    const next = () => {
        setCount (count + 1);
        CustomLogger("count", count, 'TablesTest')
    }

    return (

        <TablesTestManager
                    count={count} 
                    questions={questions}
                    setQuestions={setQuestions} 
                    user={user} 
                    gameStarted={gameStarted}
                    setGameStarted={setGameStarted} >
    
            <Container className="RelativeContainer">
                <TablesTestQuestionDisplay 
                            questions={questions}
                            count={count}
                            next={next} 
                            user={user}
                            setUser={setUser}
                            maxTime={maxTime} /> 
            </Container>

        </TablesTestManager>
            
    );

}

export default TablesTest;