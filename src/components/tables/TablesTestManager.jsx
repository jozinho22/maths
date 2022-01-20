import React from 'react';
import { Navigate } from 'react-router-dom';

import TablesTestHome from './TablesTestHome';
import TablesTestResults from './TablesTestResults';

import '../general-content/Basic.css';

import CustomLogger from '../general-content/CustomLogger';

const TablesTestManager = ({count, questions, setQuestions, user, gameStarted, setGameStarted,
                            children}) => {

    return (

        !gameStarted ?

            <TablesTestHome setGameStarted={setGameStarted} setQuestions={setQuestions} /> :

                count < questions.length ? 

                        children : 

                            <TablesTestResults
                                questions= {questions}
                                user = {user}
                        />           
                    );
}
 
export default TablesTestManager;