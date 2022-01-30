import React from 'react';
import { Container, Button } from 'react-bootstrap';

import CustomLogger from '../general-content/CustomLogger';

const TablesTestHome = ({levels,
                         launchGame
                         }) => {

    return (
        <>
            <h2>Quizz pour réviser ses tables de multiplication</h2>
                {
                    levels.map(level => (
                        <Container key={level.id} 
                                   className="ButtonPlacement">
                            <Button 
                                className={`${level.style} DefaultButton`}
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