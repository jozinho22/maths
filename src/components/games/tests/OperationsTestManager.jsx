import React from 'react';

import OperationsTestResults from './OperationsTestResults';
import { OperationsTestContext } from './OperationsTest';
import OperationsTestHome from './OperationsTestHome';

const OperationsTestManager = ({children}) => {

    const {count, questions, gameStarted, operationType} = React.useContext(OperationsTestContext);

    return (

        !gameStarted ?

            <OperationsTestHome operationType={operationType}/>

                : count < questions.length ? 
                        children : 

                            <OperationsTestResults />           
    );
}
 
export default OperationsTestManager;