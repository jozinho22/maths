import React from 'react';
import { Navigate } from 'react-router-dom';

import TablesTestHome from './TablesTestHome';
import TablesTestResults from './TablesTestResults';
import CustomLogger from '../general-content/CustomLogger';

const TablesTestManager = ({count, 
                            levels,
                            questions, 
                            user, 
                            launchGame,
                            gameStarted, 
                            reInit,
                            children}) => {

    return (

        !gameStarted ?

            <TablesTestHome 
                levels={levels}
                launchGame={launchGame} /> :

                    count < questions.length ? 

                            children : 

                                <TablesTestResults
                                    questions= {questions}
                                    user = {user}
                                    levels={levels}
                                    reInit={reInit} />           
    );
}
 
export default TablesTestManager;