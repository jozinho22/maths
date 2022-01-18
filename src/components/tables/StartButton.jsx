import React from 'react';

import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StartButton = () => {

    const [nbQuestions, setNbQuestions] = React.useState(2);

    return (
        
        <Link 
            to={{
                pathname: "/test",
                nbQuestions: nbQuestions
            }}>
            <Container className="ButtonPlacement">
                <Button className="BasicButton" >
                    Et c'est parti !
                </Button>
            </Container>
        </Link>
    );
}

export default StartButton;