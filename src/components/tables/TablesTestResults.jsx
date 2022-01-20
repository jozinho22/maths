import { Container, Button, Table } from 'react-bootstrap';

import TablesTestResultsList from './TablesTestResultsList';

import './TablesTestResults.css';

const TablesTestResults = ( {questions, user}) => {

    return (
        
        <Container className="RelativeContainer">
            <div className="ChocoTitle">Résultats</div>

            <Container className="ResultsContainer">

                <Table className="TablesTestResults table-borderless">
                    <tbody>
                        {questions.map(question => (
                            <TablesTestResultsList 
                                key={question.id}
                                question={question}
                                answer={user.answers[question.id]}
                            />
                        ))}
                    </tbody>
                </Table>

            </Container> 

            <div className="ChocoTitle">Score : {user.score}/{questions.length}</div>
 

        </Container>  
    );
}

export default TablesTestResults;