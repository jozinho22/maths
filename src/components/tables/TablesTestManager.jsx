import React from 'react';
import { Navigate } from 'react-router-dom';

import TablesTestHome from './TablesTestHome';
import TablesTestResults from './TablesTestResults';
import CustomLogger from '../general-content/CustomLogger';

const TablesTestManager = ({count, 
                            levels,
                            questionsByLevel,
                            questions, 
                            setQuestions, 
                            user, 
                            setUser,
                            gameStarted, 
                            setGameStarted, 
                            children}) => {

    CustomLogger('gameStarted', gameStarted, 'MANAGER')
    CustomLogger('questionsByLevel', questionsByLevel, 'MANAGER')

    CustomLogger('questions', questions, 'MANAGER')

    return (

        !gameStarted ?

            <TablesTestHome 
                levels={levels}
                questionsByLevel={questionsByLevel}
                setQuestions={setQuestions} 
                user={user} 
                setUser={setUser}
                setGameStarted={setGameStarted} /> :

                    count < questions.length ? 

                            children : 

                                <TablesTestResults
                                    questions= {questions}
                                    user = {user}
                                    levels={levels} />           
    );
}
 
export default TablesTestManager;