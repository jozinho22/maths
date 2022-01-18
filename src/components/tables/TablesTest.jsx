import React from 'react';
import { Container } from 'react-bootstrap';
import { MathJax, MathJaxContext } from "better-react-mathjax";

import TablesTestQuestionDisplay from './TablesTestQuestionDisplay';
import '../general-content/Basic.css';
import TablesTestManager from './TablesTestManager';

const TablesTest = () => {

    const [maxTime, setMaxTime] =  React.useState(6000);
    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState(
        {
            name: '',
            score: 0,
            checkedAnswers: []
        }
    );

    var questions = createRandomQuestions();

    var questionsTest = 
        [
            {
                enounce: <MathJaxContext>
                            <MathJax>
                                {"\\({10}\\times{4x} = \\)"}
                            </MathJax>
                        </MathJaxContext>    ,
                answer: 12        
            },
            {
                enounce: <MathJaxContext>
                            <MathJax>
                                {"\\({10}\\times{4x} \\approx \\)"}
                            </MathJax>
                        </MathJaxContext>    ,
                answer: 8
            }
        ];

    const next = () => {
        console.log(count)
        setCount (count + 1);
    }

    function createRandomQuestions() {
        var nbQuestions = 10;
        var maxInt = 15;
        var randomQuestions = [];
        
        for (var i = 0; i < nbQuestions; i++) {
            var randomInt1 = getRandomInt(maxInt);
            var randomInt2 = getRandomInt(maxInt);
            var enounceModel = "\\({" + randomInt1 + "}\\times{"+ randomInt2 + "} = \\)";
            console.log(enounceModel)

            var question = {
                enounce: <MathJaxContext>
                            <MathJax>
                                {enounceModel}
                            </MathJax>
                        </MathJaxContext>,
                answer: randomInt1*randomInt2
            }
            randomQuestions.push(question);
        }

        return randomQuestions;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    return (

        <TablesTestManager count={count} questions={questions} user={user}>
    
            <Container className="RelativeContainer">
                <TablesTestQuestionDisplay 
                            questions={questions}
                            count={count}
                            next={next} 
                            user={user}
                            setUser={setUser}
                            maxTime={maxTime} /> 
            </Container>

        </TablesTestManager>
            
    );

}

export default TablesTest;