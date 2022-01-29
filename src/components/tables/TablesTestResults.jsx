import { Container, Button, Table } from 'react-bootstrap';

import TablesTestResultsList from './TablesTestResultsList';

import './TablesTestResults.css';

const TablesTestResults = ( {questions, user}) => {

    return (
        
        <Container className="RelativeContainer">
            <br></br>
            <h1 style={{textDecoration: "underline"}}>Résultats</h1>
            <br></br>
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

            <br></br>
            <h2>Score : {user.score}/{questions.length}</h2>
 

        </Container>  
    );
}

export default TablesTestResults;