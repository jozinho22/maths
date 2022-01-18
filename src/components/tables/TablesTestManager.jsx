import React from 'react';
import { Navigate } from 'react-router-dom';

import '../general-content/Basic.css';

const TablesTestManager = ({count, questions, user,
                            children}) => {
                
    console.log('count')
    console.log(count)
    console.log('questions.length')
    console.log(questions.length)

    return (

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