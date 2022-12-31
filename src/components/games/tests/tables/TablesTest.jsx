import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { OperationsTestContext } from '../OperationsTest';

const TablesTest = () => {

    const {levels, launchGame} = React.useContext(OperationsTestContext);

    return (
        <>
            <p className="MainTitle">Réviser ses tables de multiplication</p>
            <Container >
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

export default TablesTest;