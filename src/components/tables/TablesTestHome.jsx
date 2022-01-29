import React from 'react';

import { Container, Button } from 'react-bootstrap';

import CustomLogger from '../general-content/CustomLogger';
import './TablesTestHome.css';

const TablesTestHome = ({levels,
                         questionsByLevel,
                         setQuestions, 
                         user,
                         setUser,
                         setGameStarted
                         }) => {

    const launchGame = (levelId) => {
        console.log('Game started !!!!')

        var userUpdate = {...user};
        levels.map(level => {
            if(levelId === level.id) {
                userUpdate.levelId = levelId;
            }
        });

        CustomLogger('levelId', levelId, 'HOME')
        CustomLogger('questionsByLevel[levelId]', questionsByLevel[levelId], 'HOME')

        setUser(userUpdate);
        setQuestions(questionsByLevel[levelId]);
        setGameStarted(true);
    }

    return (
        <Container className="RelativeContainer">
            <h2>Quizz pour réviser ses tables de multiplication</h2>
                {
                    levels.map(level => (
                        <Container key={level.id} 
                                   className="ButtonPlacement">
                            <Button 
                                className={`${level.style} BasicButton`}
                                onClick={() => launchGame(level.id)}>
                                Niveau : {level.title}
                            </Button>
                        </Container>
                    ))
                }
        </Container>
    );
}

export default TablesTestHome;