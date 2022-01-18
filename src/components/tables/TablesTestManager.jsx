import React from 'react';
import { Navigate } from 'react-router-dom';

import TablesTestHome from './TablesTestHome';
import '../general-content/Basic.css';

import CustomLogger from '../general-content/CustomLogger';

const TablesTestManager = ({count, questions, setQuestions, user, gameStarted, setGameStarted,
                            children}) => {
           
    CustomLogger('gameStarted', gameStarted, 'TablesTestManager')
    CustomLogger('count', count, 'TablesTestManager')

    return (

        !gameStarted ?

            <TablesTestHome setGameStarted={setGameStarted} setQuestions={setQuestions} /> :

                count < questions.length ? 

                        children : 

                            <Navigate
                                to={{
                                pathname: "/test-results",
                                questions: questions,
                                user: user
                            }}
                        />           
                    );
}
 
export default TablesTestManager;