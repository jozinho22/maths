import React from 'react';

import AdditionsTest from './additions/AdditionsTest';
import TablesTest from './tables/TablesTest';

import OperationsTestResults from './OperationsTestResults';
import { OperationsTestContext } from './OperationsTest';

const OperationsTestManager = ({children}) => {

    const {count, questions, gameStarted, operationType} = React.useContext(OperationsTestContext);

    return (

        !gameStarted ?

            (operationType === '+' ? <AdditionsTest /> :
                operationType === 'x' ? <TablesTest /> : <></>) 

                    : count < questions.length ? 
                            children : 

                                <OperationsTestResults />           
    );
}
 
export default OperationsTestManager;