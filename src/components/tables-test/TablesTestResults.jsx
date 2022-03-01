import { Container, Button, Table, Col, Row } from 'react-bootstrap';

import TablesTestResultsList from './TablesTestResultsList';

import './TablesTestResults.css';

const TablesTestResults = ({questions, 
                            user, 
                            levels,
                            reInit}) => {

    return (
        
        <>
            <p className="Title">Résultats</p>
            <Container className="ResultsContainer">

                <Table className="TablesTestResults">
                    <thead>
                        <tr>
                            {/* <th>Question</th>
                            <th>Vous avez répondu</th>
                            <th>Résultat</th>
                            <th>La bonne réponse</th> */}
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

            <p className="Title">Score : {user.score}/{questions.length}</p>
            <br></br>
            <h3>Une autre ?</h3>
            <Container>
                <Row>
                {
                    levels.map(level => (
                        <Col key={level.id} >
                            <Button 
                                className={`${level.bStyle}Button DefaultButton`}
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