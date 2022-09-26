import React from 'react';

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