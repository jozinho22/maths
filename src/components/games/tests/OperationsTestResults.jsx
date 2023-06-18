import React from 'react';
import { Container } from 'react-bootstrap';
import OperationsTestResultsList from './OperationsTestResultsList';
import { OperationsTestContext } from './OperationsTest';
import LevelsTableOfContents from './LevelsTableOfContents';

import NiceTable from '../../immutable/NiceTable';
import MainTitle from '../../immutable/MainTitle';

const OperationsTestResults = () => {

    const {questions, user, levels, launchGame} = React.useContext(OperationsTestContext);

    return (
        <>
            <MainTitle title={"Résultats"} />
            <Container className="ResultsContainer">
                <NiceTable className="OperationsTestResults">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Vous avez répondu</th>
                            <th>Résultat</th>
                            <th>La bonne réponse</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(question => (
                            <OperationsTestResultsList 
                                key={question.id}
                                question={question}
                                answer={user.answers[question.id]}
                            />
                        ))}
                    </tbody>
                </NiceTable>
            </Container> 

            <p className="CenterTitle">Score : {user.score}/{questions.length}</p>
            <br></br>
            <div>Une autre ?</div>
            <br></br>
            <LevelsTableOfContents title={""} levels={levels} launchGame={launchGame} />
        </>  
    );
}

export default OperationsTestResults;