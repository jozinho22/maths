import { Container, Button, Table, Col, Row } from 'react-bootstrap';

import TablesTestResultsList from './TablesTestResultsList';

import './TablesTestResults.css';

const TablesTestResults = ({questions, 
                            user, 
                            levels,
                            reInit}) => {

    return (
        
        <Container className="RelativeContainer">
            <h1 style={{textDecoration: "underline"}}>Résultats</h1>
            <Container className="ResultsContainer">

                <Table className="TablesTestResults">
                    <div>
                        {questions.map(question => (
                            <TablesTestResultsList 
                                key={question.id}
                                question={question}
                                answer={user.answers[question.id]}
                            />
                        ))}
                    </div>
                </Table>

            </Container> 

            <h2>Score : {user.score}/{questions.length}</h2>
            <br></br>
            <h2>Une autre ?</h2>
            <Container className="ButtonPlacement">
                <Row>
                {
                    levels.map(level => (
                        <Col>
                            <Button 
                                key={level.id}
                                className={`${level.style} DefaultButton`}
                                onClick={() => reInit(level.id)} >
                                Rejouer au niveau : {level.title}
                            </Button>
                        </Col>
                        
                    ))
                }
                </Row> 

            </Container>

        </Container>  
    );
}

export default TablesTestResults;