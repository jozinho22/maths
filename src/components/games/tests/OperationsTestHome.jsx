import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { OperationsTestContext } from './OperationsTest';

const OperationsTestHome = ({operationType}) => {

    const {levels, launchGame} = React.useContext(OperationsTestContext);

    return (
        <>
            <p className="MainTitle">Effectuer des {operationType === '+' ? "additions" : operationType === 'x' ? "mulitplications" : ""}</p>
            <Container className="GamesContainer">
                {
                    levels.map(level => (
                        <div key={level.id}>
                            <Button   
                                className={`${level.bStyle}Button DefaultButton LargeButton`}
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

export default OperationsTestHome;