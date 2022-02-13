import React from 'react';
import { Container, Button } from 'react-bootstrap';

import './TablesTestHome.css';
import CustomLogger from '../general-content/CustomLogger';

const TablesTestHome = ({levels,
                         launchGame
                         }) => {

    return (
        <>
            <p className="Title">Jeu pour réviser ses tables de multiplication</p>
            <Container className="TablesTestHomeButtonContainer"  >
                {
                    levels.map(level => (
                        <div key={level.id}>
                            <Button   
                                className={`${level.bStyle}Button TablesTestHomeButton DefaultButton`}
                                onClick={() => launchGame(level.id)}>
                                Niveau : {level.title}
                            </Button>
                        </div>
                    ))
                }
            </Container>
        </>
    );
}

export default TablesTestHome;