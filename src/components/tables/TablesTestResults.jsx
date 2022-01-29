import { Container, Button, Table, Col, Row } from 'react-bootstrap';

import TablesTestResultsList from './TablesTestResultsList';

import './TablesTestResults.css';

const TablesTestResults = ( {questions, user, levels}) => {

    return (
        
        <Container className="RelativeContainer">
            <h1 style={{textDecoration: "underline"}}>Résultats</h1>
            <Container className="ResultsContainer">

                <Table className="TablesTestResults">
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
 
            <Container className="ButtonPlacement">
            {
                levels.map(level => ( 
                    <Button 
                        key={level.id}
                        className={`${level.style} BasicButton`}
                        /* onClick={() => launchGame(level.id)} */
                        >
                        Rejouer au niveau : {level.title}
                    </Button>
                ))
            }
            </Container>

        </Container>  
    );
}

export default TablesTestResults;