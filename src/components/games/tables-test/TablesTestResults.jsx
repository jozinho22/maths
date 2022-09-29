import React from 'react';
import { Container, Button, Table, Col, Row } from 'react-bootstrap';
import TablesTestResultsList from './TablesTestResultsList';
import { TablesTestContext } from './TablesTest';

import './TablesTestResults.css';

const TablesTestResults = () => {

    const {questions, user, levels, reInit} = React.useContext(TablesTestContext);

    return (
        <>
            <p className="MainTitle">Résultats</p>
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
            <p>Une autre ?</p>
            <Container>
                <Row>
                {
                    levels.map(level => (
                        <Col key={level.id} >
                            <Button 
                                className={`${level.bStyle}Button DefaultButton LargeButton`}
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