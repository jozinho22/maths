import React from 'react';
import LevelsTableOfContents from './LevelsTableOfContents';
import { OperationsTestContext } from './OperationsTest';

const OperationsTestHome = ({operationType}) => {

    const {levels, launchGame} = React.useContext(OperationsTestContext);
    var title = `Jeu : Effectuer des ${operationType === '+' ? "additions" : operationType === 'x' ? "multiplications" : ""}`;

    return  <LevelsTableOfContents title={title} levels={levels} operationType={operationType} launchGame={launchGame} />;
}

export default OperationsTestHome;