import React from 'react';

import { Container, Button } from 'react-bootstrap';
import MathJaxDisplay from './MathJaxDisplay';
import '../general-content/Basic.css';

import CustomLogger from '../general-content/CustomLogger';

const TablesTestHome = ({setGameStarted, setQuestions}) => {


    function createRandomQuestions() {
        var nbQuestions = 5;
        var maxInt = 15;
        var randomQuestions = [];
        
        for (var i = 0; i < nbQuestions; i++) {
            var randomInt1 = getRandomInt(maxInt);
            var randomInt2 = getRandomInt(maxInt);

            var a = randomInt1;
            var b = randomInt2;
           
            console.log(typeof b)
            var enounceModel = "\\({" + a + "}\\times{"+ b + "} = \\)"; 

            var question = {
                id: i,
                a: a,
                b: b,
                enounceModel: enounceModel,
                enounce: <MathJaxDisplay 
                            toShow={enounceModel}/>
                           ,
                answer: randomInt1*randomInt2
            }

            randomQuestions.push(question); 
            
        }

        setQuestions(randomQuestions);

        return randomQuestions;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const launchGame = () => {
        console.log('Game started !!!!')
        setGameStarted(true);
    }

    React.useEffect(() => {
        createRandomQuestions();
    }, []);

    return (
        <Container className="RelativeContainer">
            <Container className="ButtonPlacement">
                <Button className="BasicButton" onClick={launchGame}>
                    Et c'est parti !
                </Button>
            </Container>
        </Container>
    );

}

export default TablesTestHome;