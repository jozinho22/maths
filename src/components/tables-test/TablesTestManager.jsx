import React from 'react';
import { Navigate } from 'react-router-dom';

import TablesTestHome from './TablesTestHome';
import TablesTestResults from './TablesTestResults';
import { TablesTestContext } from './TablesTest';

const TablesTestManager = ({children}) => {

    const {count, questions, gameStarted} = React.useContext(TablesTestContext);

    return (

        !gameStarted ?
            <TablesTestHome /> :

                    count < questions.length ? 
                            children : 

                                <TablesTestResults />           
    );
}
 
export default TablesTestManager;