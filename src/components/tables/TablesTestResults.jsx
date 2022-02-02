import { Container, Button, Table, Col, Row } from 'react-bootstrap';

import TablesTestResultsList from './TablesTestResultsList';

import './TablesTestResults.css';

const TablesTestResults = ({questions, 
                            user, 
                            levels,
                            reInit}) => {

    return (
        
        <>
            <h2 style={{textDecoration: "underline"}}>Résultats</h2>
            <Container className="ResultsContainer">

                <Table className="TablesTestResults">
                    <thead>
                        <tr>
                            <th>Vous avez répondu</th>
                            <th>Résultat</th>
                            <th>La bonne réponse</th>
                        </tr>
                    </thead>
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

            <h3 style={{textDecoration: "underline"}}>Score : {user.score}/{questions.length}</h3>
            <br></br>
            <h3>Une autre ?</h3>
            <Container>
                <Row>
                {
                    levels.map(level => (
                        <Col key={level.id} >
                            <Button 
                                className={`${level.style} DefaultButton`}
                                onClick={() => reInit(level.id)} >
                                Rejouer au niveau : {level.title}
                            </Button>
                        </Col>
                        
                    ))
                }
                </Row> 
            </Container>
        </>  
    );
}

export default TablesTestResults;