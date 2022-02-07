import React from 'react';
import { Container, Button } from 'react-bootstrap';

import CustomLogger from '../general-content/CustomLogger';

const TablesTestHome = ({levels,
                         launchGame
                         }) => {

    return (
        <>
            <h3>Quizz pour réviser ses tables de multiplication</h3>
                {
                    levels.map(level => (
                        <Container key={level.id} >
                            <Button 
                                className={`${level.bStyle}Button DefaultButton`}
                                onClick={() => launchGame(level.id)}>
                                Niveau : {level.title}
                            </Button>
                        </Container>
                    ))
                }
        </>
    );
}

export default TablesTestHome;